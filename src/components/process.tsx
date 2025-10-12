import { CheckCircle2, Map, Hammer, Rocket } from "lucide-react";

const steps = [
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    title: "Discovery",
    hint: "1–3 days",
    text: "Goals, constraints, and success metrics in a fast kickoff.",
  },
  {
    icon: <Map className="w-8 h-8 text-blue-600" />,
    title: "Plan",
    hint: "3–5 days",
    text: "Roadmap, architecture, and deliverables with timelines and budget.",
  },
  {
    icon: <Hammer className="w-8 h-8 text-blue-600" />,
    title: "Build",
    hint: "1–8+ weeks",
    text: "Design + engineering in weekly iterations with demos.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    title: "Launch",
    hint: "2–5 days",
    text: "Staging, QA, release, and post-launch support.",
  },
];

export function Process() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How we deliver
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Clear steps, predictable cadence, and transparent communication from
          day one.
        </p>

        <div className="relative">
          {/* connector line for desktop */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-blue-100" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="relative bg-gray-50 p-8 rounded-xl border shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center"
              >
                {/* Connector dots for desktop */}
                <div className="hidden md:block absolute -top-[17px] left-1/2 transform -translate-x-1/2">
                  <div className="h-4 w-4 rounded-full bg-white border-2 border-blue-500"></div>
                </div>

                <div className="mb-4 bg-blue-50 p-4 rounded-full">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{s.hint}</p>
                <p className="text-sm text-gray-700">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
