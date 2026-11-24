export default function PaiaManualPage() {
  const Highlight = ({ children }: { children: React.ReactNode }) => (
    <span className="bg-yellow-200 text-yellow-900 px-1 rounded font-medium">{children}</span>
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4">BeautyMe – PAIA Manual</h1>
        <p className="text-gray-600 font-medium">
          Prepared in terms of Section 51 of the Promotion of Access to Information Act 2 of 2000, as amended.
        </p>
        <div className="mt-4 bg-gray-50 p-4 rounded-xl border border-gray-200 text-sm">
          <p><strong>Company name:</strong> HKS IT SUPPORT (Pty) Ltd</p>
          <p><strong>Trading name:</strong> BeautyMe</p>
          <p><strong>Company registration number:</strong> 2024/216867/07</p>
          <p><strong>Last updated:</strong> 23 November 2026</p>
          {/*<p><strong>Website:</strong> <Highlight>[Insert website address]</Highlight></p>*/}
        </div>
      </div>

      <div className="prose prose-gray max-w-none text-gray-600 flex flex-col gap-8">
        
        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">1. INTRODUCTION</h2>
          <p>HKS IT SUPPORT (Pty) Ltd, trading as BeautyMe (hereafter referred to as "BeautyMe" or "the Company"), is a South African private company operating an online discovery and showcase platform for independent service providers, small businesses and creative individuals.</p>
          <p className="mt-2">BeautyMe provides a platform where service providers can create profiles, showcase their work, describe their services and make selected business contact information available to registered users.</p>
          <p className="mt-2">This Manual has been prepared in accordance with Section 51 of the Promotion of Access to Information Act 2 of 2000 (PAIA), read together with the Protection of Personal Information Act 4 of 2013 (POPIA).</p>
          <p className="mt-2">Its purpose is to provide members of the public with information about the records held by BeautyMe, explain how those records may be requested and provide information about how the Company processes personal information.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">2. PURPOSE OF THIS MANUAL</h2>
          <p>This Manual is intended to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Explain how members of the public can request access to records held by BeautyMe.</li>
            <li>Identify the categories of records maintained by the Company.</li>
            <li>Explain which records are available without submitting a formal PAIA request.</li>
            <li>Provide information about the personal information processed by BeautyMe.</li>
            <li>Identify the categories of individuals whose personal information may be processed.</li>
            <li>Describe the purposes for which personal information is collected and used.</li>
            <li>Explain the general security measures applied to protect personal information.</li>
          </ul>
          <p className="mt-2">This Manual does not mean that every record held by BeautyMe is automatically available to the public. Access remains subject to PAIA, POPIA and other applicable legal requirements.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">3. COMPANY DETAILS</h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left border-collapse text-sm">
              <tbody>
                {[
                  ["Registered company name", "HKS IT SUPPORT"],
                  ["Trading name", "BeautyMe"],
                  ["Company registration number", "2024/216867/07"],
                  ["Type of entity", "Private Company (Pty) Ltd"],
                  ["Country of registration", "Republic of South Africa"],
                  ["Physical address", "80 FINDLAY STREET - ODENDAALSRUS"],
                  ["Postal address", "Same as physical"],
                  ["Telephone number", "065 719 1767"],
                  ["Email address", "hksitconsult@gmail.com"],
                  /*["Website", "[Insert website address]"],*/
                ].map(([label, value], idx) => (
                  <tr key={idx} className="border-b border-gray-200">
                    <th className="py-3 px-4 bg-gray-50 font-semibold text-[#1A1A2E] w-1/3">{label}</th>
                    <td className="py-3 px-4 text-gray-600">
                      {value.includes("[Insert") ? <Highlight>{value}</Highlight> : value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">4. INFORMATION OFFICER</h2>
          <p>The Information Officer is responsible for overseeing BeautyMe's compliance with PAIA and POPIA and handling requests for access to records.</p>
          <p className="mt-2">The Information Officer will also oversee the Company's personal information processing activities and engage with the Information Regulator where required.</p>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-4">
            <p className="font-bold text-[#1A1A2E] mb-2">Information Officer details:</p>
            <p><strong>Name:</strong> Lehlohonolo Sebetoane</p>
            <p><strong>Position:</strong> CEO / Authorised Information Officer</p>
            <p><strong>Email:</strong> hlooks@protonmail.com</p>
            <p><strong>Telephone:</strong> 065 719 1767</p>
            <p><strong>Physical address:</strong> 80 FINDLAY STREET</p>
          </div>
          <p className="mt-2">The Information Officer must be registered with the Information Regulator before exercising the functions associated with the position.</p>
          <p className="mt-2">Where necessary, BeautyMe may designate a Deputy Information Officer to assist with its PAIA and POPIA responsibilities.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">5. GUIDE ON HOW TO USE PAIA</h2>
          <p>The Information Regulator has prepared a Guide explaining how individuals may exercise their rights under PAIA.</p>
          <p className="mt-2">The Guide provides information about:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>The purpose and operation of PAIA.</li>
            <li>How to request access to records.</li>
            <li>The rights of requesters.</li>
            <li>The responsibilities of public and private bodies.</li>
            <li>Circumstances in which access to information may be refused.</li>
            <li>The procedures available when a request is refused.</li>
          </ul>
          <p className="mt-2">The Guide is available from the Information Regulator.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Information Regulator website:</strong> <a href="https://inforegulator.org.za/" target="_blank" rel="noopener noreferrer" className="text-[#8600B3] hover:underline">https://inforegulator.org.za/</a></li>
            <li><strong>PAIA information and resources:</strong> <a href="https://inforegulator.org.za/paia/" target="_blank" rel="noopener noreferrer" className="text-[#8600B3] hover:underline">https://inforegulator.org.za/paia/</a></li>
          </ul>
          <p className="mt-2">Members of the public may also contact the Information Regulator for assistance.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">6. RECORDS AVAILABLE WITHOUT A FORMAL PAIA REQUEST</h2>
          <p>BeautyMe makes certain information available to the public through its website without requiring a formal PAIA request.</p>
          <p className="mt-2">This may include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>BeautyMe's Terms and Conditions.</li>
            <li>BeautyMe's Privacy Policy.</li>
            <li>BeautyMe's Provider Rules and Declaration.</li>
            <li>BeautyMe's PAIA Manual.</li>
            <li>Publicly accessible provider profiles.</li>
            <li>Provider business names and descriptions.</li>
            <li>Services and skills displayed on provider profiles.</li>
            <li>Provider locations and operating hours, where published.</li>
            <li>Portfolio photographs and other publicly displayed content.</li>
          </ul>
          <p className="mt-2">Selected provider contact details are available only to registered and logged-in users, in accordance with the provider's chosen visibility settings.</p>
          <p className="mt-2">The availability of information on the website does not mean that all information held by BeautyMe is publicly accessible.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">7. CATEGORIES OF RECORDS HELD BY BEAUTYME</h2>
          <p>BeautyMe may hold the following categories of records in the ordinary course of its business.</p>
          
          {[
            { title: "7.1 Corporate and administrative records", items: ["Company registration documents.", "Memorandum of Incorporation.", "Company policies and procedures.", "Internal administrative records.", "Board and management records, where applicable.", "Records relating to business operations."] },
            { title: "7.2 Financial records", items: ["Financial statements.", "Accounting records.", "Tax records.", "Invoices and expense records.", "Banking and financial administration records.", "Supplier payment records."], note: "These records relate to the Company's own business operations and not transactions between providers and clients through BeautyMe." },
            { title: "7.3 User account records", items: ["User registration information.", "Full names.", "Email addresses.", "Account identifiers.", "Password-related authentication records.", "Account status and administrative records.", "Account deletion records."] },
            { title: "7.4 Service provider records", items: ["Provider applications.", "Business or trading names.", "Provider biographies and descriptions.", "Services offered.", "Skills and specialities.", "Business or service locations.", "Operating hours.", "Submitted contact information.", "Contact visibility preferences.", "Profile approval and administrative review records."] },
            { title: "7.5 Photographs and portfolio records", items: ["Provider profile photographs.", "Portfolio images.", "Uploaded creative work.", "Records relating to content submissions.", "Complaints or requests relating to uploaded photographs.", "Records relating to the removal or restriction of content."] },
            { title: "7.6 Communications and correspondence", items: ["Emails sent to BeautyMe.", "Customer and provider support enquiries.", "Complaints and reports.", "Administrative correspondence.", "Communications with suppliers and service providers.", "Legal and regulatory correspondence."] },
            { title: "7.7 Website and technical records", items: ["Website access records.", "Security logs.", "Technical error records.", "Website maintenance records.", "Database and system administration records.", "Website usage information, where collected."] },
            { title: "7.8 Supplier and service provider records", items: ["Website hosting agreements.", "Technical service agreements.", "Software and platform subscriptions.", "Data processing agreements.", "Supplier correspondence.", "Records relating to third-party service providers."] },
            { title: "7.9 Employment and personnel records", items: ["Employment contracts.", "Employee personal information.", "Payroll records.", "Leave records.", "Employment-related correspondence.", "Records required by applicable labour legislation."], note: "The existence and availability of records depend on the Company's actual operations and the records it holds at the relevant time." }
          ].map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">{section.title}</h3>
              <ul className="list-disc pl-5 space-y-1">
                {section.items.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
              {section.note && <p className="text-sm mt-2 italic text-gray-500">{section.note}</p>}
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">8. LEGISLATION THAT MAY APPLY TO RECORDS HELD BY BEAUTYME</h2>
          <p>BeautyMe may maintain records in accordance with the following legislation, insofar as applicable to its activities:</p>
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>Companies Act 71 of 2008.</li>
            <li>Protection of Personal Information Act 4 of 2013.</li>
            <li>Promotion of Access to Information Act 2 of 2000.</li>
            <li>Electronic Communications and Transactions Act 25 of 2002.</li>
            <li>Consumer Protection Act 68 of 2008.</li>
            <li>Income Tax Act 58 of 1962.</li>
            <li>Tax Administration Act 28 of 2011.</li>
            <li>Value-Added Tax Act 89 of 1991, where applicable.</li>
            <li>Copyright Act 98 of 1978.</li>
            <li>Labour Relations Act 66 of 1995, where applicable.</li>
            <li>Basic Conditions of Employment Act 75 of 1997, where applicable.</li>
            <li>Employment Equity Act 55 of 1998, where applicable.</li>
            <li>Unemployment Insurance Act 63 of 2001, where applicable.</li>
          </ol>
          <p className="mt-2">This list is not exhaustive and may be updated as the Company's operations and legal obligations change.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">9. PROCESSING OF PERSONAL INFORMATION UNDER POPIA</h2>
          <p>BeautyMe collects and processes personal information to operate and maintain its discovery and showcase platform.</p>
          
          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">9.1 Categories of data subjects</h3>
          <p>BeautyMe may process personal information relating to: Registered users, Service providers, Website visitors, Individuals who contact BeautyMe, Clients or other individuals whose photographs are uploaded by providers, Employees and prospective employees, where applicable, Suppliers and business contacts.</p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">9.2 Categories of personal information processed</h3>
          <p>Depending on the individual's relationship with BeautyMe, the Company may process:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Account information:</strong> Full names, Email addresses, Password-related authentication records, Account information.</li>
            <li><strong>Provider information:</strong> Business or trading names, Business descriptions, Services offered, Skills and specialities, Business locations, Operating hours, Email addresses, Cellphone numbers, Instagram handles.</li>
            <li><strong>Photographic and creative information:</strong> Profile photographs, Portfolio photographs, Images uploaded to showcase completed work, Other information appearing in uploaded content.</li>
            <li><strong>Technical information:</strong> IP addresses, Browser information, Device information, Website access records, Security and technical logs.</li>
            <li><strong>Business correspondence:</strong> Emails, Support enquiries, Complaints, Administrative correspondence.</li>
          </ul>
          <p className="mt-2">BeautyMe does not routinely require identity documents or professional qualification certificates as part of its standard provider application process.</p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">9.3 Purposes of processing</h3>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Creating and managing user accounts.</li>
            <li>Providing access to BeautyMe's website.</li>
            <li>Allowing providers to create and maintain profiles.</li>
            <li>Displaying provider information and portfolio content.</li>
            <li>Making selected provider contact details available to logged-in users.</li>
            <li>Reviewing and approving provider profiles.</li>
            <li>Responding to enquiries and complaints.</li>
            <li>Maintaining website security and functionality.</li>
            <li>Preventing fraudulent activity and misuse.</li>
            <li>Complying with legal and regulatory obligations.</li>
          </ul>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">9.4 Recipients of personal information</h3>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Authorised BeautyMe personnel and administrators.</li>
            <li>Website hosting providers.</li>
            <li>Database and cloud storage providers.</li>
            <li>Website maintenance and technical support providers.</li>
            <li>Email communication service providers.</li>
            <li>Security and infrastructure providers.</li>
            <li>Professional advisers, including legal and accounting advisers.</li>
            <li>Regulatory authorities where legally required.</li>
          </ul>
          <p className="mt-2">BeautyMe does not sell users' personal information to third parties.</p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">9.5 International transfers of personal information</h3>
          <p>BeautyMe may use third-party service providers whose systems or servers are located outside South Africa. Where personal information is transferred outside South Africa, the Company will take reasonable steps to ensure that the transfer complies with Section 72 of POPIA. The specific locations and service providers involved must be identified and updated as the Company's technical arrangements are confirmed.</p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">9.6 Information security measures</h3>
          <p>The Company will implement appropriate technical and organisational safeguards, which may include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Access controls and restrictions.</li>
            <li>Secure account authentication.</li>
            <li>Appropriate password storage and protection.</li>
            <li>Restricted access to administrative functions.</li>
            <li>Secure hosting and data storage arrangements.</li>
            <li>Website monitoring and security procedures.</li>
            <li>Appropriate backup and recovery measures.</li>
            <li>Procedures for responding to security incidents.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">10. HOW TO REQUEST ACCESS TO RECORDS</h2>
          <p>A person who wishes to access records held by BeautyMe may submit a formal request in accordance with PAIA. Requests should be submitted to the Information Officer using the prescribed PAIA Form 2.</p>
          <p className="mt-2">The request should contain sufficient information to allow BeautyMe to identify the requested records. It should include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>The requester's name and contact information.</li>
            <li>A sufficiently detailed description of the records requested.</li>
            <li>The form of access requested.</li>
            <li>The right the requester wishes to exercise or protect.</li>
            <li>An explanation of why the requested records are required to exercise or protect that right.</li>
            <li>Proof of authority where a person submits a request on behalf of someone else.</li>
          </ul>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-4">
            <p className="font-bold text-[#1A1A2E] mb-2">Submit requests to:</p>
            <p><strong>Information Officer:</strong> Lehlohonolo Sebetoane</p>
            <p><strong>Email:</strong> hksitconsult@gmail.com</p>
            <p><strong>Physical address:</strong> 80 FINDLAY STREET - ODENDAALSRUS</p>
          </div>
          <p className="mt-2">The prescribed forms are available from the Information Regulator at <a href="https://inforegulator.org.za/paia/" target="_blank" rel="noopener noreferrer" className="text-[#8600B3] hover:underline">https://inforegulator.org.za/paia/</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">11. FEES RELATING TO ACCESS REQUESTS</h2>
          <p>Fees may be payable for certain PAIA requests in accordance with the prescribed fee regulations. Where applicable, BeautyMe will inform the requester of any prescribed request fee, deposit or access fee before requiring payment.</p>
          <p className="mt-2">Fees may relate to: Processing a request, Searching for relevant records, Preparing records for disclosure, Making copies or reproductions, Delivering records where applicable.</p>
          <p className="mt-2">Any fees charged will be consistent with the applicable legislation and prescribed fee schedules.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">12. DECISIONS ON ACCESS REQUESTS</h2>
          <p>BeautyMe will consider each request in accordance with PAIA. The Company will generally make a decision within 30 days after receiving a valid request. Where the Act permits an extension, the Information Officer may extend the period by up to a further 30 days and will notify the requester of the extension and the reasons for it.</p>
          <p className="mt-2">Access may be granted in an appropriate form, subject to applicable fees and legal requirements. Where access is refused, BeautyMe will provide the requester with the reasons for refusal and explain the remedies available under applicable law.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">13. GROUNDS FOR REFUSAL OF ACCESS</h2>
          <p>BeautyMe may refuse access to records where a ground for refusal under PAIA applies. Depending on the circumstances, these grounds may include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Protection of another person's personal information and privacy.</li>
            <li>Protection of confidential information supplied by third parties.</li>
            <li>Protection of third-party commercial or financial information.</li>
            <li>Protection of confidential agreements.</li>
            <li>Protection of individuals' safety.</li>
            <li>Protection of records privileged from legal proceedings.</li>
            <li>Protection of BeautyMe's own confidential commercial information or trade secrets.</li>
            <li>Other applicable grounds provided for under PAIA.</li>
          </ul>
          <p className="mt-2">The Company will assess requests individually and will not refuse access merely because a record is inconvenient or commercially sensitive without considering the relevant legal provisions. Where appropriate, access may be granted to parts of a record while protected information is withheld.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">14. REMEDIES WHERE ACCESS IS REFUSED</h2>
          <p>A requester who is dissatisfied with a decision made by BeautyMe may exercise the remedies available under PAIA. These may include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Lodging a complaint with the Information Regulator.</li>
            <li>Applying to a competent court where appropriate.</li>
          </ul>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-4 text-sm">
            <p className="font-bold text-[#1A1A2E] mb-2">Information Regulator</p>
            <p><strong>Website:</strong> <a href="https://inforegulator.org.za/" target="_blank" rel="noopener noreferrer" className="text-[#8600B3] hover:underline">https://inforegulator.org.za/</a></p>
            <p><strong>Email:</strong> enquiries@inforegulator.org.za</p>
            <p><strong>Telephone:</strong> 010 023 5200</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">15. AVAILABILITY OF THIS MANUAL</h2>
          <p>This Manual will be made available:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>On the official BeautyMe website.</li>
            <li>At the Company's principal place of business for public inspection during normal business hours.</li>
            <li>To members of the public upon request, subject to any reasonable applicable reproduction charges.</li>
            <li>To the Information Regulator upon request.</li>
          </ul>
          <p className="mt-2">The Company will review and update this Manual regularly, particularly when there are material changes to its business activities, record categories or personal information processing practices.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">16. CONTACT DETAILS</h2>
          <p>For questions concerning this Manual or requests for access to records held by BeautyMe, please contact:</p>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-4">
            <p className="font-bold text-[#1A1A2E] mb-2">HKS IT SUPPORT (Pty) Ltd</p>
            <p>Trading as BeautyMe</p>
            <p className="mt-2"><strong>Information Officer:</strong> Lehlohonolo Sebetoane</p>
            <p><strong>Email:</strong> hksitconsult@gmail.com</p>
            <p><strong>Telephone:</strong> 065 719 1767</p>
            <p><strong>Physical address:</strong> 80 FINDLAY</p>
            {/*<p><strong>Website:</strong> <Highlight>[Insert website address]</Highlight></p>*/}
          </div>
        </section>
      </div>
    </div>
  );
}