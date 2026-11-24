"use client";

import { useState } from "react";
import { savePortfolioItem } from "@/actions/portfolio"; // <-- Missing import
import { useRouter } from "next/navigation"; // <-- Missing import

export function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setIsUploading(true);

    try {
      const res = await fetch("/api/uploads/presign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentType: file.type }),
      });
      
      const { signedUrl, key } = await res.json();

      await fetch(signedUrl, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });

      await savePortfolioItem(key, "");
      router.refresh();
      setFile(null);
    } catch (err) {
      alert("Upload failed.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleUpload} className="flex flex-col gap-4">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#8600B3]/10 file:text-[#8600B3] hover:file:bg-[#8600B3]/20"
        required
      />
      <button
        type="submit"
        disabled={!file || isUploading}
        className="w-full bg-[#8600B3] hover:bg-[#6e0093] text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
      >
        {isUploading ? "Uploading..." : "Upload Image"}
      </button>
    </form>
  );
}