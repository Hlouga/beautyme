"use client";

import { useState } from "react";
import { addService } from "@/actions/services";

export function AddServiceForm() {
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);

    const formData = new FormData(e.currentTarget);
    let imageKey = "";

    try {
      // 1. If they attached an image, upload it to R2 first
      if (file) {
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
        
        imageKey = key;
      }

      // 2. Add the imageKey to the form data and submit to Server Action
      if (imageKey) formData.append("imageKey", imageKey);
      await addService(formData);
      
      // Reset form
      (e.target as HTMLFormElement).reset();
      setFile(null);
    } catch (err) {
      alert("Failed to add service.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Service Category</label>
          <select name="category" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3] bg-white">
            <option value="hairdresser">Hairdresser</option>
            <option value="makeup_artist">Makeup Artist</option>
            <option value="nail_technician">Nail Technician</option>
            <option value="massage_therapist">Massage Therapist</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Service Name</label>
          <input type="text" name="name" required placeholder="e.g., Bridal Hair Styling" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]" />
        </div>
      
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Service Name</label>
          <input type="text" name="name" required placeholder="e.g., Bridal Hair Styling" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range (Optional)</label>
          <input type="text" name="priceRange" placeholder="e.g., R500 - R1200" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description (Optional)</label>
        <input type="text" name="description" placeholder="Brief details about this service..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Service Image (Optional)</label>
        <input 
          type="file" 
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#8600B3]/10 file:text-[#8600B3] hover:file:bg-[#8600B3]/20"
        />
      </div>

      <button type="submit" disabled={isUploading} className="mt-2 w-full bg-[#8600B3] hover:bg-[#6e0093] text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50">
        {isUploading ? "Adding Service..." : "Add Service"}
      </button>
    </form>
  );
}