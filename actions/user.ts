"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { createClient } from "@/lib/supabase/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function updateDateOfBirth(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const dob = formData.get("dateOfBirth") as string;

  if (!dob) throw new Error("Date of birth is required.");

  // Server-side Age Verification
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age < 18) {
    throw new Error("You must be at least 18 years old.");
  }

  // Update the private users table
  await db.update(users)
    .set({ dateOfBirth: dob })
    .where(eq(users.id, user.id));

  revalidatePath("/dashboard/profile");
}