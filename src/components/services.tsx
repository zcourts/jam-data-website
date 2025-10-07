
import { Code, Smartphone, Database, Paintbrush, Box } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-12 h-12 text-blue-500" />,
    title: 'Web Development',
    tech: ['React.js', 'Next.js', 'Node.js', 'Angular', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: <Smartphone className="w-12 h-12 text-green-500" />,
    title: 'Mobile App Development',
    tech: ['React Native', 'Java', 'Kotlin', 'Firebase', 'AWS'],
  },
  {
    icon: <Database className="w-12 h-12 text-yellow-500" />,
    title: 'CMS Development',
    tech: ['Wordpress', 'Shopify', 'Webflow', 'Joomla'],
  },
  {
    icon: <Paintbrush className="w-12 h-12 text-red-500" />,
    title: 'Graphic Design',
    tech: ['Figma', 'Photoshop', 'Adobe Illustrator'],
  },
  {
    icon: <Box className="w-12 h-12 text-purple-500" />,
    title: '3D Design',
    tech: ['Blender', 'Unreal Engine'],
  },
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {service.tech.map((t) => (
                  <span key={t} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                    {t}
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
