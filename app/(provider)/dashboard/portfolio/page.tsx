import { db } from "@/db";
import { portfolioItems, providerProfiles } from "@/db/schema";
import { createClient } from "@/lib/supabase/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { UploadForm } from "@/components/dashboard/UploadForm";
import { setCoverImage } from "@/actions/portfolio";
import { connection } from "next/server";

export const instant = false;

export default async function PortfolioPage() {
  await connection();
  
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const profile = await db.query.providerProfiles.findFirst({
    where: eq(providerProfiles.userId, user.id),
  });
  if (!profile) redirect("/dashboard/onboarding");

  const images = await db.query.portfolioItems.findMany({
    where: eq(portfolioItems.providerProfileId, profile.id),
    orderBy: (items, { desc }) => [desc(items.createdAt)],
  });

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-[#1A1A2E] mb-2">Your Portfolio</h1>
      <p className="text-gray-500 mb-8">Upload your best work. Select one image to be your profile cover.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Upload Form */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
          <h2 className="text-xl font-semibold mb-4 text-[#1A1A2E]">Add New Image</h2>
          {/* We'll create this client component next */}
          <UploadForm />
        </div>

        {/* Right: Existing Images */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#1A1A2E]">Your Images</h2>
          <div className="grid grid-cols-2 gap-4">
            {images.map((img) => (
              <div key={img.id} className={`relative aspect-square rounded-xl overflow-hidden border-2 ${img.isFeatured ? 'border-[#8600B3] shadow-md' : 'border-transparent'}`}>
                <img
                  src={`${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${img.imageKey}`}
                  alt="Portfolio"
                  className="object-cover w-full h-full"
                />
                
                {/* Cover Button */}
                <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                  <form action={async () => {
                    "use server";
                    await setCoverImage(img.id, profile.id, profile.slug);
                  }}>
                    <button 
                      type="submit" 
                      disabled={img.isFeatured}
                      className={`w-full py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        img.isFeatured 
                          ? "bg-[#8600B3] text-white cursor-default" 
                          : "bg-white/90 text-[#1A1A2E] hover:bg-white"
                      }`}
                    >
                      {img.isFeatured ? "Current Cover" : "Set as Cover"}
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}