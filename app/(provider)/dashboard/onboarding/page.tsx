import { createProviderProfile } from "@/actions/provider";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { connection } from "next/server";

export const instant = false;

export default async function OnboardingPage() {
  await connection();

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="mb-8">
        <Link href="/dashboard" className="text-sm text-[#8600B3] hover:underline mb-4 inline-block">
          &larr; Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-[#1A1A2E]">Create your Provider Profile</h1>
        <p className="text-gray-500 mt-2">
          Tell clients about your business and what you offer.
        </p>
      </div>

      <form action={createProviderProfile} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">
        
        {/* Display Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name (Optional)</label>
            <input
              type="text"
              name="ownerName"
              placeholder="e.g., Thandi Mokoena"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]"
            />
          </div>
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business / Display Name</label>
            <input
              type="text"
              name="displayName"
              required
              placeholder="e.g., Thandi's Crochet"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            name="category"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3] bg-white"
          >
            <option value="">Select a category...</option>
            <option value="hairdresser">Hairdresser</option>
            <option value="makeup_artist">Makeup Artist</option>
            <option value="nail_technician">Nail Technician</option>
            <option value="massage_therapist">Massage Therapist</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input
            type="text"
            name="city"
            required
            placeholder="e.g., Austin"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Short Bio</label>
          <textarea
            name="bio"
            required
            rows={4}
            placeholder="Tell clients about your experience, style, and what makes you unique..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3] resize-none"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-[#8600B3] hover:bg-[#6e0093] text-white py-3 rounded-lg font-medium transition-colors"
        >
          Submit for Review
        </button>
      </form>
    </div>
  );
}