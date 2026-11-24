import { db } from "@/db";
import { providerProfiles } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ModerationActions } from "@/components/admin/ModerationActions";

export const instant = false;

export default async function AdminProviderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const profile = await db.query.providerProfiles.findFirst({
    where: eq(providerProfiles.id, id),
    with: {
      services: true,
      portfolioItems: true,
    },
  });

  if (!profile) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto w-full">
      <Link href="/admin" className="text-sm font-medium text-gray-500 hover:text-[#8600B3] mb-6 inline-block">
        &larr; Back to Moderation Queue
      </Link>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#1A1A2E]">{profile.displayName}</h1>
            <p className="text-gray-500 mt-1 capitalize">{profile.category.replace("_", " ")} • {profile.city}</p>
          </div>
          <ModerationActions profileId={profile.id} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Contact Info</h3>
            <ul className="text-sm text-gray-700 flex flex-col gap-1">
              <li><strong>Phone:</strong> {profile.phone || "Not provided"}</li>
              <li><strong>Email:</strong> {profile.emailPublic || "Not provided"}</li>
              <li><strong>Website:</strong> {profile.websiteUrl || "Not provided"}</li>
              <li><strong>Instagram:</strong> {profile.instagramUrl || "Not provided"}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Bio</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{profile.bio || "No bio provided."}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Services ({profile.services.length})</h3>
          {profile.services.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {profile.services.map((s) => (
                <span key={s.id} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {s.name}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 italic">No services listed.</p>
          )}
        </div>
      </div>
    </div>
  );
}