export default function InsuranceSection() {
  return (
    <section className="py-16 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12121a] border border-gray-800 rounded-2xl p-8 md:p-12">
          <div className="flex items-start space-x-4 mb-6">
            <div className="flex-shrink-0 text-cyan-400">
              {/* FileCheck icon */}
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7l-5-5z" />
                <path d="M14 2v4a2 2 0 002 2h4" />
                <path d="M9 15l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h2 className="font-teko text-3xl font-bold text-white mb-2">
                LICENSED & INSURED
              </h2>
              <p className="text-gray-400">
                Book with confidence. We carry comprehensive coverage for your protection.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-white font-medium">
                    $1M/$2M General Liability
                  </p>
                  <p className="text-gray-500 text-sm">
                    Comprehensive coverage for events and venues
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-white font-medium">
                    Inland Marine Insurance
                  </p>
                  <p className="text-gray-500 text-sm">
                    Equipment protection during transport and setup
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-white font-medium">
                    Errors & Omissions Coverage
                  </p>
                  <p className="text-gray-500 text-sm">
                    Professional liability protection
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-white font-medium">
                    Licensed Business
                  </p>
                  <p className="text-gray-500 text-sm">
                    Fully licensed to operate in Arizona
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm text-center">
              Certificate of insurance available upon request for venues and event planners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
