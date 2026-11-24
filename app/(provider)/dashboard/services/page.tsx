import { db } from "@/db";
import { services, providerProfiles } from "@/db/schema";
import { createClient } from "@/lib/supabase/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { addService } from "@/actions/services";
import { connection } from 'next/server';
import { ServiceItem } from "@/components/dashboard/ServiceItem";
import { AddServiceForm } from "@/components/dashboard/AddServiceForm";


export default async function ServicesPage() {
    await connection();
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const profile = await db.query.providerProfiles.findFirst({
    where: eq(providerProfiles.userId, user.id),
  });

  if (!profile) redirect("/dashboard/onboarding");

  const myServices = await db.query.services.findMany({
    where: eq(services.providerProfileId, profile.id),
    orderBy: (services, { asc }) => [asc(services.displayOrder)],
  });

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-[#1A1A2E] mb-8">Manage Services</h1>

      {/* Add Service Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-[#1A1A2E]">Add a New Service</h2>
        <AddServiceForm />
      </div>

      

      {/* List of Services */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#1A1A2E]">Your Services</h2>
        {myServices.length === 0 ? (
          <p className="text-gray-500 italic">You haven't added any services yet.</p>
        ) : (
                    <div className="grid gap-4">
            {myServices.map((service) => (
              <ServiceItem key={service.id} service={service} slug={profile.slug} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}