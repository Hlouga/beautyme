import { db } from "@/db";
import { providerProfiles } from "@/db/schema";
import { eq } from "drizzle-orm";
import { ModerationActions } from "@/components/admin/ModerationCard";
import Link from "next/link";

export const instant = false;

export default async function AdminDashboard() {
  const pendingProfiles = await db.query.providerProfiles.findMany({
    where: eq(providerProfiles.moderationStatus, "pending"),
    orderBy: (profiles, { desc }) => [desc(profiles.createdAt)],
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#1A1A2E] mb-2">Moderation Queue</h1>
      <p className="text-gray-500 mb-8">Review and approve new provider profiles before they go live.</p>

      {pendingProfiles.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl border border-gray-100 text-center shadow-sm">
          <p className="text-gray-500">🎉 All caught up! No pending profiles to review.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {pendingProfiles.map((profile) => (
            <div key={profile.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-lg font-bold text-[#1A1A2E]">{profile.displayName}</h3>
                <p className="text-sm text-gray-500 mb-2">{profile.city} • {profile.category.replace("_", " ")}</p>
                <p className="text-sm text-gray-600 line-clamp-2 max-w-xl">{profile.bio}</p>
                <Link href={`/providers/${profile.slug}`} target="_blank" className="text-sm text-[#8600B3] hover:underline mt-2 inline-block">
                  Preview Public Page &rarr;
                </Link>
              </div>
              
              <div className="shrink-0">
                <ModerationActions profileId={profile.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}