import { createClient } from "@/lib/supabase/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import Link from "next/link";
import { connection } from "next/server";

export const instant = false;

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await connection();
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const dbUser = await db.query.users.findFirst({
    where: eq(users.id, user.id),
  });

  if (dbUser?.role !== "admin") {
    redirect("/"); // Kick non-admins out to the homepage
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
        <div className="p-6">
          <Link href="/" className="text-2xl font-bold text-[#8600B3]">BeautyMe.</Link>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">Admin Panel</p>
        </div>
        <nav className="px-4 flex flex-col gap-2">
          <Link href="/admin" className="px-4 py-2 bg-[#8600B3]/10 text-[#8600B3] rounded-lg font-medium">
            Moderation Queue
          </Link>
          <Link href="/admin/reviews" className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
            Review Queue
          </Link>
          <Link href="/" className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
            View Site
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}