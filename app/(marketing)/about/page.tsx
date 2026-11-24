import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full py-24 flex flex-col items-center justify-center text-center px-4 bg-[#FAF8FC]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8600B3]/10 via-[#FAF8FC] to-[#FAF8FC]"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl text-[#1A1A2E] leading-tight mb-6">
          Discover talent. Support independent businesses. Connect through creativity.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Welcome to <strong className="text-[#8600B3]">BeautyMe</strong> – a platform created to help independent service providers, small businesses and creative individuals get noticed.
        </p>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-3xl mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-lg prose-gray max-w-none text-gray-600 flex flex-col gap-12">
          
          {/* Section 1 */}
          <div>
            <p className="text-xl leading-relaxed">
              We believe that talent exists everywhere. Sometimes, all it takes is the right place for someone to discover it.
            </p>
            <p className="mt-4">
              Whether it's a talented hairstylist working from home, a nail technician building her own client base, a massage therapist offering personal care, or a crochet artist turning creativity into something beautiful, there are countless individuals with skills worth discovering.
            </p>
            <p className="mt-4">
              But for many independent providers, getting noticed isn't always easy. Not everyone has the resources to build a website, run advertisements or establish a large business. Some are simply starting out, while others have been doing what they love for years without having a dedicated space to showcase their work.
            </p>
            <p className="mt-6 text-2xl font-bold text-[#1A1A2E]">
              That's where BeautyMe comes in.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">A place for talent to shine</h2>
            <p>
              BeautyMe brings independent service providers and the people looking for their services together in one convenient place.
            </p>
            <p className="mt-4">
              We give providers an opportunity to create their own profiles, introduce their businesses, showcase their work through photographs, list the services they offer and share their contact information.
            </p>
            <p className="mt-4">
              For those looking for a particular service, BeautyMe makes discovering local talent easier. You can explore provider profiles, browse their work, learn about what they offer and find their contact details when you're logged in.
            </p>
            <p className="mt-4">
              Whether you're looking for someone new or simply want to discover the talent around you, BeautyMe makes it easier to find the right people.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">More than just a platform</h2>
            <p>
              We understand that not every business starts with a storefront, a registered company or a big advertising budget.
            </p>
            <p className="mt-4">
              Some of the most talented people are independent individuals working from home, building something of their own, one client at a time.
            </p>
            <p className="mt-4">
              We believe they deserve an opportunity to be seen too.
            </p>
            <p className="mt-4">
              BeautyMe welcomes independent professionals, informal businesses, freelancers, small businesses and creative individuals. You don't need to be a big company to showcase what you do.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">Our purpose</h2>
            <p>
              Our purpose is simple: <strong>to make independent talent easier to discover.</strong>
            </p>
            <p className="mt-4">
              We want to create a space where service providers can take pride in what they do, introduce their work to a wider audience and make meaningful connections with potential clients.
            </p>
            <p className="mt-4">
              At the same time, we want to make it easier for people to discover services, explore different talents and connect directly with the individuals behind them.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#FAF8FC] py-20 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">Be part of BeautyMe</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Whether you're here to showcase your skills or discover someone who offers exactly what you're looking for, we're glad you're here.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/signup" 
              className="w-full sm:w-auto bg-[#8600B3] hover:bg-[#6e0093] text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl"
            >
              Showcase Your Work
            </Link>
            <Link 
              href="/search" 
              className="w-full sm:w-auto bg-white text-[#8600B3] border-2 border-[#8600B3] hover:bg-[#8600B3] hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              Discover Talent
            </Link>
          </div>
          
          <p className="mt-12 text-xl font-bold text-[#8600B3] tracking-wide">
            BeautyMe – Where talent gets discovered.
          </p>
        </div>
      </section>
    </div>
  );
}