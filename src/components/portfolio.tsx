import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Reverse Media Group",
    outcomes: [
      "100M+ monthly pageviews",
      "Thousands of ads served/sec",
      "$1.5B+ enabled partner revenue",
    ],
    techStack: ["PHP", "Java", "Postgres", "MySQL", "Elasticsearch", "Redis"],
    link: "https://reversemediagroup.com/",
  },
  {
    title: "Showcase",
    outcomes: [
      "Members-only commerce at global scale",
      "Tiered access and ticketed events",
      "Seamless online + in-store operations",
    ],
    techStack: ["Wordpress", "Laravel", "Redis", "MySQL"],
    link: "https://www.showcase.co/",
  },
  {
    title: "Napier AI",
    outcomes: [
      "Real-time AML at massive scale",
      "Highly resilient, modular platform",
      "End-to-end risk management",
    ],
    techStack: ["Scala", "Java", "Cassandra", "Spark", "Elasticsearch", "Redis"],
    link: "https://www.napier.ai/",
  },
  // {
  //   title: "Prolog",
  //   outcomes: [
  //     "Freight network for global shippers",
  //     "Seamless booking and tracking",
  //     "Admin + partner dashboards",
  //   ],
  //   techStack: ["Node.js", "Express.js", "Angular", "PostgreSQL", "AWS S3", "AWS EC2"],
  //   link: "https://www.prolognet.com",
  // },
  // {
  //   title: "TalentSync",
  //   outcomes: [
  //     "Two-sided marketplace for hiring",
  //     "Automated application workflows",
  //     "Payments + subscriptions",
  //   ],
  //   techStack: ["Node.js", "Express.js", "React.js", "PostgreSQL", "AWS S3", "AWS EC2", "Paypal"],
  //   link: "https://talentsync.agency",
  // },
  // {
  //   title: "OnlyHands",
  //   outcomes: [
  //     "Creator subscriptions and chat",
  //     "Real-time feeds and messaging",
  //     "Trainer marketplace",
  //   ],
  //   techStack: ["Node.js", "Express.js", "React.js", "PostgreSQL", "AWS S3", "AWS EC2", "Socket.io", "GoogleOAuth"],
  //   link: "https://only-hands.net",
  // },
  {
    title: "Loras World",
    outcomes: [
      "Ladder of remote access",
      "Parental guidance and tracking for minors",
      "Subscriptions + payments",
    ],
    techStack: ["Node.js", "Express.js", "React.js", "PostgreSQL", "AWS S3", "AWS EC2", "Stripe", "Libsodium", "Crypto.js"],
    link: "https://lorasworld.com/",
  },
  {
    title: "Clinica San Miguel",
    outcomes: [
      "Multi-location platform with location-aware funnels",
      "Built-in reputation layer (ratings + Google-sourced testimonials)",
      "Operations CMS for a healthcare network (services, forms, careers, bilingual copy, SMS consent)",
    ],
    techStack: ["Node.js", "Express.js", "React.js", "PostgreSQL", "AWS S3", "AWS EC2", "Socket.io", "Sequelize", "JsonWebTokens"],
    link: "https://www.clinicsanmiguel.com/",
  },
  {
    title: "Sippy",
    outcomes: [
      "Geo search for specialty coffee",
      "Curated recommendations",
      "Local discovery UX",
    ],
    techStack: ["Native Android (Java)", "Google Maps", "Checkout"],
  },
  {
    title: "Chaufr",
    outcomes: [
      "On-demand valet parking",
      "Realtime driver dispatch",
      "Payments + maps",
    ],
    techStack: ["Native Android (Java)", "Pusher", "Firebase", "Google Maps", "Checkout"],
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
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              {project.outcomes && (
                <ul className="text-gray-700 mb-4 list-disc ml-5">
                  {project.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              )}
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
                  className="text-blue-600 hover:underline mt-auto"
                >
                  View case study
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
