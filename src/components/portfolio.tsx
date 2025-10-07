import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Reverse Media Group",
    description: "We partnered with this large-scale online publisher to architect and scale their complex digital ecosystem. Our focus was on building a robust infrastructure capable of handling over 100 million monthly pageviews and a high-frequency ad-serving platform that delivers thousands of ads per second, contributing to over $1.5 billion in revenue for their partners.",
    techStack: ["PHP", "Java", "Postgres", "MySQL", "Elasticsearch", "Redis"],
    link: "https://reversemediagroup.com/",
  },
  {
    title: "Showcase",
    description: "We developed a sophisticated, members-only e-commerce platform for Showcase, a global leader in luxury private sales. The platform is engineered to support both online and in-store events worldwide, managing a complex system of tiered memberships, ticketed access, and exclusive sales events. Our solution provides a seamless and exclusive shopping experience for members while empowering Showcase's mission of promoting sustainable fashion.",
    techStack: ["Wordpress", "Laravel", "Redis", "MySQL"],
    link: "https://www.showcase.co/about-showcase/",
  },
  {
    title: "Napier AI",
    description: "We partnered with Napier AI to engineer their next-generation, AI-powered Anti-Money Laundering (AML) platform. Our work was crucial in building a highly scalable and resilient system capable of processing vast amounts of data in real-time. The platform provides end-to-end risk management and compliance solutions, empowering financial institutions worldwide to effectively detect and combat financial crime.",
    techStack: ["Scala", "Java", "Cassandra", "Spark", "Elasticsearch", "Redis"],
    link: "https://www.napier.ai/",
  },
  {
    title: "Prolog",
    description: "A Freight Management and Logistics Network platform where international cargo shippers can connect and have a seamless fright management.",
    techStack: ["Node.js", "Express.js", "Angular", "PostgreSQL", "AWS S3", "AWS EC2"],
    link: "https://www.prolognet.com",
  },
  {
    title: "TalentSync",
    description: "A platform where job seekers could submit resumes and employers could post job openings and evaluate candidates based on resume submissions.",
    techStack: ["Node.js", "Express.js", "React.js", "PostgreSQL", "AWS S3", "AWS EC2", "Paypal"],
    link: "https://talentsync.agency",
  },
  {
    title: "OnlyHands",
    description: "Full-stack fitness-focused social media platform that enables users to share progress, connect with Trainers, and access premium content via a subscription-based model.",
    techStack: ["Node.js", "Express.js", "React.js", "PostgreSQL", "AWS S3", "AWS EC2", "Socket.io", "GoogleOAuth"],
    link: "https://only-hands.net",
  },
  {
    title: "Deathplan",
    description: "Privacy-first platform designed to help users securely store and pass on critical life information such as insurance details, beneficiary designations, and personal messages after their death.",
    techStack: ["Node.js", "Express.js", "React.js", "PostgreSQL", "AWS S3", "AWS EC2", "Stripe", "Libsodium", "Crypto.js"],
    link: "https://mygoodbyegift.com",
  },
  {
    title: "Sippy",
    description: "A coffee discovery application. Developed for coffee lovers, this app helps you find the best speciality coffee in Dubai.",
    techStack: ["Native Android (Java)", "Google Maps", "Checkout"],
  },
  {
    title: "Chaufr",
    description: "A revolutionary application for large cities where finding parking may be a huge hassle. Using Chaufr just call a chauffeur who will take your car to their parking.",
    techStack: [[ "Pusher", "Firebase", "Google Maps", "Checkout"]],
  },
];

export function Portfolio() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-auto"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}