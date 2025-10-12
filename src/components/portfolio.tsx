import { Badge } from "@/components/ui/badge";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import React from "react";

type Project = {
  title: string;
  outcomes?: string[];
  techStack: string[];
  link?: string;
  logo?: string;        // /public path, e.g. "/logos/napier.svg"
  accent?: string;      // hex accent for subtle highlights
};

const projects: Project[] = [
  {
    title: "Reverse Media Group",
    outcomes: [
      "100M+ monthly pageviews",
      "Thousands of ads served/sec",
      "$1.5B+ enabled partner revenue",
    ],
    techStack: ["PHP", "Java", "Postgres", "MySQL", "Elasticsearch", "Redis"],
    link: "https://reversemediagroup.com/",
    accent: "#2563eb",
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
    accent: "#0ea5e9",
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
    accent: "#22c55e",
  },
  {
    title: "Deathplan",
    outcomes: [
      "Encrypted vault for life data",
      "Secure beneficiary handover",
      "Subscriptions + payments",
    ],
    techStack: ["Node.js", "Express.js", "React.js", "PostgreSQL", "AWS S3", "AWS EC2", "Stripe", "Libsodium", "Crypto.js"],
    link: "https://mygoodbyegift.com",
    accent: "#ef4444",
  },
  {
    title: "Sippy",
    outcomes: ["Geo search for specialty coffee", "Curated recommendations", "Local discovery UX"],
    techStack: ["Native Android (Java)", "Google Maps", "Checkout"],
    accent: "#a855f7",
  },
  {
    title: "Chaufr",
    outcomes: ["On-demand valet parking", "Realtime driver dispatch", "Payments + maps"],
    techStack: ["Native Android (Java)", "Pusher", "Firebase", "Google Maps", "Checkout"],
    accent: "#f59e0b",
  },
];

export function Portfolio() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Work</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          A few outcomes we’re proud of—from high-scale media platforms to resilient fintech systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              {/* subtle accent blob */}
              <div
                className="pointer-events-none absolute -right-2 -top-2 h-28 w-28 rounded-full blur"
                style={{ background: (p.accent ?? "#3b82f6") + "22" }}
              />
              {/* header: logo + title */}
              <header className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
                  {p.logo ? (
                    <Image src={p.logo} alt={`${p.title} logo`} width={48} height={48} className="object-contain" />
                  ) : (
                    <div className="h-6 w-6 rounded bg-gray-200" />
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">{p.title}</h3>
              </header>

              {/* outcomes */}
              {p.outcomes && (
                <ul className="mb-4 space-y-2 text-gray-700">
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-500" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* tech stack */}
              <div className="mb-5 flex flex-wrap gap-2">
                {p.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-2 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* footer CTA */}
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 text-blue-600 hover:text-blue-700"
                >
                  View case study
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              ) : (
                <span className="mt-auto text-sm text-gray-400">Private engagement</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
