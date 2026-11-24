"use client";

import { useState } from "react";
import { updateReviewStatus } from "@/actions/admin";

export function ReviewModerationActions({ reviewId }: { reviewId: string }) {
  const [loading, setLoading] = useState(false);

  const handleAction = async (status: "approved" | "rejected") => {
    setLoading(true);
    try {
      await updateReviewStatus(reviewId, status);
    } catch (error) {
      alert("Error updating review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleAction("approved")}
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
      >
        Approve
      </button>
      <button
        onClick={() => handleAction("rejected")}
        disabled={loading}
        className="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
      >
        Reject
      </button>
    </div>
  );
}