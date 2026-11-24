import Link from "next/link";

export default function ProviderRulesPage() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4">Provider Rules and Declaration</h1>
      <p className="text-gray-500 mb-12">Last updated: 23 November 2026</p>

      <section className="text-gray-500 mb-8">
       <ul className="pl-0 space-y-2">
            <li>BeautyMe gives independent service providers, small businesses and creative individuals an opportunity to showcase their skills, services and work to people who may be interested in what they offer.</li>
            <li>To maintain a trustworthy, respectful and welcoming environment, all providers must agree to the following rules before their profiles can be approved and published.</li>
        </ul>
        </section>
    <div className="prose prose-gray max-w-none text-gray-600 flex flex-col gap-8">
        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">1. Honest and Accurate Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Providers must ensure that all information submitted to BeautyMe is truthful, accurate and up to date.</li>
            <li>This includes business names, service descriptions, contact details, operating hours, location, qualifications and any other information included in their profiles.</li>
            <li>Providers must not impersonate another individual or business, misrepresent their experience, or make misleading claims about their services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">2. Business and Provider Identity</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>BeautyMe welcomes independent individuals, informal businesses, sole proprietors and registered businesses.</li>
            <li>You do not need to have a CIPC-registered business to create a provider profile.
                However, you must use a business or trading name that you are entitled to use and must not falsely present yourself as a registered company, accredited professional or certified business.</li>
            <li>You remain responsible for ensuring that you comply with any laws, permits, professional requirements or qualifications applicable to the services you offer.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">3. Contact Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Providers must supply the contact information required during profile creation.
                This may include an email address, cellphone number and Instagram handle.</li>
            <li>Providers may choose which of their available contact details they wish to display on their profiles.</li>
            <li>Only the contact details selected for display will be visible to registered and logged-in BeautyMe users.</li>
            <li>Providers are responsible for ensuring that the contact information they submit is accurate, current and belongs to them or that they have permission to use it.</li>
            <li>BeautyMe does not independently verify the ownership, identity or accessibility of the contact details submitted by providers.</li>
            <li>Providers must update their contact information whenever changes occur.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">4. Portfolio Images and Uploaded Content</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>All photographs, artwork and other material uploaded to BeautyMe must relate to the services or work being showcased.</li>
            <li>Providers must only upload content that they own or have the necessary rights and permission to use.
                Where photographs include clients or other identifiable individuals, providers must obtain their permission before uploading and displaying those photographs on BeautyMe.</li>
            <li>Photographs must not expose clients to unnecessary privacy risks. Facial features and other identifying details should not be visible where they could reasonably identify the person.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl pl-2 font-bold text-[#1A1A2E] mb-3">Photographs of children</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Providers must obtain prior permission from the child's parent or legal guardian before uploading photographs featuring children under the age of 18.
                Such photographs must focus on the work being showcased and must not reveal the child's face or other identifying information.</li>
            <li>Providers must retain evidence of the parent or guardian's permission and must provide it to BeautyMe if reasonably requested.</li>
            <li>BeautyMe may reject or remove any photograph that it considers inappropriate or that may compromise an individual's privacy or safety.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">5. Respect for Clients and Other Users</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Providers must treat clients, other providers and members of the BeautyMe community with respect.</li>
            <li>Harassment, intimidation, threats, discrimination, abusive behaviour and inappropriate conduct are not permitted.</li>
            <li>Providers must not use BeautyMe to engage in fraudulent activities, mislead potential clients, impersonate others or promote unlawful services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">6. Professional Conduct and Responsibility</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Providers are independent individuals or businesses and are responsible for the services they offer.</li>
            <li>BeautyMe does not employ, manage, supervise or represent providers.</li>
            <li>Providers are responsible for:</li>
            <ul className="pl-5 space-y-2">
                <li>The quality and standard of their services.</li>
                <li>Their own professional conduct.</li>
                <li>Any applicable qualifications, permits or legal requirements.</li>
                <li>Communicating honestly with potential clients.</li>
                <li>Any agreements, bookings, payments or arrangements made directly with clients.</li>
                <li>Resolving disputes arising from services they provide.</li>
            </ul>
            <li>BeautyMe does not process bookings, payments or transactions between providers and clients.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">7. Keeping Profiles Updated</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Providers must maintain accurate and current profiles.</li>
            <li>Changes to contact details, services, location, business information or operating hours should be updated as soon as reasonably possible.</li>
            <li>BeautyMe reserves the right to request corrections or additional information where a profile is incomplete, inaccurate or potentially misleading.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">8. Profile Review and Approval</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>All provider profiles are subject to administrative review before becoming visible on BeautyMe.</li>
            <li>Approval confirms that the profile has met BeautyMe's submission and platform requirements, including the completion of required information and applicable contact verification.</li>
            <li>BeautyMe does not independently verify the identity of providers, ownership or accessibility of their contact details, qualifications, professional competence, business registration or service quality.</li>
            <li>Profile approval must not be interpreted as a certification, endorsement or guarantee of a provider or their services.</li>
          </ul>
        </section>

       <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">9. Account Suspension and Removal</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>BeautyMe may reject, suspend or permanently remove a provider profile or account where there are reasonable grounds to believe that a provider:</li>
            <ul className="pl-5 space-y-2">
                <li>Has supplied false, misleading or fraudulent information.</li>
                <li>Has uploaded content without the necessary rights or permissions.</li>
                <li>Has violated another person's privacy or intellectual property rights.</li>
                <li>Has engaged in abusive, threatening or inappropriate behaviour.</li>
                <li>Has impersonated another person or business.</li>
                <li>Has repeatedly failed to comply with these rules.</li>
                <li>Has engaged in conduct that may compromise the safety, integrity or reputation of BeautyMe or its users.</li>
            </ul>
            <li>BeautyMe may temporarily suspend an account while investigating a complaint or suspected violation.</li>
            <li>Where reasonably possible, the affected provider will be informed of the action taken and the reasons for it.</li>
          </ul>
        </section>

                <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">10. Independent Use of BeautyMe</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Providers understand that BeautyMe is a discovery and showcase platform.
                Its purpose is to help potential clients discover service providers and view their work.</li>
            <li>BeautyMe does not guarantee that a provider will receive enquiries, customers or business opportunities.</li>
            <li>Providers also understand that BeautyMe is not responsible for agreements or transactions made independently between providers and clients.</li>
          </ul>
        </section>

       <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">11. Acceptance of These Rules</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>By accepting these rules, you confirm that:</li>
            <ul className="pl-5 space-y-2">
                <li>You are at least 18 years old.</li>
                <li>The information you have submitted is truthful and accurate.</li>
                <li>You have the necessary rights and permissions for the content you upload.</li>
                <li>You understand your responsibilities when displaying photographs of clients or children.</li>
                <li>You understand that BeautyMe may review, reject, suspend or remove profiles that do not comply with its requirements.</li>
                <li>You understand that profile approval does not constitute professional or identity certification.</li>
                <li>You agree to comply with these Provider Rules, together with BeautyMe's Terms and Conditions and Privacy Policy.</li>
            </ul>
            <li>BeautyMe reserves the right to update these rules where reasonably necessary. Providers will be notified of material changes where appropriate.</li>
            <li>By submitting your profile for approval, you acknowledge that you have read, understood and agreed to these rules.</li>
          </ul>
        </section>

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mt-8">
          <p className="text-sm text-gray-700">
            By creating an account, you agree to these rules, as well as our{" "}
            <Link href="/terms" className="text-[#8600B3] font-medium hover:underline">Terms of Service</Link> and{" "}
            <Link href="/privacy" className="text-[#8600B3] font-medium hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}