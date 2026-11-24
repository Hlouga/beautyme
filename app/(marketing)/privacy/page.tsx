import Link from "next/link";

export default function PrivacyPolicyPage() {
  const Highlight = ({ children }: { children: React.ReactNode }) => (
    <span className="bg-yellow-200 text-yellow-900 px-1 rounded font-medium">{children}</span>
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4">BeautyMe – Privacy Policy</h1>
        <p className="text-gray-600 font-medium">
          <strong>Last updated:</strong> 23 November 2026<br />
        </p>
      </div>

      <div className="prose prose-gray max-w-none text-gray-600 flex flex-col gap-8">
        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">1. Introduction</h2>
          <p>
            Welcome to BeautyMe. BeautyMe is a discovery and showcase platform that connects independent service providers, small businesses and creative individuals with people looking for their services.
          </p>
          <p className="mt-4">
            We understand that personal information matters. Whether you are creating an account, showcasing your work or browsing provider profiles, we want you to understand what information we collect, how we use it and how we protect it.
          </p>
          <p className="mt-4">
            This Privacy Policy explains how BeautyMe collects, uses, stores, shares and protects personal information when you access or use our website. BeautyMe operates in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA) and other applicable South African privacy laws.
          </p>
          <p className="mt-4">
            By using BeautyMe, you acknowledge that you have had the opportunity to read this Privacy Policy. Where we require consent for a particular processing activity, we will request that consent separately where appropriate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">2. Who We Are</h2>
          <p>BeautyMe is operated by:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Legal name:</strong> HKS IT SUPPORT</li>
            <li><strong>Trading name:</strong> BeautyMe</li>
            <li><strong>Physical address:</strong> 80 FINDLAY STREET
                                                  - ODENDAALSRUS</li>
            <li><strong>Email address:</strong>hksitconsult@gmail.com</li>
          </ul>
          <p className="mt-4">
            For purposes of POPIA, the person or entity operating BeautyMe is the responsible party in relation to the personal information it collects and processes through the platform. This means that we determine why and how your personal information is processed and are responsible for ensuring that it is handled in accordance with applicable privacy laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">3. Who This Privacy Policy Applies To</h2>
          <p>This Privacy Policy applies to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Visitors browsing the BeautyMe website.</li>
            <li>Individuals who create a BeautyMe account.</li>
            <li>Service providers who create profiles to showcase their services and work.</li>
            <li>Individuals whose photographs or other personal information are uploaded by providers.</li>
            <li>Individuals who contact BeautyMe regarding their accounts, profiles or privacy concerns.</li>
          </ul>
          <p className="mt-4 font-medium text-[#1A1A2E]">
            BeautyMe is intended for individuals aged 18 and older. You must be at least 18 years old to register for an account. We do not intentionally offer account registration to children under the age of 18.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">4. Personal Information We Collect</h2>
          <p>The information we collect depends on how you use BeautyMe.</p>
          
          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">4.1 Information collected when creating an account</h3>
          <p>When you register for an account, we require the following information: Full name, Email address, Password.</p>
          <p className="mt-2">Your full name is collected for account identification and administration. It is not automatically displayed on your public provider profile. Your password is used to secure access to your account and should be stored using appropriate password-protection methods. BeautyMe administrators should not need access to your readable password.</p>
          <p className="mt-2">Providing the required registration information is necessary to create and maintain an account. Without it, we may not be able to provide access to account-related features.</p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">4.2 Additional information collected from service providers</h3>
          <p>Individuals who wish to become service providers must submit additional information when creating their provider profiles. This may include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Business or trading name.</li>
            <li>Description or biography.</li>
            <li>Services offered.</li>
            <li>Skills and specialities.</li>
            <li>Business or service location.</li>
            <li>Operating hours.</li>
            <li>Email address.</li>
            <li>Cellphone number.</li>
            <li>Instagram handle.</li>
            <li>Profile photographs.</li>
            <li>Portfolio images and other examples of their work.</li>
          </ul>
          <p className="mt-2">BeautyMe welcomes informal businesses, independent service providers, sole proprietors and registered businesses. We do not require providers to have a CIPC-registered business simply to showcase their services on the platform. We also do not routinely require identity documents, business registration certificates or professional qualification documents as part of the standard profile application process.</p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">4.3 Provider contact information</h3>
          <p>Providers may submit their email addresses, cellphone numbers and Instagram handles as part of their profiles. Providers are responsible for ensuring that the contact information they submit is accurate, current and belongs to them or that they have permission to use it.</p>
          <p className="mt-2">BeautyMe does not currently use OTPs or other automated verification methods to independently confirm ownership or control of these contact details. The submission of contact information and administrative approval of a profile should therefore not be interpreted as confirmation that the details have been independently verified by BeautyMe.</p>
          <p className="mt-2">Providers may choose which of their available contact details they wish to display on their profiles. Only the contact details selected for display are made available to registered and logged-in BeautyMe users.</p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">4.4 Information collected through portfolio images</h3>
          <p>Providers may upload photographs and other visual content to showcase their services and completed work. Some photographs may include clients or other individuals. Providers are responsible for obtaining the necessary permission before uploading photographs featuring other people.</p>
          <p className="mt-2">Photographs featuring children under 18 must receive particular care. Providers must obtain prior permission from a parent or legal guardian where the photograph involves the processing of the child's personal information. Such photographs must focus on the work being showcased and must not reveal the child's face or other identifying details. BeautyMe may review, reject or remove photographs that raise privacy, consent or safety concerns.</p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">4.5 Technical information</h3>
          <p>When you access BeautyMe, certain technical information may be collected automatically to help operate, maintain and protect the website. Depending on the website's technical configuration, this may include: IP address, Browser type and version, Device information, Operating system, Pages visited, Date and time of access, Website activity and technical error records, Security and access logs.</p>
          <p className="mt-2">This information may be used to diagnose technical problems, maintain website security, monitor performance and identify suspicious activity.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">5. How We Use Your Personal Information</h2>
          <p>BeautyMe collects and processes personal information for specific purposes connected to operating the platform. These purposes include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Account creation and administration:</strong> To create user accounts, manage login access, maintain account records and provide access to the website's features.</li>
            <li><strong>Provider profile management:</strong> To allow providers to create, maintain and update their profiles and showcase their services, skills and work.</li>
            <li><strong>Provider contact information:</strong> To collect and maintain provider contact information, apply the provider's selected contact visibility preferences and make selected details available to registered and logged-in users.</li>
            <li><strong>Profile review and approval:</strong> To allow authorised BeautyMe administrators to review provider applications, check whether required information has been supplied and determine whether profiles meet the platform's approval requirements. This administrative review does not independently verify the identity of providers or confirm that their submitted contact information belongs to them.</li>
            <li><strong>Website operation and security:</strong> To maintain the website, identify technical problems, prevent unauthorised access and protect the platform against fraudulent or harmful activity.</li>
            <li><strong>Communication:</strong> To respond to enquiries, address complaints, provide important account information and communicate changes affecting the platform.</li>
            <li><strong>Legal and regulatory obligations:</strong> To comply with applicable laws, respond to lawful requests and protect or exercise our legal rights where necessary.</li>
          </ul>
          <p className="mt-2">We will not use personal information for purposes unrelated to its original collection unless the further processing is compatible with the original purpose or otherwise permitted by law.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">6. What Information Is Visible to Other Users?</h2>
          <p>BeautyMe has different visibility settings for provider profiles and account information. We believe it is important that providers understand exactly what information they are sharing.</p>
          
          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">6.1 Information visible to everyone</h3>
          <p>The following information may be displayed publicly on a provider's profile: Chosen business or trading name, Biography and business description, Services offered, Skills and specialities, Business or service location, Operating hours, Profile photographs, Portfolio images and other uploaded work.</p>
          <p className="mt-2">This information can be viewed by anyone visiting BeautyMe, including individuals who do not have an account. Publicly available profiles may also be accessed, copied or indexed by external search engines and other third parties.</p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">6.2 Information visible only to logged-in users</h3>
          <p>Providers may choose which contact details they want to display. Selected contact information may include: Email address, Cellphone number, Instagram handle.</p>
          <p className="mt-2">These selected details are visible only to individuals who have successfully registered and logged into BeautyMe. Individuals who have not logged into the platform cannot access these contact details through the provider profile. However, restricting contact details to logged-in users does not guarantee that another user cannot copy, save, screenshot or share the information outside BeautyMe.</p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">6.3 Private account information</h3>
          <p>Your full name, account password and other account administration information are not automatically displayed on your public provider profile. BeautyMe administrators and authorised personnel may access relevant account information where reasonably necessary to administer the platform, review profiles, provide support, maintain security or comply with legal obligations.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">7. The Legal Grounds for Processing Personal Information</h2>
          <p>POPIA requires personal information to be processed lawfully and for legitimate purposes. Depending on the circumstances, BeautyMe may rely on one or more of the following legal grounds:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Contractual necessity:</strong> Processing may be necessary to create and maintain your account, provide access to platform features and administer your relationship with BeautyMe.</li>
            <li><strong>Legitimate interests:</strong> Processing may be necessary for legitimate interests pursued by BeautyMe or another party, provided that those interests do not improperly override your privacy rights. Examples include maintaining website security, preventing misuse and protecting the integrity of the platform.</li>
            <li><strong>Consent:</strong> Certain processing activities may depend on your consent, particularly where you choose to make personal information available to other users or authorise the use of photographs featuring identifiable individuals.</li>
            <li><strong>Legal obligations:</strong> We may process or retain information where required to comply with applicable South African laws or lawful regulatory requirements.</li>
          </ul>
          <p className="mt-2">Where processing is based on consent, you may withdraw that consent, subject to any other lawful basis that may allow us to continue the relevant processing.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">8. Sharing of Personal Information</h2>
          <p>BeautyMe does not sell personal information to third parties. We may share personal information only where reasonably necessary for operating the platform, providing its services or meeting legal obligations.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Service providers and technical operators:</strong> BeautyMe may use third-party service providers to assist with Website hosting, Database and information storage, Email delivery, Website maintenance, Technical support, Security and backup services. Where required by POPIA, we will ensure that appropriate contractual and security measures are in place to protect information processed by these service providers.</li>
            <li><strong>Legal and regulatory disclosures:</strong> We may disclose personal information where required or authorised by law, including in response to lawful requests from regulatory authorities, courts or law enforcement agencies.</li>
            <li><strong>Publicly displayed provider information:</strong> Information that providers choose to display on their profiles is made available to the relevant categories of BeautyMe users as explained in Section 6. BeautyMe does not provide providers with private lists of registered users or automatically disclose users' private account information to providers.</li>
            <li><strong>No sale of personal information:</strong> BeautyMe does not sell, rent or trade users' personal information for commercial gain.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">9. Third-Party Websites and External Links</h2>
          <p>Provider profiles may contain links to external websites or social media platforms, including Instagram. When you follow an external link, you leave BeautyMe and interact with another service. External websites and platforms operate under their own privacy policies and terms of use. BeautyMe does not control how those third parties collect, use or protect personal information. We encourage users to familiarise themselves with the privacy policies of external platforms before sharing personal information with them.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">10. Cookies and Similar Technologies</h2>
          <p>BeautyMe may use cookies or similar technologies where necessary to operate the website and provide a secure and functional browsing experience. These technologies may be used to: Maintain login sessions, Remember necessary website preferences, Support website functionality, Improve website security, Understand website performance, where applicable.</p>
          <p className="mt-2">Cookies are small files stored on your device when you visit a website.</p>
          <p className="mt-2"><strong>Advertising and tracking technologies:</strong> BeautyMe does not currently operate a system for displaying third-party advertisements on its website. BeautyMe may advertise its own platform through external advertising services, including Google Ads, in the future. Advertising BeautyMe through Google does not automatically mean that Google advertising tracking technologies are installed on the BeautyMe website. Should we introduce advertising pixels, conversion tracking, remarketing tools or other technologies that collect information about website visitors, we will update this Privacy Policy and provide any additional notices or choices required by applicable law.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">11. Direct Marketing and Promotional Communications</h2>
          <p>BeautyMe may send communications that are necessary for the operation of your account. These may include: Account-related notifications, Security notifications, Important changes to the platform, Responses to enquiries or complaints.</p>
          <p className="mt-2">BeautyMe does not currently operate a paid promotional messaging programme to users. Should we introduce newsletters, promotional emails or other direct marketing communications, we will process personal information for those purposes in accordance with POPIA, including its requirements concerning consent and the right to object. You will be able to exercise your applicable rights in relation to direct marketing communications.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">12. International Transfers of Personal Information</h2>
          <p>BeautyMe may use third-party service providers whose systems, servers or infrastructure are located outside South Africa. Where personal information is transferred outside South Africa, BeautyMe will take reasonable steps to ensure that the transfer complies with section 72 of POPIA. This may include ensuring that the recipient is subject to an adequate level of legal protection, obtaining the necessary consent where applicable or relying on another lawful basis permitted by POPIA.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">13. How Long We Keep Personal Information</h2>
          <p>BeautyMe will not keep personal information for longer than is necessary to fulfil the purposes for which it was collected, unless a longer retention period is required or permitted by law. Retention periods may depend on the type of information involved and the reason it was collected.</p>
          <p className="mt-2">When personal information is no longer required, BeautyMe will take reasonable steps to securely delete or de-identify it.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">14. Account Deletion and Removal of Information</h2>
          <p>BeautyMe allows users to delete their own accounts. Administrators may also suspend or remove accounts where necessary, including where a user violates the platform's rules or engages in conduct that may compromise the safety or integrity of BeautyMe.</p>
          <p className="mt-2">When an account is deleted: Login access is disabled, The associated provider profile is removed from the platform, Selected contact information is no longer displayed, Portfolio photographs and other profile information are removed from active public display, Account information is handled in accordance with applicable retention requirements.</p>
          <p className="mt-2">Deleting your account does not automatically remove information that other users may already have copied, downloaded, screenshotted or shared outside BeautyMe.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">15. How We Protect Personal Information</h2>
          <p>BeautyMe takes the security of personal information seriously. We will implement appropriate technical and organisational safeguards to protect information against: Unauthorised access, Accidental loss, Unlawful destruction, Unauthorised alteration, Improper disclosure, Unlawful processing.</p>
          <p className="mt-2">These safeguards may include access controls, password protection, restricted administrative access, secure storage, system monitoring and appropriate security procedures. Access to personal information will be limited to authorised individuals who require it for legitimate platform-related purposes. No website or electronic storage system can be guaranteed to be completely secure. However, BeautyMe will take reasonable steps to protect information under its control.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">16. Personal Information Security Incidents</h2>
          <p>If BeautyMe has reasonable grounds to believe that personal information has been accessed or acquired by an unauthorised person, we will respond in accordance with POPIA. Where required by law, we will notify the Information Regulator and affected individuals. Such notifications may explain the nature of the security incident, the information that may have been affected, the potential consequences, measures taken or intended to address the incident and steps affected individuals may take to reduce potential harm.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">17. Your Rights Under POPIA</h2>
          <p>Subject to applicable legal requirements, your rights include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Right to access:</strong> You may request confirmation of whether BeautyMe holds personal information about you and request access to that information.</li>
            <li><strong>Right to correction:</strong> You may ask BeautyMe to correct or update personal information that is inaccurate, incomplete, misleading or out of date.</li>
            <li><strong>Right to deletion:</strong> You may request the deletion or destruction of personal information that BeautyMe is no longer authorised to retain.</li>
            <li><strong>Right to object:</strong> You may object to certain types of processing where POPIA provides that right.</li>
            <li><strong>Right to withdraw consent:</strong> Where processing is based on your consent, you may withdraw that consent.</li>
            <li><strong>Right to complain:</strong> You may lodge a complaint with the Information Regulator if you believe BeautyMe has processed your personal information unlawfully or violated your privacy rights.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">18. How to Exercise Your Privacy Rights</h2>
          <p>To exercise any of the rights described in this policy, please contact BeautyMe using the details below. Please include your full name, the email address associated with your BeautyMe account (where applicable), a description of your request and any additional information reasonably necessary to identify the relevant information.</p>
          <p className="mt-2 font-medium"><strong>Privacy contact email:</strong>hksitconsult@gmail.com</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">19. Information Officer</h2>
          <p>BeautyMe will designate and register an Information Officer in accordance with applicable POPIA requirements. The Information Officer is responsible for overseeing compliance with privacy laws, handling privacy-related requests and serving as a contact point for matters involving personal information.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Information Officer:</strong> Lehlohonolo Sebetoane</li>
            <li><strong>Email address:</strong> hlooks@protonmail.com</li>
            <li><strong>Business address:</strong> hksitconsult@gmail.com</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">20. Complaints to the Information Regulator</h2>
          <p>If you are dissatisfied with how BeautyMe handles your personal information, you may contact the Information Regulator of South Africa.</p>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-4">
            <p className="font-bold text-[#1A1A2E] mb-2">Information Regulator (South Africa)</p>
            <p><strong>Website:</strong> <a href="https://inforegulator.org.za/" target="_blank" rel="noopener noreferrer" className="text-[#8600B3] hover:underline">https://inforegulator.org.za/</a></p>
            <p><strong>Email:</strong> POPIAComplaints@inforegulator.org.za</p>
            <p><strong>General enquiries:</strong> enquiries@inforegulator.org.za</p>
            <p><strong>Telephone:</strong> 010 023 5200 / 0800 017 160</p>
            <p className="mt-2"><strong>Physical address:</strong><br />Woodmead North Office Park<br />54 Maxwell Drive<br />Woodmead, Johannesburg<br />2191<br />South Africa</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">21. Changes to This Privacy Policy</h2>
          <p>BeautyMe may update this Privacy Policy from time to time to reflect changes to the website, its functionality, the way information is processed or applicable legal requirements. Where changes are material, we will take reasonable steps to notify users. The latest version will always be made available on the BeautyMe website, together with its effective or updated date.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">22. Contact Us</h2>
          <p>If you have any questions, concerns or requests relating to this Privacy Policy or the way BeautyMe handles personal information, please contact us:</p>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-4">
            <p className="font-bold text-[#1A1A2E] mb-2">BeautyMe</p>
            {/* <p><strong>Website:</strong> <Highlight>[Insert website address]</Highlight></p> */}
            <p><strong>Email:</strong> hksitconsult@gmail.com</p>
            <p><strong>Privacy enquiries:</strong> hksitconsult@gmail.com</p>
            <p><strong>Physical address:</strong> 80 FINDLAY STREET 
                                                  - ODENDAALSRUS</p>
          </div>
          <p className="mt-4">We take privacy concerns seriously and will make reasonable efforts to address them in accordance with applicable South African law.</p>
        </section>
      </div>
    </div>
  );
}