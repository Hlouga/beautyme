"use server";

import { db } from "@/db";
import { providerProfiles, users, reviews } from "@/db/schema";
import { createClient } from "@/lib/supabase/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";


// Helper to ensure the user is an admin
async function verifyAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const dbUser = await db.query.users.findFirst({
    where: eq(users.id, user.id),
  });

  if (dbUser?.role !== "admin") {
    throw new Error("Forbidden: Admins only");
  }
}

export async function updateProfileStatus(profileId: string, status: "approved" | "rejected") {
  await verifyAdmin();

  await db.update(providerProfiles)
    .set({ 
      moderationStatus: status,
      isPublished: status === "approved" // Auto-publish if approved
    })
    .where(eq(providerProfiles.id, profileId));

  revalidatePath("/admin");
  revalidatePath("/"); // Refresh the homepage discovery feed
}

export async function updateReviewStatus(reviewId: string, status: "approved" | "rejected") {
  await verifyAdmin(); // Uses the helper we built earlier

  await db.update(reviews)
    .set({ moderationStatus: status })
    .where(eq(reviews.id, reviewId));

  revalidatePath("/admin/reviews");
}