import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { connection } from "next/server";

export const instant = false;

export default async function ForProvidersPage() {
  await connection();
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();


  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="relative w-full py-24 flex flex-col items-center justify-center text-center px-4 bg-[#8600B3]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl text-white leading-tight mb-6 relative z-10">
          Showcase your craft to the world.
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 relative z-10">
          BeautyMe is the visual directory for independent hairdressers, nail techs, massage therapists, and crafters. No commissions, no booking fees. Just your work.
        </p>
        <Link 
          href={user ? "/dashboard" : "/signup"} 
          className="relative z-10 bg-white text-[#8600B3] hover:bg-gray-50 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl"
        >
          {user ? "Go to Provider Dashboard" : "Create Your Free Profile"}
        </Link>
      </section>

      <section className="py-24 px-4 max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="w-16 h-16 bg-[#8600B3]/10 text-[#8600B3] rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
            <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">Build a Visual Portfolio</h3>
            <p className="text-gray-600">Upload high-quality images of your best work. Let your craft speak for itself.</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-[#8600B3]/10 text-[#8600B3] rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
            <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">List Your Services</h3>
            <p className="text-gray-600">Showcase what you offer and your price ranges, so clients know exactly what to expect.</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-[#8600B3]/10 text-[#8600B3] rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
            <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">Get Discovered</h3>
            <p className="text-gray-600">Appear in local searches and connect directly with clients who are looking for your skills.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-16 px-4 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">Our Commitment to Quality</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            BeautyMe is built on trust, authenticity, and inclusivity. Before you create an account, we encourage you to read our community rules to understand what we expect from our providers and what you can expect from us.
          </p>
          <Link 
            href="/rules" 
            className="inline-block bg-white text-[#8600B3] border-2 border-[#8600B3] hover:bg-[#8600B3] hover:text-white px-8 py-3 rounded-full font-bold text-lg transition-colors"
          >
            Read Provider Rules
          </Link>
        </div>
      </section>
    </div>
  );
}
