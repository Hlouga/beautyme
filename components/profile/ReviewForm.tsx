"use client";

import { useState } from "react";
import { submitReview } from "@/actions/reviews";

export function ReviewForm({ providerProfileId, slug }: { providerProfileId: string, slug: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    try {
      await submitReview(formData);
      // Reset form
      (e.target as HTMLFormElement).reset();
      alert("Review submitted!");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-6">
      <h3 className="font-bold text-lg text-[#1A1A2E] mb-4">Leave a Review</h3>
      
      <input type="hidden" name="providerProfileId" value={providerProfileId} />
      <input type="hidden" name="slug" value={slug} />

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
        <select name="rating" required className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]">
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Good</option>
          <option value="3">3 - Average</option>
          <option value="2">2 - Poor</option>
          <option value="1">1 - Terrible</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
        <textarea
          name="body"
          required
          rows={3}
          placeholder="Tell us about your experience..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3] resize-none"
        />
      </div>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#8600B3] hover:bg-[#6e0093] text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}