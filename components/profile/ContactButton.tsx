"use client";

import { useState } from "react";

type ContactProps = {
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  instagram?: string | null;
  displayName: string;
};

export function ContactButton({ phone, email, website, instagram, displayName }: ContactProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Check if they actually have any contact info filled out
  const hasContactInfo = phone || email || website || instagram;

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="mt-8 bg-[#8600B3] hover:bg-[#6e0093] text-white px-8 py-3 rounded-full font-medium transition-colors shadow-md shadow-[#8600B3]/20 w-full md:w-auto"
      >
        Get in touch
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          {/* Modal Content */}
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 md:p-8 relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl leading-none"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2 text-center">
              Contact {displayName}
            </h3>
            <p className="text-gray-500 text-sm text-center mb-6">
              Reach out directly to book or ask a question.
            </p>

            {!hasContactInfo ? (
              <div className="bg-gray-50 p-6 rounded-xl text-center text-gray-500 border border-gray-100">
                This provider hasn't added their contact details yet.
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {phone && (
                  <a href={`tel:${phone}`} className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-[#8600B3]/5 border border-gray-100 hover:border-[#8600B3]/30 rounded-xl transition-all">
                    <span className="text-xl">📞</span>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Phone</p>
                      <p className="text-[#1A1A2E] font-medium">{phone}</p>
                    </div>
                  </a>
                )}
                
                {email && (
                  <a href={`mailto:${email}`} className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-[#8600B3]/5 border border-gray-100 hover:border-[#8600B3]/30 rounded-xl transition-all">
                    <span className="text-xl">✉️</span>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Email</p>
                      <p className="text-[#1A1A2E] font-medium">{email}</p>
                    </div>
                  </a>
                )}

                {instagram && (
                  <a href={instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-[#8600B3]/5 border border-gray-100 hover:border-[#8600B3]/30 rounded-xl transition-all">
                    <span className="text-xl">📸</span>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Instagram</p>
                      <p className="text-[#1A1A2E] font-medium">Send a DM</p>
                    </div>
                  </a>
                )}

                {website && (
                  <a href={website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-[#8600B3]/5 border border-gray-100 hover:border-[#8600B3]/30 rounded-xl transition-all">
                    <span className="text-xl">🌐</span>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Website</p>
                      <p className="text-[#1A1A2E] font-medium">Visit website</p>
                    </div>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}