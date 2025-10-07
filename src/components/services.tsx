
import { Code, Smartphone, Database, Paintbrush, Box } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-12 h-12 text-blue-600" />,
    title: 'Web Development',
    benefit: 'Ship a reliable MVP in 6–8 weeks, built to scale.',
    details: ['Architecture & APIs', 'Performance & SEO', 'Scalable infra'],
  },
  {
    icon: <Smartphone className="w-12 h-12 text-green-600" />,
    title: 'Mobile App Development',
    benefit: 'Engage users on iOS & Android from one codebase.',
    details: ['React Native', 'Offline-first UX', 'App Store release'],
  },
  {
    icon: <Database className="w-12 h-12 text-yellow-600" />,
    title: 'CMS & Commerce',
    benefit: 'Empower content teams with editorial speed and conversion.',
    details: ['Headless/WordPress', 'Shopify/Custom', 'A/B & analytics'],
  },
  {
    icon: <Paintbrush className="w-12 h-12 text-red-600" />,
    title: 'Product & UI Design',
    benefit: 'Turn ideas into clear flows, prototypes, and polished UIs.',
    details: ['User research', 'Design systems', 'Interactive prototypes'],
  },
  {
    icon: <Box className="w-12 h-12 text-purple-600" />,
    title: '3D & Interactive',
    benefit: 'Immersive visuals for marketing, product demos, and apps.',
    details: ['Blender', 'WebGL/Three.js', 'Real-time engines'],
  },
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Services that drive outcomes</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Senior engineers and designers who ship reliably, scale confidently, and focus on measurable impact.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{service.benefit}</p>
              <div className="flex flex-wrap gap-2">
                {service.details.map((d) => (
                  <span key={d} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
