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
          <div style={{marginBottom:'24px'}}>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'16px'}}>
              <Umbrella style={{width:'48px', height:'48px', color:'#22d3ee', flexShrink:0}} />
              <h2 className="font-teko text-4xl font-bold text-white" style={{margin:0, lineHeight:1}}>
                LICENSED & INSURED
              </h2>
            </div>
            <p style={{margin:0, marginTop:'4px', marginLeft:'64px', color:'#9ca3af'}}>
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
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'10px'}}>
                  <Check style={{width:'18px', height:'18px', color:'#22d3ee', flexShrink:0}} />
                  <p style={{margin:0, color:'white', fontWeight:500, lineHeight:1}}>{item.title}</p>
                </div>
                <p style={{margin:0, marginTop:'4px', marginLeft:'28px', color:'#6b7280', fontSize:'0.875rem'}}>{item.description}</p>
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
