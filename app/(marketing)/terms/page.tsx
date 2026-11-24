export default function TermsOfServicePage() {
  const Highlight = ({ children }: { children: React.ReactNode }) => (
    <span className="bg-yellow-200 text-yellow-900 px-1 rounded font-medium">{children}</span>
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4">BeautyMe – Terms and Conditions</h1>
        <p className="text-gray-600 font-medium">
          <strong>Last updated:</strong> 23 November 2026<br />
        </p>
      </div>

      <div className="prose prose-gray max-w-none text-gray-600 flex flex-col gap-8">
        
        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">1. Introduction</h2>
          <p>Welcome to BeautyMe!</p>
          <p className="mt-2">BeautyMe is a discovery and showcase platform created to help independent service providers, small businesses and creative individuals connect with people who are interested in their services.</p>
          <p className="mt-2">Whether you are a hairdresser, massage therapist, nail technician, crochet artist, crafter or another independent service provider, BeautyMe gives you an opportunity to showcase your work, introduce your services and make your business easier to discover.</p>
          <p className="mt-2">These Terms and Conditions explain the rules that apply when using BeautyMe, creating an account or publishing a service provider profile.</p>
          <p className="mt-2">By accessing or using BeautyMe, you agree to follow these Terms and Conditions, together with our Privacy Policy and, where applicable, our Provider Rules and Declaration.</p>
          <p className="mt-2">Please read these terms carefully before creating an account or using the platform.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">2. About BeautyMe and What We Offer</h2>
          <p>BeautyMe provides an online space where independent service providers can showcase their services, skills, experience, business information and portfolio work.</p>
          <p className="mt-2">Our platform is designed to help potential clients discover providers and find their contact information so they can communicate with them directly.</p>
          <p className="mt-2">It is important to understand what BeautyMe does and what it does not do.</p>
          <p className="mt-2 font-bold text-[#1A1A2E]">BeautyMe is:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>A discovery and showcase platform.</li>
            <li>A place where providers can display their services and portfolio.</li>
            <li>A platform where potential clients can discover independent service providers.</li>
            <li>A platform that allows logged-in users to view contact details selected for display by providers.</li>
          </ul>
          <p className="mt-4 font-bold text-[#1A1A2E]">BeautyMe is not:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>An online marketplace where services are bought or sold.</li>
            <li>A booking or appointment management platform.</li>
            <li>A payment processing service.</li>
            <li>An agent, representative or intermediary acting on behalf of providers.</li>
            <li>An employer of the service providers listed on the platform.</li>
          </ul>
          <p className="mt-4">BeautyMe does not arrange, negotiate or conclude service agreements between providers and clients.</p>
          <p className="mt-2">Any discussions, bookings, appointments, payments, deposits or other arrangements between a provider and a client take place independently of BeautyMe.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">3. Eligibility and Age Requirements</h2>
          <p>BeautyMe is intended exclusively for individuals who are at least 18 years old.</p>
          <p className="mt-2">By creating an account or using account-related features, you confirm that:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>You are at least 18 years old.</li>
            <li>You have the legal capacity to agree to these Terms and Conditions.</li>
            <li>The information you provide is truthful and accurate.</li>
          </ul>
          <p className="mt-2">Individuals under the age of 18 are not permitted to register for or maintain an account on BeautyMe.</p>
          <p className="mt-2">BeautyMe reserves the right to suspend or remove an account if it reasonably believes that the account belongs to someone who does not meet this age requirement.</p>
          <p className="mt-2">The appearance of photographs featuring children in provider portfolios is dealt with separately under our content and photograph requirements.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">4. Creating a BeautyMe Account</h2>
          <p>To access account-related features, you must create a BeautyMe account.</p>
          <p className="mt-2">During registration, you will be required to provide: Your full name, Your email address, A password.</p>
          <p className="mt-2">You agree to provide accurate information and to keep your account details up to date.</p>
          <p className="mt-2">Your full name is collected for account identification and administration purposes. It is not automatically displayed on your public provider profile.</p>
          <p className="mt-2">You are responsible for maintaining the confidentiality of your password and for activities carried out through your account.</p>
          <p className="mt-2">You must not knowingly share your login credentials with another person or allow someone else to use your account in a way that violates these terms.</p>
          <p className="mt-2">You should contact BeautyMe as soon as reasonably possible if you suspect that someone has accessed your account without permission.</p>
          <p className="mt-2">BeautyMe may take reasonable steps to secure, restrict or suspend an account where unauthorised access or suspicious activity is suspected.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">5. Becoming a Service Provider</h2>
          <p>Any registered BeautyMe user who wishes to showcase their services may apply to create a provider profile.</p>
          <p className="mt-2">BeautyMe welcomes: Independent service providers, Informal and home-based businesses, Sole proprietors, Freelancers and independent creatives, Small businesses, Registered companies and other established businesses.</p>
          <p className="mt-2">You do not need to have a CIPC-registered company to create a provider profile.</p>
          <p className="mt-2">We recognise that many people provide services independently under their own chosen business or trading names without operating through a formally registered company.</p>
          <p className="mt-2">For example, an individual may register their account using their full legal name but create a public provider profile under a name such as "Jane's Beauty Studio".</p>
          <p className="mt-2">The business or trading name selected for the profile is the name displayed to visitors. The account holder's full legal name is not automatically made public.</p>
          <p className="mt-2">Providers must, however, use names they are legally entitled to use and must not falsely claim to be registered companies, accredited professionals or certified businesses.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">6. Provider Profiles and Administrative Approval</h2>
          <p>All provider profiles must be submitted for administrative review before they become visible on BeautyMe.</p>
          <p className="mt-2">Providers are responsible for completing the required profile information, which may include: Business or trading name, Biography or business description, Services offered, Skills and specialities, Business or service location, Operating hours, Contact information, Profile and portfolio photographs.</p>
          <p className="mt-2">BeautyMe administrators may review submitted profiles to determine whether the required information has been supplied and whether the profile complies with the platform's requirements.</p>
          <p className="mt-2">BeautyMe may approve, reject or request changes to a profile that is incomplete, misleading, inappropriate or otherwise does not meet its requirements.</p>
          <p className="mt-2">A profile that has not been approved may not be displayed publicly.</p>
          
          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">6.1 What profile approval means</h3>
          <p>Administrative approval means that the profile has met BeautyMe's submission and platform requirements at the time of review.</p>
          <p className="mt-2">It does not mean that BeautyMe has independently verified: The provider's legal identity, Ownership or control of the submitted contact details, Business registration, Professional qualifications, Professional competence, Work experience, The quality or safety of services offered, The accuracy of every statement made in the profile.</p>
          <p className="mt-2">BeautyMe does not routinely request identity documents, CIPC registration certificates or professional qualification certificates as part of its standard provider application process.</p>
          <p className="mt-2">Approval must not be interpreted as a professional certification, endorsement or guarantee of the provider.</p>
          <p className="mt-2">BeautyMe also does not guarantee that an approved provider will receive enquiries, customers or business opportunities.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">7. Provider Contact Information</h2>
          <p>Providers may submit their email address, cellphone number and Instagram handle as part of their profiles.</p>
          <p className="mt-2">Providers may choose which of these contact details they wish to display.</p>
          <p className="mt-2">Only the contact details selected by the provider will be visible through their profile to registered and logged-in BeautyMe users.</p>
          <p className="mt-2">Visitors who have not logged into BeautyMe will not be able to access these selected contact details through the provider profile.</p>
          <p className="mt-2">Providers are responsible for ensuring that: Their submitted contact information is accurate and up to date, They own or have permission to use the contact information supplied, They update their contact information when changes occur, They understand that selected contact details will be accessible to all registered and logged-in users.</p>
          <p className="mt-2">BeautyMe does not currently use OTPs or other automated contact verification methods to establish ownership of the contact details supplied by providers.</p>
          <p className="mt-2">Restricting contact information to logged-in users does not guarantee that another user will not copy, save, screenshot or share that information elsewhere.</p>
          <p className="mt-2">Providers should therefore only display contact details they are comfortable sharing with registered BeautyMe users.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">8. Responsibilities of Service Providers</h2>
          <p>Providers are independent individuals or businesses who use BeautyMe to showcase their services.</p>
          <p className="mt-2">By publishing a profile, you agree that you are responsible for the information, services and representations associated with your profile.</p>
          <p className="mt-2">You must: Provide honest, accurate and up-to-date information, Describe your services truthfully, Avoid misleading claims about your experience, qualifications or abilities, Use photographs and other content you own or have permission to use, Comply with laws and regulations applicable to your services, Maintain appropriate professional standards and conduct, Respect the privacy and rights of clients and other individuals, Update your profile when relevant information changes.</p>
          <p className="mt-2">Providers must not falsely claim to hold professional qualifications, licences, certificates, accreditations or registrations that they do not possess.</p>
          <p className="mt-2">Where a particular service requires a professional qualification, licence, permit or other authorisation under South African law, the provider remains responsible for obtaining and maintaining it.</p>
          <p className="mt-2">BeautyMe does not employ, manage, supervise or control the day-to-day activities of providers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">9. Portfolio Photographs and Intellectual Property</h2>
          <p>Providers may upload photographs, artwork and other visual content to showcase their services and completed work.</p>
          <p className="mt-2">You must only upload material that you own or have the necessary legal rights and permissions to use.</p>
          
          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">9.1 Photographs featuring clients</h3>
          <p>Where a photograph includes a client or another identifiable individual, the provider must obtain the necessary permission before uploading and displaying that photograph on BeautyMe.</p>
          <p className="mt-2">Photographs should focus on the service or work being showcased and must not expose individuals to unnecessary privacy risks.</p>
          <p className="mt-2">Facial features and other identifying details should not be visible where they could reasonably identify the person.</p>
          <p className="mt-2">Providers are responsible for ensuring that any agreement with the person appearing in a photograph covers the intended portfolio use and display on BeautyMe.</p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">9.2 Photographs featuring children</h3>
          <p>Photographs featuring children under the age of 18 are subject to additional safeguards.</p>
          <p className="mt-2">Providers must obtain prior permission from the child's parent or legal guardian before photographing, uploading or displaying a photograph of the child for portfolio purposes.</p>
          <p className="mt-2">Such photographs must: Focus on the service or work being showcased, Not show the child's face, Avoid names, school uniforms or other identifying details, Not reveal information that could reasonably compromise the child's privacy or safety.</p>
          <p className="mt-2">Providers must retain evidence of the parent or guardian's permission and make it available to BeautyMe if reasonably requested.</p>
          <p className="mt-2">Hiding a child's face does not automatically mean that the child cannot be identified. Providers must take reasonable care to avoid exposing other identifying information.</p>
          <p className="mt-2">BeautyMe may reject, restrict or remove photographs that may compromise a child's privacy, safety or rights.</p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">9.3 Copyright and ownership</h3>
          <p>Uploading a photograph or other creative work does not automatically transfer ownership of that material to BeautyMe.</p>
          <p className="mt-2">Providers retain ownership of their original content, subject to any existing rights belonging to photographers, clients or other third parties.</p>
          <p className="mt-2">By uploading content, you grant BeautyMe a non-exclusive, royalty-free licence to host, store, reproduce, resize, display and make that content available as reasonably necessary to operate and maintain your profile and the platform.</p>
          <p className="mt-2">This licence also allows BeautyMe to use technical service providers to host and display your content on its behalf.</p>
          <p className="mt-2">BeautyMe will not claim ownership of your work.</p>
          <p className="mt-2">Using portfolio content for separate advertising or promotional campaigns outside the ordinary operation of your profile may require additional permission where appropriate.</p>
          <p className="mt-2">Providers remain responsible for ensuring that their uploaded content does not infringe another person's copyright, privacy or other legal rights.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">10. Relationship Between Providers and Clients</h2>
          <p>BeautyMe helps people discover service providers. It does not manage the relationship that follows between them.</p>
          <p className="mt-2">When a client contacts a provider, any discussions or arrangements take place directly between those individuals.</p>
          <p className="mt-2">Providers and clients are independently responsible for deciding: Whether they wish to work together, What services will be provided, What the price or fee will be, When and where services will be provided, What payment arrangements will apply, Whether deposits, cancellations or refunds will be offered, How any disagreements will be resolved.</p>
          <p className="mt-2">BeautyMe is not a party to any agreement made between a provider and a client.</p>
          <p className="mt-2">BeautyMe does not collect payments, process deposits, charge commissions or facilitate financial transactions between users.</p>
          <p className="mt-2">BeautyMe also does not provide a booking or appointment management service.</p>
          <p className="mt-2">Any payments, bookings or service arrangements made between providers and clients are separate from the operation of the BeautyMe platform.</p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">10.1 Independent dealings</h3>
          <p>Users are encouraged to exercise reasonable care when contacting and engaging with providers.</p>
          <p className="mt-2">Clients should consider asking questions about a provider's experience, qualifications, services and pricing before making arrangements.</p>
          <p className="mt-2">Providers and clients should ensure that they understand and agree on the relevant terms before entering into any arrangement.</p>
          <p className="mt-2">Any concerns about a service supplied by a provider should ordinarily be addressed directly with that provider, subject to any rights or remedies available under applicable law.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">11. Information and Representations on Provider Profiles</h2>
          <p>Provider profiles contain information supplied by independent users.</p>
          <p className="mt-2">Although BeautyMe reviews profiles before approval, it does not independently certify every detail or guarantee that all information will remain accurate after publication.</p>
          <p className="mt-2">Providers remain responsible for the statements, photographs, descriptions and other information they publish.</p>
          <p className="mt-2">BeautyMe does not guarantee: That a provider's qualifications or experience are genuine, That a provider will deliver services as described, That photographs represent the exact standard of future work, That a provider is available at the times displayed, That a provider will respond to enquiries, That a provider is suitable for a particular client's needs.</p>
          <p className="mt-2">The presence of a provider on BeautyMe should not be understood as an endorsement, recommendation or guarantee by BeautyMe.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">12. Acceptable Use of BeautyMe</h2>
          <p>All users must use BeautyMe responsibly and in a lawful manner.</p>
          <p className="mt-2">You must not use the platform to:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Provide false, misleading or fraudulent information.</li>
            <li>Impersonate another individual or business.</li>
            <li>Harass, threaten, intimidate or abuse another person.</li>
            <li>Upload unlawful, offensive or inappropriate content.</li>
            <li>Upload photographs without the necessary rights or permissions.</li>
            <li>Violate another person's privacy or intellectual property rights.</li>
            <li>Promote unlawful services or activities.</li>
            <li>Distribute malicious software or attempt to compromise website security.</li>
            <li>Access accounts or information without authorisation.</li>
            <li>Interfere with the normal operation of BeautyMe.</li>
            <li>Scrape, harvest or systematically collect information from provider profiles without permission.</li>
            <li>Collect or use contact details obtained through BeautyMe for spam, harassment, unsolicited bulk marketing or other abusive purposes.</li>
            <li>Use BeautyMe to engage in scams, impersonation or deceptive practices.</li>
          </ul>
          <p className="mt-2">You must not use the platform in a way that could reasonably damage its security, reputation, functionality or the experience of other users.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">13. Content Moderation and Complaints</h2>
          <p>BeautyMe aims to maintain a respectful and useful environment for service providers and visitors.</p>
          <p className="mt-2">We reserve the right to review content and investigate complaints relating to provider profiles, photographs, contact information or user conduct.</p>
          <p className="mt-2">BeautyMe may, where reasonably necessary: Request that a provider correct or update information, Reject a profile application, Remove or restrict access to specific content, Temporarily hide a provider profile, Suspend an account while investigating a complaint, Permanently remove an account or profile.</p>
          <p className="mt-2">Users may report profiles or content that they believe are misleading, unlawful, abusive or otherwise inconsistent with these terms.</p>
          <p className="mt-2">BeautyMe will consider complaints and take action where appropriate.</p>
          <p className="mt-2">Reporting content does not guarantee that it will be removed. Decisions will be considered based on the information available and the circumstances involved.</p>
          <p className="mt-2">BeautyMe may request additional information from the person submitting a complaint or the individual responsible for the reported content.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">14. Intellectual Property Belonging to BeautyMe</h2>
          <p>The BeautyMe name, branding, logo, website design, original text, graphics, software and other materials created for the platform are owned by or licensed to BeautyMe, unless stated otherwise.</p>
          <p className="mt-2">You may not reproduce, distribute, modify, commercially exploit or use BeautyMe's intellectual property without prior permission, except where permitted by law.</p>
          <p className="mt-2">Nothing in these terms gives users ownership of BeautyMe's branding, website content or other intellectual property.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">15. Third-Party Websites and Services</h2>
          <p>BeautyMe profiles may contain links to external websites and social media platforms, including Instagram.</p>
          <p className="mt-2">These links are provided to help users discover and contact providers.</p>
          <p className="mt-2">Once you leave BeautyMe and access an external platform, your use of that platform is governed by its own terms, privacy policy and rules.</p>
          <p className="mt-2">BeautyMe does not control external websites and is not responsible for their content, availability, security or privacy practices.</p>
          <p className="mt-2">Users access external links at their own discretion.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">16. Availability and Changes to the Platform</h2>
          <p>BeautyMe aims to keep its website available and functioning properly.</p>
          <p className="mt-2">However, we cannot guarantee uninterrupted access at all times.</p>
          <p className="mt-2">The website may occasionally be unavailable due to: Maintenance or technical updates, Hosting or network interruptions, Security incidents, Software or hardware failures, Circumstances outside our reasonable control.</p>
          <p className="mt-2">BeautyMe may update, change, suspend or discontinue features where reasonably necessary to maintain or improve the platform.</p>
          <p className="mt-2">We will take reasonable steps to avoid unnecessary disruption, but we cannot guarantee that every feature will always remain available.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">17. Free Use of BeautyMe</h2>
          <p>At present, BeautyMe is free to use.</p>
          <p className="mt-2">There are currently no registration fees, provider profile fees, subscriptions, commissions or transaction charges.</p>
          <p className="mt-2">BeautyMe does not currently require users or providers to pay for the standard features of the platform.</p>
          <p className="mt-2">If BeautyMe introduces paid features or services in the future, the relevant fees and conditions will be communicated before those paid features become available.</p>
          <p className="mt-2">Users will not be charged for a new paid feature without being given an opportunity to review and accept the applicable terms.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">18. Account Suspension and Termination</h2>
          <p>BeautyMe reserves the right to restrict, suspend or permanently remove accounts or provider profiles where reasonably necessary.</p>
          <p className="mt-2">This may happen where a user: Supplies false, misleading or fraudulent information, Impersonates another person or business, Uploads photographs or content without the necessary rights or permissions, Violates another person's privacy, Engages in abusive, threatening or inappropriate conduct, Uses BeautyMe for unlawful purposes, Repeatedly violates these Terms and Conditions or the Provider Rules, Attempts to compromise the security or integrity of the platform, Engages in conduct that creates a reasonable concern for the safety of users or the platform.</p>
          <p className="mt-2">BeautyMe may temporarily suspend an account while investigating suspected violations.</p>
          <p className="mt-2">Where reasonably possible, the affected user will be informed of the action taken and the reasons for it.</p>
          <p className="mt-2">BeautyMe may act immediately where necessary to address serious security, safety, legal or privacy concerns.</p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">18.1 Deleting your own account</h3>
          <p>Users may delete their own accounts through the available account deletion functionality.</p>
          <p className="mt-2">When an account is deleted: Access to the account is disabled, Any associated provider profile is removed from public display, Selected contact details are no longer displayed, Portfolio images and other profile content are removed from active public display.</p>
          <p className="mt-2">Certain information may be retained where required or permitted by applicable law or where reasonably necessary for legitimate legal, security or administrative purposes.</p>
          <p className="mt-2">Further information about the handling and retention of personal information is available in our Privacy Policy.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">19. Privacy and Personal Information</h2>
          <p>BeautyMe respects the privacy of its users.</p>
          <p className="mt-2">Personal information collected through the platform is handled in accordance with our Privacy Policy and applicable South African privacy legislation, particularly the Protection of Personal Information Act 4 of 2013 (POPIA).</p>
          <p className="mt-2">Our Privacy Policy explains: What personal information we collect, Why we collect it, How it is used and stored, Which information is displayed to other users, When information may be shared with third parties, How users may exercise their privacy rights.</p>
          <p className="mt-2">By creating an account or using the platform, you acknowledge that you have been given an opportunity to read our Privacy Policy.</p>
          <p className="mt-2">Where specific processing activities require consent, that consent will be obtained separately where appropriate.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">20. IMPORTANT NOTICE: LIABILITY AND RESPONSIBILITY</h2>
          <p>Please read this section carefully.</p>
          <p className="mt-2">BeautyMe provides a discovery and showcase service. It does not control the independent service providers listed on the platform or the services they supply outside BeautyMe.</p>
          <p className="mt-2">To the extent permitted by applicable law:</p>
          <p className="mt-2"><strong>20.1 Independent providers:</strong> BeautyMe is not responsible for independently provided services, the conduct of providers, the accuracy of information supplied by providers or agreements made directly between providers and clients, except to the extent that applicable law provides otherwise.</p>
          <p className="mt-2"><strong>20.2 Decisions made by users:</strong> Users are responsible for exercising their own judgement when deciding whether to contact, engage or work with a provider. The inclusion of a provider on BeautyMe does not guarantee that the provider is qualified, suitable, reliable or able to deliver a particular service.</p>
          <p className="mt-2"><strong>20.3 Website availability:</strong> BeautyMe does not guarantee that the website will always be available, uninterrupted or free from technical errors.</p>
          <p className="mt-2"><strong>20.4 Limitation of liability:</strong> To the extent permitted by applicable law, BeautyMe will not be liable for indirect or consequential losses arising from the use of the platform, including loss of business opportunities, anticipated profits or business interruption.</p>
          <p className="mt-2">Nothing in these Terms and Conditions is intended to exclude or limit liability where doing so would be unlawful.</p>
          <p className="mt-2">In particular, nothing in these terms excludes liability for gross negligence, fraud, intentional misconduct or any other liability that cannot lawfully be excluded or limited under South African law.</p>
          <p className="mt-2">Nothing in these terms removes rights or remedies that users may have under applicable consumer protection or other legislation.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">21. Provider Responsibility and Indemnification</h2>
          <p>Providers remain responsible for the information, photographs, services and representations associated with their profiles.</p>
          <p className="mt-2">To the extent permitted by applicable law, a provider may be responsible for claims, losses or reasonable legal costs arising directly from: Their breach of these Terms and Conditions, Their unlawful conduct, Their infringement of another person's intellectual property or privacy rights, Their failure to obtain necessary permission for uploaded content, Their misleading or fraudulent representations, Their provision of services in breach of applicable legal requirements.</p>
          <p className="mt-2">This does not make providers responsible for losses caused by BeautyMe's own unlawful conduct, negligence or breach of its legal obligations.</p>
          <p className="mt-2">Nothing in this section is intended to impose liability beyond what South African law permits.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">22. Changes to These Terms and Conditions</h2>
          <p>BeautyMe may update these Terms and Conditions from time to time to reflect changes to the platform, its features, its operations or applicable legal requirements.</p>
          <p className="mt-2">Where material changes are made, we will take reasonable steps to notify affected users.</p>
          <p className="mt-2">Where a change requires renewed acceptance, BeautyMe may request that users review and accept the updated terms before continuing to use the affected features.</p>
          <p className="mt-2">The latest version will be made available on the BeautyMe website, together with its effective or updated date.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">23. Governing Law and Disputes</h2>
          <p>These Terms and Conditions are governed by the laws of the Republic of South Africa.</p>
          <p className="mt-2">If a disagreement arises between a user and BeautyMe, the parties should first attempt to resolve the matter through direct communication.</p>
          <p className="mt-2">Users may contact BeautyMe using the contact details provided below.</p>
          <p className="mt-2">Nothing in this section prevents a user from exercising any statutory rights or referring a matter to a competent regulatory authority, tribunal, ombud or court where permitted by law.</p>
          <p className="mt-2">Where a dispute cannot be resolved directly, it may be referred to a competent South African court, subject to applicable legal requirements.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">24. General Provisions</h2>
          <p>If any provision of these Terms and Conditions is found to be unlawful, invalid or unenforceable, that provision will be treated separately to the extent required, without automatically affecting the validity of the remaining provisions.</p>
          <p className="mt-2">A failure by BeautyMe to enforce a particular provision immediately does not mean that BeautyMe has permanently waived its right to enforce that provision.</p>
          <p className="mt-2">These Terms and Conditions, together with the Privacy Policy and applicable Provider Rules and Declaration, set out the rules governing the use of BeautyMe.</p>
          <p className="mt-2">Where applicable, mandatory provisions of South African law will take precedence over any inconsistent provision in these terms.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">25. Contact BeautyMe</h2>
          <p>If you have questions about these Terms and Conditions, need assistance with your account or wish to report a violation, please contact us:</p>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-4">
            <p className="font-bold text-[#1A1A2E] mb-2">BeautyMe</p>
           {/* <p><strong>Website:</strong> <Highlight>[Insert BeautyMe website address]</Highlight></p> */}
            <p><strong>Email:</strong> hksitconsult@gmail.com</p>
            <p><strong>Privacy enquiries:</strong> hksitconsult@gmail.com</p>
            <p><strong>Physical address:</strong> 80 FINDLAY STREET - ODENDAALSRUS</p>
          </div>
          <p className="mt-6 font-medium text-center italic text-gray-500">Thank you for being part of BeautyMe. Our aim is to create a welcoming space where independent service providers and creative individuals can showcase what they do and become easier to discover.</p>
        </section>
      </div>
    </div>
  );
}