"use server";

import { db } from "@/db";
import { reviews, providerProfiles, users } from "@/db/schema";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { eq, and } from "drizzle-orm";


export async function submitReview(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) throw new Error("You must be logged in to leave a review.");

  const fallbackName = user.email ? user.email.split('@')[0] : "BeautyMe Client";
  await db.insert(users).values({
    id: user.id,
    email: user.email!,
    fullName: user.user_metadata?.full_name || fallbackName, 
    role: "client",
  }).onConflictDoNothing();

  const providerProfileId = formData.get("providerProfileId") as string;
  const rating = parseInt(formData.get("rating") as string, 10);
  const body = formData.get("body") as string;
  const slug = formData.get("slug") as string;

  try {
    await db.insert(reviews).values({
      providerProfileId,
      reviewerUserId: user.id,
      rating,
      body,
      moderationStatus: "pending",
    });

    revalidatePath(`/providers/${slug}`);
  } catch (error: any) {
    if (error.code === "23505") {
      throw new Error("You have already reviewed this provider.");
    }
    throw new Error("Failed to submit review.");
  }
}

// 2. Function for Providers to reply to reviews
export async function replyToReview(reviewId: string, replyText: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  // Get the provider's profile
  const profile = await db.query.providerProfiles.findFirst({
    where: eq(providerProfiles.userId, user.id),
  });
  if (!profile) throw new Error("Profile not found");

  // Update the review ONLY if it belongs to this provider
  await db.update(reviews)
    .set({ providerReply: replyText })
    .where(
      and(
        eq(reviews.id, reviewId),
        eq(reviews.providerProfileId, profile.id)
      )
    );

  // Revalidate both the dashboard and public profile
  revalidatePath("/dashboard/reviews");
  revalidatePath(`/providers/${profile.slug}`);
}