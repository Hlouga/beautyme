import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/actions/auth";
import { db } from "@/db";
import { providerProfiles } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Logo } from "@/public/brand/Logo";
import { connection } from "next/server";


export async function Navbar() {
  await connection();
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

    let isProvider = false;
  if (user) {
    const profile = await db.query.providerProfiles.findFirst({
      where: eq(providerProfiles.userId, user.id),
    });
    if (profile) isProvider = true;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="w-full max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex gap-6 items-center">
          {/* Update the Discover link to go to the Search page */}
          <Link href="/search" className="text-sm font-medium hover:text-[#8600B3]">Find Talent</Link>
          {/* Ensure this link goes to the marketing page */}
          <Link href="/for-providers" className="text-sm font-medium hover:text-[#8600B3]">For Providers</Link>
          <Link href="/about" className="text-sm font-medium hover:text-[#8600B3]">About</Link>
        </nav>



        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link href={isProvider ? "/dashboard" : "/client-dashboard"} className="text-sm font-medium text-[#1A1A2E] hover:text-[#8600B3]">
                Dashboard
              </Link>
              <form action={logout}>
                <button type="submit" className="text-sm font-medium text-red-500 hover:text-red-700">Log out</button>
              </form>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium hover:text-[#8600B3]">Log in</Link>
              <Link href="/signup" className="bg-[#8600B3] hover:bg-[#6e0093] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                Join as Provider
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}