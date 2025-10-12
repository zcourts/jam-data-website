
import { Users, Code } from 'lucide-react';

const teamStats = [
  {
    icon: <Users className="w-10 h-10 text-gray-500" />,
    value: '11+',
    label: 'Specialists',
  },
  {
    icon: <Code className="w-10 h-10 text-gray-500" />,
    value: '15+',
    label: 'Years of Experience',
  },
];

export function Team() {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          We are a curated team of passionate and experienced professionals dedicated to delivering high-quality digital products. Our collective expertise allows us to tackle projects of any scale and complexity, ensuring a seamless journey from idea to launch.
        </p>
        <div className="flex justify-center gap-8 md:gap-16">
          {teamStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              {stat.icon}
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
