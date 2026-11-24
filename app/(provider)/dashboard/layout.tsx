import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { connection } from "next/server";

export const instant = false;

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await connection();
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // Check if the user is an admin so we can show the Admin link
  const dbUser = await db.query.users.findFirst({
    where: eq(users.id, user.id),
  });
  const isAdmin = dbUser?.role === "admin";

  return (
    <div className="flex-1 flex flex-col md:flex-row w-full max-w-7xl mx-auto">
      
      {/* Dashboard Sidebar */}
      <aside className="w-full md:w-64 bg-white md:border-r border-gray-200 md:min-h-[calc(100vh-4rem)] p-4">
        <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
          <Link href="/dashboard" className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-700 hover:bg-[#8600B3]/10 hover:text-[#8600B3] rounded-lg transition-colors">
            Overview
          </Link>
           <Link href="/dashboard/profile" className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-700 hover:bg-[#8600B3]/10 hover:text-[#8600B3] rounded-lg transition-colors">
            Edit Profile
          </Link>
          <Link href="/dashboard/services" className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-700 hover:bg-[#8600B3]/10 hover:text-[#8600B3] rounded-lg transition-colors">
            Services
          </Link>
          <Link href="/dashboard/portfolio" className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-700 hover:bg-[#8600B3]/10 hover:text-[#8600B3] rounded-lg transition-colors">
            Portfolio
          </Link>
          <Link href="/dashboard/reviews" className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-700 hover:bg-[#8600B3]/10 hover:text-[#8600B3] rounded-lg transition-colors">
            Reviews
          </Link>
          <Link href="/dashboard/hours" className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-700 hover:bg-[#8600B3]/10 hover:text-[#8600B3] rounded-lg transition-colors">
            Hours
          </Link>
          
          {/* Only show this if they are an admin */}
          {isAdmin && (
            <Link href="/admin" className="whitespace-nowrap px-4 py-2 text-sm font-bold text-[#8600B3] bg-[#8600B3]/10 rounded-lg mt-0 md:mt-4 border border-[#8600B3]/20">
              Admin Panel
            </Link>
          )}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 bg-[#FAF8FC]">
        {children}
      </main>
      
    </div>
  );
}