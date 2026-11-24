"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const supabase = createClient();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // 1. Basic Validation
    if (!fullName.trim()) {
      setMessage("Please enter your full name.");
      setLoading(false);
      return;
    }

    if (!acceptedTerms) {
      setMessage("You must agree to the Terms of Service and Provider Rules to continue.");
      setLoading(false);
      return;
    }

    // 2. Age Verification Logic
    if (!dateOfBirth) {
      setMessage("Please enter your date of birth.");
      setLoading(false);
      return;
    }

    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      setMessage("You must be at least 18 years old to create an account.");
      setLoading(false);
      return;
    }

    // 3. Proceed with Supabase Signup
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,       // Saved to auth.users metadata
          date_of_birth: dateOfBirth, // Saved to auth.users metadata
        }
      }
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-[#FAF8FC]">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-[#1A1A2E] mb-2">Create an account</h1>
        <p className="text-center text-gray-500 mb-8">Join BeautyMe today</p>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]"
              placeholder="e.g., Sarah Jenkins"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]"
              placeholder="you@example.com"
            />
          </div>
          
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]"
              placeholder="••••••••"
            />
          </div>

          {/* Date of Birth / Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
              max={new Date().toISOString().split("T")[0]} // Prevents selecting future dates
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3]"
            />
            <p className="text-xs text-gray-500 mt-1">You must be 18 or older to join.</p>
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="flex items-start gap-2 mt-2">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-1 w-4 h-4 accent-[#8600B3] cursor-pointer"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer leading-tight">
              I agree to the{" "}
              <Link href="/terms" target="_blank" className="text-[#8600B3] hover:underline font-medium">Terms of Service</Link>,{" "}
              <Link href="/privacy" target="_blank" className="text-[#8600B3] hover:underline font-medium">Privacy Policy</Link>, and{" "}
              <Link href="/rules" target="_blank" className="text-[#8600B3] hover:underline font-medium">Provider Rules</Link>.
            </label>
          </div>

          {message && <p className="text-red-500 text-sm text-center font-medium bg-red-50 p-2 rounded-lg mt-2">{message}</p>}

          <button
            type="submit"
            disabled={loading || !acceptedTerms}
            className="mt-4 w-full bg-[#8600B3] hover:bg-[#6e0093] text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Sign up"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-[#8600B3] font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}