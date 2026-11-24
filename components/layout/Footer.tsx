import { Logo } from "@/public/brand/Logo";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { connection } from "next/server";

export async function Footer() {

  await connection();

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 mt-auto">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Logo className="h-24 mb-4" />
            <p className="text-gray-500 mt-4 max-w-sm text-sm leading-relaxed">
              The visual directory connecting independent beauty professionals and creatives with the clients who love their work. No commissions, no booking fees.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-bold text-[#1A1A2E] mb-4">Discover</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              <li><Link href="/search" className="hover:text-[#8600B3]">Find Talent</Link></li>
              <li><Link href="/search?category=hairdresser" className="hover:text-[#8600B3]">Hairdressers</Link></li>
              <li><Link href="/search?category=makeup_artist" className="hover:text-[#8600B3]">Makeup Artists</Link></li>
              <li><Link href="/search?category=nail_technician" className="hover:text-[#8600B3]">Nail Technicians</Link></li>
              <li><Link href="/search?category=massage_therapist" className="hover:text-[#8600B3]">Massage Therapists</Link></li>
            </ul>
          </div>

          {/* For Providers Column */}
          <div>
            <h4 className="font-bold text-[#1A1A2E] mb-4">For Providers</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              <li><Link href="/for-providers" className="hover:text-[#8600B3]">Why BeautyMe?</Link></li>
              
              {/* Show Dashboard if logged in, otherwise show Create/Login links */}
              {user ? (
                <li>
                  <Link href="/dashboard" className="hover:text-[#8600B3] font-semibold text-[#8600B3]">
                    Go to Dashboard
                  </Link>
                </li>
              ) : (
                <>
                  <li><Link href="/signup" className="hover:text-[#8600B3]">Create a Profile</Link></li>
                  <li><Link href="/login" className="hover:text-[#8600B3]">Provider Login</Link></li>
                </>
              )}
              
              <li><Link href="/rules" className="hover:text-[#8600B3]">Community Rules</Link></li>
              <li><Link href="/about" className="hover:text-[#8600B3]">About Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2026 BeautyMe. 
            A product of HKS IT SUPPORT (Pty) Ltd.
            All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/rules" className="hover:text-[#1A1A2E]">Community Rules</Link>
            <Link href="/privacy" className="hover:text-[#1A1A2E]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#1A1A2E]">Terms of Service</Link>
            <Link href="/paia" className="hover:text-[#1A1A2E]">PAIA Manual</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
