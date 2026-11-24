"use client";

import { useState } from "react";
import { deleteService, updateService } from "@/actions/services";

type Service = {
  id: string;
  name: string;
  description: string | null;
  priceRange: string | null;
};

export function ServiceItem({ service, slug }: { service: Service; slug: string }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this service?")) return;
    setIsDeleting(true);
    try {
      await deleteService(service.id, slug);
    } catch (error) {
      alert("Failed to delete service.");
      setIsDeleting(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      await updateService(service.id, slug, formData);
      setIsEditing(false);
    } catch (error) {
      alert("Failed to update service.");
    }
  };

  if (isEditing) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-sm border border-[#8600B3]">
        <form onSubmit={handleUpdate} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            defaultValue={service.name}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3] text-sm font-semibold"
          />
          <input
            type="text"
            name="description"
            defaultValue={service.description || ""}
            placeholder="Description"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3] text-sm"
          />
          <input
            type="text"
            name="priceRange"
            defaultValue={service.priceRange || ""}
            placeholder="Price Range"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3] text-sm"
          />
          <div className="flex justify-end gap-2 mt-2">
            <button 
              type="button" 
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="bg-[#8600B3] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#6e0093]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center group">
      <div>
        <h3 className="font-semibold text-[#1A1A2E]">{service.name}</h3>
        {service.description && <p className="text-sm text-gray-500">{service.description}</p>}
      </div>
      <div className="flex items-center gap-4">
        {service.priceRange && (
          <span className="text-[#8600B3] font-medium bg-[#8600B3]/10 px-3 py-1 rounded-full text-sm hidden sm:block">
            {service.priceRange}
          </span>
        )}
        <div className="flex gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => setIsEditing(true)}
            className="text-gray-400 hover:text-[#8600B3] p-1"
            title="Edit"
          >
            ✏️
          </button>
          <button 
            onClick={handleDelete}
            disabled={isDeleting}
            className="text-gray-400 hover:text-red-500 p-1 disabled:opacity-50"
            title="Delete"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}