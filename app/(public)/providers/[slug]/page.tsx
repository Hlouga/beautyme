import { getProviderBySlug } from "@/db/queries/providers";
import { notFound } from "next/navigation";
import { ReviewForm } from "@/components/profile/ReviewForm";
import { createClient } from "@/lib/supabase/server";
import { ContactButton } from "@/components/profile/ContactButton";
import { PortfolioLightbox } from "@/components/profile/PortfolioLightbox";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";



export default async function ProviderProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profile = await getProviderBySlug(slug);

  if (!profile) {
    notFound(); 
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // --- SECURITY CHECK ---
  let isAdmin = false;
  if (user) {
    const dbUser = await db.query.users.findFirst({
      where: eq(users.id, user.id),
    });
    isAdmin = dbUser?.role === 'admin';
  }

  const isOwner = user?.id === profile.userId;
  const isApproved = profile.moderationStatus === 'approved' && profile.isPublished;

  // If it's not approved, and the viewer is neither the owner nor an admin, block it.
  if (!isApproved && !isOwner && !isAdmin) {
    notFound(); // Shows the 404 page we built
  }

  return (
    <div className="flex flex-col w-full bg-[#FAF8FC] min-h-screen">
            {/* Cover / Hero Section */}
      <div className="w-full h-64 md:h-80 relative overflow-hidden bg-[#8600B3]">

            {/* Pending Banner */}
      {!isApproved && (isOwner || isAdmin) && (
        <div className="bg-yellow-50 border-b border-yellow-200 text-yellow-800 px-4 py-3 text-center text-sm font-medium relative z-20">
          ⚠️ This profile is currently <strong className="uppercase">{profile.moderationStatus}</strong> and is hidden from the public. 
          {isOwner && " An admin must approve it before you can be discovered."}
        </div>
      )}
      
        {(() => {
          // Find the featured image
          const coverImage = profile.portfolioItems?.find(img => img.isFeatured);
          
          if (coverImage) {
            return (
              <>
                <img
                  src={`${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${coverImage.imageKey}`}
                  alt="Cover"
                  className="object-cover w-full h-full"
                />
                {/* Add a dark overlay so the white text pops */}
                <div className="absolute inset-0 bg-black/40"></div>
              </>
            );
          }

          // Fallback to the purple gradient if no cover is set
          return (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
          );
        })()}
      </div>

      {/* Main Content Wrapper */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-20">
        
        {/* Profile Header Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 flex flex-col items-center text-center">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-full border-4 border-white shadow-sm overflow-hidden flex items-center justify-center text-3xl md:text-4xl font-bold text-[#8600B3] mb-4">
            {profile.profileImageKey ? (
              <img
                src={`${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${profile.profileImageKey}`}
                alt={profile.displayName}
                className="object-cover w-full h-full"
              />
            ) : (
              profile.displayName.charAt(0).toUpperCase()
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-1">
            {profile.displayName}
          </h1>
          
          {profile.showOwnerName && profile.ownerName && (
            <p className="text-lg text-gray-500 font-medium mb-3">
              by {profile.ownerName}
            </p>
          )}
          
          <div className="flex flex-wrap justify-center items-center gap-2 text-sm text-gray-500 mb-6">

            <span className="bg-[#8600B3]/10 text-[#8600B3] px-3 py-1 rounded-full font-medium capitalize">
              {profile.category.replace("_", " ")}
            </span>
            <span>•</span>
            <span>{profile.city}</span>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            {profile.bio || "No bio provided yet."}
          </p>
          
          <ContactButton 
            phone={profile.showPhone ? profile.phone : null}
            email={profile.showEmail ? profile.emailPublic : null}
            website={profile.showWebsite ? profile.websiteUrl : null}
            instagram={profile.showInstagram ? profile.instagramUrl : null}
            displayName={profile.displayName}
          />

          {/* Opening Hours */}
          {profile.hours && Object.keys(profile.hours as Record<string, any>).length > 0 && (
            <div className="mt-8 w-full max-w-sm mx-auto bg-gray-50 rounded-2xl p-6 border border-gray-100 text-left">
              <h3 className="font-bold text-[#1A1A2E] flex items-center gap-2 mb-4">
                <span>🕒</span> Opening Hours
              </h3>
              <div className="flex flex-col gap-2 text-sm">
                {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day) => {
                  const hours = (profile.hours as Record<string, any>)[day];
                  const dayNames: Record<string, string> = { 
                    mon: "Monday", tue: "Tuesday", wed: "Wednesday", 
                    thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday" 
                  };
                  
                  if (!hours) return null;

                  return (
                    <div key={day} className="flex justify-between items-center">
                      <span className="text-gray-500">{dayNames[day]}</span>
                      {hours.isOpen ? (
                        <span className="font-medium text-[#1A1A2E]">
                          {hours.open} - {hours.close}
                        </span>
                      ) : (
                        <span className="text-gray-400 italic">Closed</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Services Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-6">Services & Pricing</h2>
          
          {profile.services && profile.services.length > 0 ? (
            <div className="flex flex-col gap-10">
              {/* 1. Group the services by category */}
              {Object.entries(
                profile.services.reduce((acc, service) => {
                  const cat = service.category || "other";
                  if (!acc[cat]) acc[cat] = [];
                  acc[cat].push(service);
                  return acc;
                }, {} as Record<string, typeof profile.services>)
              ).map(([category, servicesInCategory]) => (
                
                // 2. Render a section for each category
                <div key={category} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="bg-[#8600B3]/5 px-6 py-4 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-[#8600B3] capitalize">
                      {category.replace(/_/g, ' ')}
                    </h3>
                  </div>
                  
                  {/* Changed to Grid View */}
                  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesInCategory.map((service) => (
                      <div key={service.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group transition-shadow hover:shadow-md">
                        
                        {/* Optional Service Image - Made bigger */}
                        {service.imageKey ? (
                          <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
                            <img
                              src={`${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${service.imageKey}`}
                              alt={service.name}
                              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ) : (
                          // Fallback if no image is uploaded
                          <div className="w-full aspect-[4/3] bg-[#8600B3]/5 flex items-center justify-center">
                             <span className="text-4xl opacity-20">✨</span>
                          </div>
                        )}
                        
                        {/* Text Content */}
                        <div className="p-5 flex flex-col justify-between flex-1">
                          <div>
                            <h4 className="text-lg font-bold text-[#1A1A2E] leading-tight mb-2">
                              {service.name}
                            </h4>
                            {service.description && (
                              <p className="text-gray-500 text-sm mt-1 line-clamp-2">{service.description}</p>
                            )}
                          </div>
                          
                          {/* Price Tag */}
                          {service.priceRange && (
                            <div className="mt-4 pt-4 border-t border-gray-50">
                              <span className="inline-block bg-[#8600B3]/10 text-[#8600B3] px-3 py-1 rounded-full text-sm font-bold">
                                {service.priceRange}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
              <p className="text-gray-500">No services listed yet.</p>
            </div>
          )}
        </div>

                {/* Portfolio Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-6">Portfolio</h2>
          
          <PortfolioLightbox items={profile.portfolioItems || []} />
          
        </div>

        {/* Reviews Section */}
        <div className="mt-16 mb-20">
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-6">Client Reviews</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: List of Reviews */}
            <div className="flex flex-col gap-4">
              {profile.reviews && profile.reviews.length > 0 ? (
                profile.reviews.map((review) => (
                  <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-[#1A1A2E]">
                        {review.reviewer?.fullName || review.reviewer?.email?.split('@')[0] || "BeautyMe Client"}
                      </span>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{review.body}</p>
                    
                    {/* Display Provider Reply if it exists */}
                    {review.providerReply && (
                      <div className="mt-4 bg-[#8600B3]/5 border border-[#8600B3]/20 p-3 rounded-lg">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#8600B3] block mb-1">Provider Reply</span>
                        <p className="text-sm text-gray-700">{review.providerReply}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
                  <p className="text-gray-500">No reviews yet. Be the first to leave one!</p>
                </div>
              )}
            </div>

            {/* Right Column: Review Form */}
            <div>
              {user ? (
                <ReviewForm providerProfileId={profile.id} slug={profile.slug} />
              ) : (
                <div className="bg-[#8600B3]/5 p-8 rounded-2xl border border-[#8600B3]/20 text-center shadow-sm">
                  <p className="text-[#8600B3] font-medium mb-2">Want to leave a review?</p>
                  <a href="/login" className="text-sm text-gray-600 hover:text-[#8600B3] underline">
                    Log in to share your experience.
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}