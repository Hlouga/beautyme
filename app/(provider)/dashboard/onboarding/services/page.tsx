import Link from "next/link";

export default function ServicesOnboardingPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-12">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium text-[#8600B3]">Provider onboarding</p>
        <h1 className="mt-2 text-2xl font-bold text-[#1A1A2E]">Add your services</h1>
        <p className="mt-3 text-sm leading-6 text-gray-600">Services setup is not available yet. You can return to your provider profile setup and continue with the options currently available.</p>
        <Link
          href="/dashboard/onboarding"
          className="mt-6 inline-flex rounded-lg bg-[#8600B3] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6e0093]"
        >
          Return to profile setup
        </Link>
      </div>
    </main>
  );
}
