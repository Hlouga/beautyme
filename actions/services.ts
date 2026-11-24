"use server";

import { db } from "@/db";
import { services, providerProfiles } from "@/db/schema";
import { createClient } from "@/lib/supabase/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addService(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");


  const profile = await db.query.providerProfiles.findFirst({
    where: eq(providerProfiles.userId, user.id),
  });

  if (!profile) throw new Error("Profile not found");

  const name = formData.get("name") as string;
  const category = formData.get("category") as string;
  const description = formData.get("description") as string;
  const priceRange = formData.get("priceRange") as string;
  const imageKey = formData.get("imageKey") as string;

  await db.insert(services).values({
    providerProfileId: profile.id,
    name,
    category,
    description,
    priceRange,
    imageKey: imageKey || null,
  });


  revalidatePath("/dashboard/services");
  revalidatePath(`/providers/${profile.slug}`);
}


export async function deleteService(serviceId: string, slug: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  await db.delete(services).where(eq(services.id, serviceId));

  revalidatePath("/dashboard/services");
  revalidatePath(`/providers/${slug}`);
}

export async function updateService(serviceId: string, slug: string, formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const name = formData.get("name") as string;
  const category = formData.get("category") as string;
  const description = formData.get("description") as string;
  const priceRange = formData.get("priceRange") as string;
  const imageKey = formData.get("imageKey") as string;

  await db.update(services)
    .set({ 
      name, 
      category,
      description, 
      priceRange,
      imageKey: imageKey || null
    })
    .where(eq(services.id, serviceId));

  revalidatePath("/dashboard/services");
  revalidatePath(`/providers/${slug}`);
}