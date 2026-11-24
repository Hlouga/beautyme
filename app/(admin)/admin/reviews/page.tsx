import { db } from "@/db";
import { reviews } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { ReviewModerationActions } from "@/components/admin/ReviewModerationActions";

export const instant = false;

export default async function AdminReviewsPage() {
  const pendingReviews = await db.query.reviews.findMany({
    where: eq(reviews.moderationStatus, "pending"),
    orderBy: [desc(reviews.createdAt)],
    with: {
      reviewer: true,
      providerProfile: true,
    },
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1A1A2E]">Review Moderation</h1>
        <p className="text-gray-500">Approve or reject client reviews before they appear on public profiles.</p>
      </div>

      {pendingReviews.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl border border-gray-100 text-center shadow-sm">
          <p className="text-gray-500">🎉 All caught up! No pending reviews to moderate.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {pendingReviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-[#1A1A2E]">{review.reviewer?.fullName || "Anonymous"}</span>
                  <span className="text-gray-400 text-sm">reviewed</span>
                  <span className="font-bold text-[#8600B3]">{review.providerProfile?.displayName}</span>
                </div>
                
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                  ))}
                </div>

                <p className="text-gray-700 text-sm bg-gray-50 p-4 rounded-xl border border-gray-100 italic">
                  "{review.body}"
                </p>
              </div>
              
              <div className="shrink-0">
                <ReviewModerationActions reviewId={review.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}