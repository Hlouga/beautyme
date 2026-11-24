"use client";

import { useState } from "react";
import { replyToReview } from "@/actions/reviews";

export function ReviewReplyForm({ reviewId, existingReply }: { reviewId: string, existingReply: string | null }) {
  const [reply, setReply] = useState(existingReply || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(!existingReply);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reply.trim()) return;
    
    setIsSubmitting(true);
    try {
      await replyToReview(reviewId, reply);
      setIsEditing(false);
    } catch (error) {
      alert("Failed to post reply.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isEditing && existingReply) {
    return (
      <div className="mt-4 bg-[#8600B3]/5 border border-[#8600B3]/20 p-4 rounded-xl">
        <div className="flex justify-between items-start mb-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8600B3]">Your Reply</span>
          <button onClick={() => setIsEditing(true)} className="text-xs text-gray-500 hover:text-[#8600B3] underline">
            Edit
          </button>
        </div>
        <p className="text-sm text-gray-700">{existingReply}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
      <textarea
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Write a professional reply..."
        rows={2}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3] resize-none"
      />
      <div className="flex justify-end gap-2">
        {existingReply && (
          <button 
            type="button" 
            onClick={() => { setIsEditing(false); setReply(existingReply); }}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={isSubmitting || !reply.trim()}
          className="bg-[#8600B3] hover:bg-[#6e0093] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Posting..." : "Post Reply"}
        </button>
      </div>
    </form>
  );
}