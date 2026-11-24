import { db } from "@/db";
import { providerProfiles, users } from "@/db/schema";
import { createClient } from "@/lib/supabase/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { AvatarUpload } from "@/components/dashboard/AvatarUpload";
import { updateProviderProfile } from "@/actions/provider";
import Link from "next/link";
import { updateDateOfBirth } from "@/actions/user";

export const instant = false;

export default async function EditProfilePage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string }>;
}) {
  const resolvedParams = await searchParams;
  const isSuccess = resolvedParams.success === "true";

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const profile = await db.query.providerProfiles.findFirst({
    where: eq(providerProfiles.userId, user.id),
  });

  if (!profile) redirect("/dashboard/onboarding");

    const userData = await db.query.users.findFirst({
    where: eq(users.id, user.id),
  });

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#1A1A2E]">Edit Profile</h1>
          <p className="text-gray-500 mt-1">Update your public business details.</p>
        </div>
        <Link 
          href={`/providers/${profile.slug}`}
          className="text-sm font-medium text-[#8600B3] hover:underline"
        >
          View Public Profile &rarr;
        </Link>
      </div>

      {isSuccess && (
        <div className="bg-green-50 text-green-700 p-4 rounded-xl mb-6 border border-green-200">
          Profile updated successfully!
        </div>
      )}

      <form action={async (formData) => {
        "use server";
        await updateProviderProfile(formData); // Updates public info
        await updateDateOfBirth(formData);     // Updates private DOB
        redirect("/dashboard/profile?success=true");
      }} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">

         {/* ADD THIS BLOCK */}
        <AvatarUpload 
          currentImageKey={profile.profileImageKey} 
          slug={profile.slug} 
          displayName={profile.displayName} 
        />
        
  {/* Core Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business / Display Name</label>
            <input
              type="text"
              name="displayName"
              defaultValue={profile.displayName}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              name="category"
              defaultValue={profile.category}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3] bg-white"
            >
              <option value="hairdresser">Hairdresser</option>
              <option value="makeup_artist">Makeup Artist</option>
              <option value="nail_technician">Nail Technician</option>
              <option value="massage_therapist">Massage Therapist</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Owner Name (With Visibility Toggle) */}
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">Owner Name (Optional)</label>
            <label className="flex items-center gap-2 text-xs font-medium text-[#8600B3] cursor-pointer">
              <input 
                type="checkbox" 
                name="showOwnerName" 
                defaultChecked={profile.showOwnerName} 
                className="accent-[#8600B3] w-4 h-4" 
              />
              Show Publicly
            </label>
          </div>
          <input
            type="text"
            name="ownerName"
            defaultValue={profile.ownerName || ""}
            placeholder="e.g., Thandi Mokoena"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]"
          />
          <p className="text-xs text-gray-500 mt-1">Your personal name (shown below your business name).</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Where are you based?</label>
          <input
            type="text"
            name="city"
            defaultValue={profile.city}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
          <textarea
            name="bio"
            defaultValue={profile.bio || ""}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3] resize-none"
          />
        </div>

                <hr className="border-gray-100 my-2" />
        <h2 className="text-lg font-bold text-[#1A1A2E]">Contact Information</h2>
        <p className="text-sm text-gray-500 -mt-4 mb-2">
          Fill in at least two contact methods and check the boxes next to the ones you want to display publicly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Phone */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <label className="flex items-center gap-2 text-xs font-medium text-[#8600B3] cursor-pointer">
                <input type="checkbox" name="showPhone" defaultChecked={profile.showPhone} className="accent-[#8600B3] w-4 h-4" />
                Show Publicly
              </label>
            </div>
            <input type="tel" name="phone" defaultValue={profile.phone || ""} placeholder="+27 12 345 6789" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]" />
          </div>

          {/* Email */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">Public Email</label>
              <label className="flex items-center gap-2 text-xs font-medium text-[#8600B3] cursor-pointer">
                <input type="checkbox" name="showEmail" defaultChecked={profile.showEmail} className="accent-[#8600B3] w-4 h-4" />
                Show Publicly
              </label>
            </div>
            <input type="email" name="emailPublic" defaultValue={profile.emailPublic || ""} placeholder="hello@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]" />
          </div>

          {/* Instagram */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">Instagram URL</label>
              <label className="flex items-center gap-2 text-xs font-medium text-[#8600B3] cursor-pointer">
                <input type="checkbox" name="showInstagram" defaultChecked={profile.showInstagram} className="accent-[#8600B3] w-4 h-4" />
                Show Publicly
              </label>
            </div>
            <input type="url" name="instagramUrl" defaultValue={profile.instagramUrl || ""} placeholder="https://instagram.com/yourhandle" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]" />
          </div>

          {/* Website */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">Website URL</label>
              <label className="flex items-center gap-2 text-xs font-medium text-[#8600B3] cursor-pointer">
                <input type="checkbox" name="showWebsite" defaultChecked={profile.showWebsite} className="accent-[#8600B3] w-4 h-4" />
                Show Publicly
              </label>
            </div>
            <input type="url" name="websiteUrl" defaultValue={profile.websiteUrl || ""} placeholder="https://yourwebsite.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]" />
          </div>

        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-[#8600B3] hover:bg-[#6e0093] text-white py-3 rounded-lg font-medium transition-colors"
        >
          Save Changes
        </button>

        <hr className="border-gray-100 my-2" />
        <h2 className="text-lg font-bold text-[#1A1A2E]">Private Details</h2>
        <p className="text-sm text-gray-500 -mt-4 mb-2">This information is never shown on your public profile.</p>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            defaultValue={userData?.dateOfBirth || ""}
            required
            max={new Date().toISOString().split("T")[0]}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]"
          />
          <p className="text-xs text-gray-500 mt-1">You must be 18 or older to use BeautyMe.</p>
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-[#8600B3] hover:bg-[#6e0093] text-white py-3 rounded-lg font-medium transition-colors"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}