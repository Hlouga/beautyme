import { db } from "@/db";
import { reviews, providerProfiles } from "@/db/schema";
import { createClient } from "@/lib/supabase/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import Link from "next/link";

export const instant = false;

export default async function ClientDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // Fetch all reviews this user has left
  const myReviews = await db.query.reviews.findMany({
    where: eq(reviews.reviewerUserId, user.id),
    orderBy: (reviews, { desc }) => [desc(reviews.createdAt)],
    with: {
      providerProfile: true,
    },
  });

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 w-full">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#1A1A2E]">My Account</h1>
          <p className="text-gray-500">Welcome, {user.email}</p>
        </div>
        <Link 
          href="/dashboard" 
          className="bg-[#8600B3]/10 text-[#8600B3] px-4 py-2 rounded-lg font-medium hover:bg-[#8600B3]/20 transition-colors"
        >
          Provider Dashboard &rarr;
        </Link>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-6 text-[#1A1A2E]">Reviews You've Left</h2>
        
        {myReviews.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">You haven't left any reviews yet.</p>
            <Link href="/search" className="text-[#8600B3] font-medium hover:underline">
              Find a provider to review
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {myReviews.map((review) => (
              <div key={review.id} className="border border-gray-100 p-4 rounded-xl bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                  <Link href={`/providers/${review.providerProfile?.slug}`} className="font-bold text-[#1A1A2E] hover:text-[#8600B3]">
                    {review.providerProfile?.displayName}
                  </Link>
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{review.body}</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className={`px-2 py-1 rounded-full font-medium ${
                    review.moderationStatus === 'approved' ? 'bg-green-100 text-green-700' : 
                    review.moderationStatus === 'rejected' ? 'bg-red-100 text-red-700' : 
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {review.moderationStatus.toUpperCase()}
                  </span>
                  <span className="text-gray-400">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}