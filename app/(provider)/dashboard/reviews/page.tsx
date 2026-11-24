import { db } from "@/db";
import { reviews, providerProfiles } from "@/db/schema";
import { createClient } from "@/lib/supabase/server";
import { eq, desc } from "drizzle-orm";
import { redirect } from "next/navigation";
import { ReviewReplyForm } from "@/components/dashboard/ReviewReplyForm";

export const instant = false;

export default async function ProviderReviewsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const profile = await db.query.providerProfiles.findFirst({
    where: eq(providerProfiles.userId, user.id),
  });

  if (!profile) redirect("/dashboard/onboarding");

  // Fetch all reviews for this provider, newest first
  const myReviews = await db.query.reviews.findMany({
    where: eq(reviews.providerProfileId, profile.id),
    orderBy: [desc(reviews.createdAt)],
    with: {
      reviewer: true,
    },
  });

  // Calculate average rating
  const avgRating = myReviews.length > 0 
    ? (myReviews.reduce((acc, rev) => acc + rev.rating, 0) / myReviews.length).toFixed(1)
    : "0.0";

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1A1A2E]">Client Reviews</h1>
        <p className="text-gray-500 mt-1">Manage your reputation and reply to feedback.</p>
      </div>

      {/* Stats Bar */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 flex items-center gap-6">
        <div className="flex flex-col items-center justify-center bg-[#8600B3]/5 rounded-xl p-4 min-w-[120px]">
          <span className="text-4xl font-extrabold text-[#8600B3]">{avgRating}</span>
          <div className="flex text-yellow-400 mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < Math.round(Number(avgRating)) ? "★" : "☆"}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold text-[#1A1A2E]">{myReviews.length} Total Reviews</p>
          <p className="text-sm text-gray-500">Replying to reviews shows clients you care about their experience.</p>
        </div>
      </div>

      {/* Reviews List */}
      <div className="flex flex-col gap-6">
        {myReviews.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-gray-100 text-center shadow-sm">
            <p className="text-gray-500">You haven't received any reviews yet.</p>
          </div>
        ) : (
          myReviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="font-semibold text-[#1A1A2E] block">
                    {review.reviewer?.fullName || "Anonymous Client"}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(review.createdAt).toLocaleDateString('en-ZA', { 
                      year: 'numeric', month: 'long', day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                  {review.moderationStatus === "pending" && (
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded mt-1">Pending Approval</span>
                  )}
                </div>
              </div>
              
              <p className="text-gray-700 text-sm leading-relaxed mb-2">{review.body}</p>
              
              <hr className="border-gray-100 my-4" />
              
              <ReviewReplyForm reviewId={review.id} existingReply={review.providerReply} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}