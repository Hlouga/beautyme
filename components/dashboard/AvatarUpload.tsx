"use client";

import { useState } from "react";
import { updateProfileImage } from "@/actions/provider";
import { useRouter } from "next/navigation";

export function AvatarUpload({ 
  currentImageKey, 
  slug, 
  displayName 
}: { 
  currentImageKey: string | null; 
  slug: string;
  displayName: string;
}) {
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);

    try {
      // 1. Get presigned URL
      const res = await fetch("/api/uploads/presign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentType: file.type }),
      });
      const { signedUrl, key } = await res.json();

      // 2. Upload to R2
      await fetch(signedUrl, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });

      // 3. Save to database
      await updateProfileImage(key, slug);
      router.refresh();
    } catch (err) {
      alert("Failed to upload profile picture.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-100 flex items-center justify-center">
        {currentImageKey ? (
          <img
            src={`${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${currentImageKey}`}
            alt={displayName}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-4xl font-bold text-[#8600B3]">
            {displayName.charAt(0).toUpperCase()}
          </span>
        )}
        
        {/* Loading Overlay */}
        {isUploading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      <label className="cursor-pointer bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
        {isUploading ? "Uploading..." : "Change Photo"}
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          disabled={isUploading}
          className="hidden"
        />
      </label>
    </div>
  );
}