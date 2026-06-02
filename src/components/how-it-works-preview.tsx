const bookingUrl = "https://fareharbor.com/embeds/book/alteredcombat/?full-items=yes&flow=1501749";

const steps = [
  {
    number: "01",
    title: "Book Online",
    description: "Select your date, time, and package through our easy online booking.",
  },
  {
    number: "02",
    title: "We Set Up (Or You Pick Up)",
    description: "For hosted events, our team arrives and sets up. For rentals, pick up the equipment or we&apos;ll drop it off.",
  },
  {
    number: "03",
    title: "Play!",
    description: "You and your guests enjoy the action. For hosted events, we run the games for you.",
  },
  {
    number: "04",
    title: "We Pack Up (Or You Return)",
    description: "For hosted events, we handle breakdown and cleanup. For rentals, return the equipment or we&apos;ll pick it up.",
  },
];

export default function HowItWorksPreview() {
  return (
    <section className="py-24 bg-[#0f0f18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-4">
            HOW IT WORKS
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From booking to battle in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent -translate-x-4"></div>
              )}
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 border-2 border-cyan-500 mb-4">
                  <span className="font-teko text-2xl font-bold text-cyan-400">{step.number}</span>
                </div>
                <h3 className="font-teko text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
