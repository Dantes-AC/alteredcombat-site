import Link from "next/link";
import type { Metadata } from "next";
import { BOOKING_URL, PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas | Altered Combat - Mobile Laser Tag Across Arizona",
  description: "Altered Combat brings mobile laser tag, VR, Nerf wars & water wars to cities across Arizona. Find your area and book your event today!",
  keywords: ["laser tag Arizona", "mobile laser tag Phoenix", "laser tag near me", "party games Arizona", "mobile gaming Arizona"],
};

const regions = [
  {
    name: "West Valley",
    description: "Our home turf. Fast setup, no travel fees from Buckeye.",
    color: "cyan",
    cities: [
      { name: "Buckeye", slug: "buckeye", isHomeBase: true },
      { name: "Goodyear", slug: "goodyear" },
      { name: "Surprise", slug: "surprise" },
      { name: "Peoria", slug: "peoria" },
      { name: "Glendale", slug: "glendale" },
      { name: "Avondale", slug: "avondale" },
      { name: "Litchfield Park", slug: "litchfield-park" },
    ],
  },
  {
    name: "East Valley",
    description: "Gilbert, Chandler, Mesa & beyond. We've got the East covered.",
    color: "green",
    cities: [
      { name: "Gilbert", slug: "gilbert" },
      { name: "Chandler", slug: "chandler" },
      { name: "Mesa", slug: "mesa" },
      { name: "Tempe", slug: "tempe" },
      { name: "Scottsdale", slug: "scottsdale" },
      { name: "Apache Junction", slug: "apache-junction" },
      { name: "Queen Creek", slug: "queen-creek" },
    ],
  },
  {
    name: "Phoenix Metro",
    description: "The heart of the Valley. We bring the action to you.",
    color: "orange",
    cities: [
      { name: "Phoenix", slug: "phoenix" },
      { name: "Paradise Valley", slug: "paradise-valley" },
      { name: "Anthem", slug: "anthem" },
    ],
  },
  {
    name: "Northern Arizona",
    description: "Mountain towns & cooler temps. We'll make the drive.",
    color: "blue",
    cities: [
      { name: "Flagstaff", slug: "flagstaff" },
      { name: "Prescott", slug: "prescott" },
      { name: "Sedona", slug: "sedona" },
    ],
  },
  {
    name: "Southern Arizona",
    description: "Tucson and beyond. Arizona's southern frontier.",
    color: "red",
    cities: [
      { name: "Tucson", slug: "tucson" },
      { name: "Casa Grande", slug: "casa-grande" },
      { name: "Maricopa", slug: "maricopa" },
    ],
  },
];

const colorClasses: Record<string, { bg: string; border: string; text: string; hoverBorder: string }> = {
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", hoverBorder: "hover:border-cyan-500/60" },
  green: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400", hoverBorder: "hover:border-green-500/60" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400", hoverBorder: "hover:border-orange-500/60" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", hoverBorder: "hover:border-blue-500/60" },
  red: { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-400", hoverBorder: "hover:border-red-500/60" },
};

export default function ServiceAreasPage() {

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            WE BRING THE <span className="text-cyan-400">ACTION</span> TO YOU
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Based in Buckeye, serving all of Arizona and beyond. No matter where you are, we'll set up the battlefield at your location.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">Book Your Event</a>
            <a href={PHONE_HREF} className="btn-secondary text-lg px-8 py-4">Call {PHONE_NUMBER}</a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-4">FIND YOUR AREA</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Click your city to learn more about mobile gaming events in your area.</p>
          </div>
          <div className="space-y-12">
            {regions.map((region) => {
              const colors = colorClasses[region.color];
              return (
                <div key={region.name} className={`${colors.bg} border ${colors.border} rounded-2xl p-8`}>
                  <div className="mb-6 text-center">
                    <h3 className={`font-teko text-3xl font-bold ${colors.text} mb-2`}>{region.name}</h3>
                    <p className="text-gray-400">{region.description}</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    {region.cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/service-areas/${city.slug}`}
                        className={`relative bg-[#0a0a0f]/50 border ${colors.border} ${colors.hoverBorder} rounded-lg px-4 py-3 text-center transition-all hover:transform hover:-translate-y-1 flex flex-col items-center justify-center min-w-[120px]`}
                      >
                        <span className="text-white font-medium">{city.name}</span>
                        {city.isHomeBase && (
                          <span className={`text-sm ${colors.text} mt-1`}>Home Base</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#12121a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-teko text-4xl font-bold text-white mb-4">DON'T SEE YOUR CITY?</h2>
          <p className="text-xl text-gray-300 mb-8">We travel anywhere in Arizona and beyond. If you've got a space, we'll bring the games. Give us a call to discuss your event location.</p>
          <a href={PHONE_HREF} className="btn-primary text-lg px-8 py-4">Call {PHONE_NUMBER}</a>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#12121a] to-[#0a0a0f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-6">READY TO PLAY?</h2>
          <p className="text-xl text-gray-300 mb-8">Book online or give us a call. We'll handle the rest.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">Book Now</a>
            <Link href="/games" className="btn-secondary text-lg px-8 py-4">View Our Games</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
