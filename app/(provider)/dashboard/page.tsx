import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { db } from "@/db";
import { providerProfiles, services, portfolioItems } from "@/db/schema";
import { eq } from "drizzle-orm";
import { CompletenessCard } from "@/components/dashboard/CompletenessCard";

export const instant = false;

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const existingProfile = await db.query.providerProfiles.findFirst({
    where: eq(providerProfiles.userId, user.id),
    with: {
      services: true,
      portfolioItems: true,
    }
  });

  // Determine completion status
  const hasBio = !!existingProfile?.bio;
  const hasServices = (existingProfile?.services?.length || 0) > 0;
  const hasPortfolio = (existingProfile?.portfolioItems?.length || 0) > 0;
  const hasHours = existingProfile?.hours !== null && Object.keys(existingProfile?.hours as any || {}).length > 0;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1A1A2E]">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Welcome back, {user.email}</p>
      </div>
      

      {existingProfile && (
        <CompletenessCard 
          hasBio={hasBio} 
          hasServices={hasServices} 
          hasPortfolio={hasPortfolio} 
          hasHours={hasHours} 
        />
      )}

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-[#1A1A2E]">Your Profile Status</h2>
        
        {existingProfile ? (
          <div>
            <p className="text-gray-600 mb-6">
              Your profile is currently <strong className="uppercase text-[#8600B3]">{existingProfile.moderationStatus}</strong>.
            </p>
            <Link 
              href={`/providers/${existingProfile.slug}`}
              className="inline-block bg-[#8600B3] hover:bg-[#6e0093] text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              View Public Profile
            </Link>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-6">
              You haven't set up your provider profile yet. Let's get your work out there!
            </p>
            <Link 
              href="/dashboard/onboarding"
              className="inline-block bg-[#8600B3] hover:bg-[#6e0093] text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Create Profile
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}