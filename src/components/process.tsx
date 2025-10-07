import { CheckCircle2, Map, Hammer, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    title: 'Discovery',
    text: 'Goals, constraints, and success metrics in a fast kickoff.',
  },
  {
    icon: <Map className="w-8 h-8 text-blue-600" />,
    title: 'Plan',
    text: 'Roadmap, architecture, and deliverables with timelines and budget.',
  },
  {
    icon: <Hammer className="w-8 h-8 text-blue-600" />,
    title: 'Build',
    text: 'Design + engineering in weekly iterations with demos.',
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    title: 'Launch',
    text: 'Staging, QA, release, and post‑launch support.',
  },
];

export function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How we deliver</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Clear steps, predictable cadence, and transparent communication from day one.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="bg-gray-50 p-6 rounded-lg border">
              <div className="mb-3">{s.icon}</div>
              <h3 className="font-semibold mb-1">{s.title}</h3>
              <p className="text-gray-700 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

