"use server";

import { db } from "@/db";
import { users, providerProfiles } from "@/db/schema";
import { createClient } from "@/lib/supabase/server";
import { slugify } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm"; // Add this at the top if missing

export async function createProviderProfile(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || !user.email) {
    throw new Error("You must be logged in to create a profile.");
  }

  const displayName = formData.get("displayName") as string;
  const ownerName = formData.get("ownerName") as string;
  const category = formData.get("category") as string;
  const city = formData.get("city") as string;
  const bio = formData.get("bio") as string;
  

  // 1. Ensure the user exists in our public.users table (solves the FK issue)
  await db.insert(users).values({
    id: user.id,
    email: user.email,
    dateOfBirth: user.user_metadata?.date_of_birth || null, 
    acceptedTermsAt: new Date(),
    fullName: user.user_metadata?.full_name || "New User",
    role: "provider",
  }).onConflictDoNothing();

  // 2. Generate a unique slug
  const baseSlug = slugify(displayName);
  const slug = `${baseSlug}-${Math.floor(Math.random() * 1000)}`; 

  // 3. Create the provider profile
  await db.insert(providerProfiles).values({
    userId: user.id,
    slug: slug,
    displayName: displayName,
    ownerName: ownerName || null,
    category: category,
    city: city,
    country: "South Africa", // Default for now
    bio: bio,
    moderationStatus: "pending", // Defaults to pending moderation
    isPublished: false,
  });

  // 4. Redirect them to the dashboard
  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function updateProviderProfile(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const displayName = formData.get("displayName") as string;
  const ownerName = formData.get("ownerName") as string;
  const category = formData.get("category") as string;
  const city = formData.get("city") as string;
  const bio = formData.get("bio") as string;
  const phone = formData.get("phone") as string;
  const emailPublic = formData.get("emailPublic") as string;
  const websiteUrl = formData.get("websiteUrl") as string;
  const instagramUrl = formData.get("instagramUrl") as string;

  const showPhone = formData.get("showPhone") === "on";
  const showOwnerName = formData.get("showOwnerName") === "on";
  const showEmail = formData.get("showEmail") === "on";
  const showWebsite = formData.get("showWebsite") === "on";
  const showInstagram = formData.get("showInstagram") === "on";

  await db.update(providerProfiles)
    .set({
      displayName,
      ownerName: ownerName || null,
      showOwnerName,
      category,
      city,
      bio,
      phone: phone || null,
      emailPublic: emailPublic || null,
      websiteUrl: websiteUrl || null,
      instagramUrl: instagramUrl || null,
      showPhone,
      showEmail,
      showWebsite,
      showInstagram,
      updatedAt: new Date(),
    })
    .where(eq(providerProfiles.userId, user.id));

  // Find the slug so we can revalidate the public page
  const profile = await db.query.providerProfiles.findFirst({
    where: eq(providerProfiles.userId, user.id),
  });

  if (profile) {
    revalidatePath(`/providers/${profile.slug}`);
  }
  revalidatePath("/dashboard/profile");
}

export async function updateOpeningHours(hoursData: any) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  await db.update(providerProfiles)
    .set({ hours: hoursData })
    .where(eq(providerProfiles.userId, user.id));

  const profile = await db.query.providerProfiles.findFirst({
    where: eq(providerProfiles.userId, user.id),
  });

  if (profile) {
    revalidatePath(`/providers/${profile.slug}`);
  }
  revalidatePath("/dashboard/hours");
}

export async function updateProfileImage(imageKey: string, slug: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  await db.update(providerProfiles)
    .set({ profileImageKey: imageKey })
    .where(eq(providerProfiles.userId, user.id));

  revalidatePath("/dashboard/profile");
  revalidatePath(`/providers/${slug}`);
}