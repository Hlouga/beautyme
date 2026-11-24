import { db } from "@/db";
import { providerProfiles } from "@/db/schema";
import { createClient } from "@/lib/supabase/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { HoursForm } from "@/components/dashboard/HoursForm";

export const instant = false;

export default async function HoursPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const profile = await db.query.providerProfiles.findFirst({
    where: eq(providerProfiles.userId, user.id),
  });

  if (!profile) redirect("/dashboard/onboarding");

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1A1A2E]">Business Hours</h1>
        <p className="text-gray-500 mt-1">Let clients know when you are available for appointments.</p>
      </div>

      <HoursForm initialHours={profile.hours as any} />
    </div>
  );
}