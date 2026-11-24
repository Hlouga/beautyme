"use server";

import { db } from "@/db";
import { portfolioItems, providerProfiles } from "@/db/schema";
import { createClient } from "@/lib/supabase/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

// 1. Function to save a newly uploaded image
export async function savePortfolioItem(imageKey: string, caption: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const profile = await db.query.providerProfiles.findFirst({
    where: eq(providerProfiles.userId, user.id),
  });
  if (!profile) throw new Error("Profile not found");

  await db.insert(portfolioItems).values({
    providerProfileId: profile.id,
    imageKey,
    caption,
    altText: caption || "Portfolio image",
  });

  revalidatePath("/dashboard/portfolio");
  revalidatePath(`/providers/${profile.slug}`);
}

// 2. Function to set an image as the Cover Photo
export async function setCoverImage(imageId: string, profileId: string, slug: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  // A. Remove the featured flag from ALL images for this provider
  await db.update(portfolioItems)
    .set({ isFeatured: false })
    .where(eq(portfolioItems.providerProfileId, profileId));

  // B. Set the featured flag to TRUE for the selected image
  await db.update(portfolioItems)
    .set({ isFeatured: true })
    .where(eq(portfolioItems.id, imageId));

  revalidatePath("/dashboard/portfolio");
  revalidatePath(`/providers/${slug}`);
}