import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Altered Combat - Get in Touch",
  description:
    "Contact Altered Combat for mobile laser tag, Nerf Wars, and VR party bookings. Serving Arizona and beyond. Call (623) 476-4906 or send us a message.",
};

// US Flag SVG component
const USFlagIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="16" fill="#B22234" />
    <rect y="1.23" width="24" height="1.23" fill="white" />
    <rect y="3.69" width="24" height="1.23" fill="white" />
    <rect y="6.15" width="24" height="1.23" fill="white" />
    <rect y="8.62" width="24" height="1.23" fill="white" />
    <rect y="11.08" width="24" height="1.23" fill="white" />
    <rect y="13.54" width="24" height="1.23" fill="white" />
    <rect width="9.6" height="8.62" fill="#3C3B6E" />
    <g fill="white">
      <circle cx="1.2" cy="0.86" r="0.4" />
      <circle cx="2.8" cy="0.86" r="0.4" />
      <circle cx="4.4" cy="0.86" r="0.4" />
      <circle cx="6" cy="0.86" r="0.4" />
      <circle cx="7.6" cy="0.86" r="0.4" />
      <circle cx="2" cy="1.72" r="0.4" />
      <circle cx="3.6" cy="1.72" r="0.4" />
      <circle cx="5.2" cy="1.72" r="0.4" />
      <circle cx="6.8" cy="1.72" r="0.4" />
      <circle cx="1.2" cy="2.58" r="0.4" />
      <circle cx="2.8" cy="2.58" r="0.4" />
      <circle cx="4.4" cy="2.58" r="0.4" />
      <circle cx="6" cy="2.58" r="0.4" />
      <circle cx="7.6" cy="2.58" r="0.4" />
      <circle cx="2" cy="3.44" r="0.4" />
      <circle cx="3.6" cy="3.44" r="0.4" />
      <circle cx="5.2" cy="3.44" r="0.4" />
      <circle cx="6.8" cy="3.44" r="0.4" />
      <circle cx="1.2" cy="4.3" r="0.4" />
      <circle cx="2.8" cy="4.3" r="0.4" />
      <circle cx="4.4" cy="4.3" r="0.4" />
      <circle cx="6" cy="4.3" r="0.4" />
      <circle cx="7.6" cy="4.3" r="0.4" />
      <circle cx="2" cy="5.16" r="0.4" />
      <circle cx="3.6" cy="5.16" r="0.4" />
      <circle cx="5.2" cy="5.16" r="0.4" />
      <circle cx="6.8" cy="5.16" r="0.4" />
      <circle cx="1.2" cy="6.02" r="0.4" />
      <circle cx="2.8" cy="6.02" r="0.4" />
      <circle cx="4.4" cy="6.02" r="0.4" />
      <circle cx="6" cy="6.02" r="0.4" />
      <circle cx="7.6" cy="6.02" r="0.4" />
      <circle cx="2" cy="6.88" r="0.4" />
      <circle cx="3.6" cy="6.88" r="0.4" />
      <circle cx="5.2" cy="6.88" r="0.4" />
      <circle cx="6.8" cy="6.88" r="0.4" />
      <circle cx="1.2" cy="7.74" r="0.4" />
      <circle cx="2.8" cy="7.74" r="0.4" />
      <circle cx="4.4" cy="7.74" r="0.4" />
      <circle cx="6" cy="7.74" r="0.4" />
      <circle cx="7.6" cy="7.74" r="0.4" />
    </g>
  </svg>
);

// Calendar Clock SVG icon (replaces lucide-react dependency)
const CalendarClockIcon = () => (
  <svg
    className="w-10 h-10 text-cyan-400"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 7.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.5" />
    <path d="M16 2v4" />
    <path d="M8 2v4" />
    <path d="M3 10h5" />
    <circle cx="16" cy="16" r="6" />
    <path d="M16 14v2l1 1" />
  </svg>
);

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-teko text-5xl sm:text-6xl font-bold text-white mb-4">
            CONTACT US
          </h1>
          <p className="text-xl text-gray-400">
            Questions? Ready to book? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-[#0f0f18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Phone */}
            <div className="bg-[#12121a] border border-gray-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">
                Call or Text
              </h3>
              <a
                href="tel:623-476-4906"
                className="text-2xl text-cyan-400 font-bold hover:text-cyan-300 transition-colors"
              >
                (623) 476-4906
              </a>
              <p className="text-gray-400 mt-2 text-sm">
                We&apos;ll get back to you ASAP
              </p>
            </div>

            {/* Book Online */}
            <div className="bg-[#12121a] border border-gray-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">
                Book Online
              </h3>
              <a
                href="https://fareharbor.com/embeds/book/alteredcombat/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Reserve Your Date
              </a>
              <p className="text-gray-400 mt-4 text-sm">
                Instant confirmation
              </p>
            </div>
          </div>

          {/* Custom Event Consultation */}
          <div className="mt-8 bg-[#12121a] border border-cyan-500/30 rounded-2xl p-8 text-center">
            <div className="mx-auto mb-4 flex justify-center">
              <CalendarClockIcon />
            </div>
            <h3 className="font-teko text-2xl font-semibold text-white mb-2">
              NEED SOMETHING CUSTOM?
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Planning a convention, multi-day activation, or something that
              doesn&apos;t fit our standard packages? Schedule a free 30-minute
              consultation and let&apos;s build your perfect event.
            </p>
            <a
              href="https://calendly.com/jerryac/event-experience-consultation-30-minutes"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Schedule a Consultation
            </a>
          </div>

          {/* Service Area */}
          <div className="mt-8 bg-[#12121a] border border-gray-800 rounded-2xl p-8">
            <h3 className="font-teko text-2xl font-semibold text-white mb-4 text-center">
              Service Area
            </h3>
            <p className="text-center text-gray-300 text-lg mb-4">
              We serve the entire state of Arizona and beyond!
            </p>
            <p className="text-center text-gray-500 text-sm">
              Based in Buckeye, AZ • Will travel for your event
            </p>
          </div>

          {/* Veteran Badge */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-3">
              <USFlagIcon />
              <span className="text-cyan-400 font-semibold">
                Veteran Owned & Operated Since 2020
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
