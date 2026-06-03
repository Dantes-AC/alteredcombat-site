import { Umbrella, Check } from 'lucide-react';

const coverageItems = [
  {
    title: '$1M/$2M General Liability',
    description: 'Comprehensive coverage for events and venues',
  },
  {
    title: 'Inland Marine Insurance',
    description: 'Equipment protection during transport and setup',
  },
  {
    title: 'Errors & Omissions Coverage',
    description: 'Professional liability protection',
  },
  {
    title: 'Licensed Business',
    description: 'Fully licensed to operate in Arizona',
  },
];

export default function InsuranceSection() {
  return (
    <section className="py-16 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12121a] border border-gray-800 rounded-2xl p-8 md:p-12">

          {/* Header */}
          <div className="mb-6">
            <div className="flex flex-row items-center gap-4">
              <Umbrella className="w-12 h-12 text-cyan-400 shrink-0" />
              <h2 className="font-teko text-4xl font-bold text-white leading-none">
                LICENSED & INSURED
              </h2>
            </div>
            <p className="text-gray-400 mt-1 ml-16">
              Book with confidence. We carry comprehensive coverage for your protection.
            </p>
          </div>

          {/* Coverage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coverageItems.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-[#0a0a0f]/50 border border-gray-800/50"
              >
                <div className="flex flex-row items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
                  <p className="text-white font-medium leading-none">{item.title}</p>
                </div>
                <p className="text-gray-500 text-sm mt-1 ml-7">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Footer note */}
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
