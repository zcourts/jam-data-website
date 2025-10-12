import { Code, Smartphone, Database, Paintbrush, Box } from "lucide-react";
import React from "react";

/* ---- utils ---- */
function hexToRgba(hex: string, alpha = 0.14) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map(c => c + c).join("") : h, 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/* ---- subtle shapes (circle, ring, triangle) ---- */
function SubtleShapes({ accent = "#2563eb" }: { accent?: string }) {
  const fill = hexToRgba(accent, 0.12);
  const ring = hexToRgba(accent, 0.18);
  return (
    <>
      {/* circle (top-right) */}
      <span
        className="absolute rounded-full"
        style={{
          width: 50, height: 50, top: 8, right: 8, background: fill,
          filter: "blur(0.3px)",
        }}
      />
      {/* ring (left-mid) */}
      <span
        className="absolute rounded-full"
        style={{
          width: 30, height: 30, left: 14, top: 94,
          border: `2px solid ${ring}`,
        }}
      />
      {/* small triangle (bottom-right) */}
      <span
        className="absolute"
        style={{
          bottom: 14, right: 18, width: 0, height: 0,
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderTop: `18px solid ${fill}`,
          transform: "rotate(-10deg)",
        }}
      />
    </>
  );
}

/* ---- card wrapper with proper stacking + alignment ---- */
function ShapeCard({
  children,
  accent = "#2563eb",
}: {
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <div className="h-full">
      <div className="relative isolate h-full overflow-hidden rounded-xl border bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
        {/* background shapes layer (z-0) */}
        <div className="absolute inset-0 z-0">
          <SubtleShapes accent={accent} />
        </div>
        {/* content layer (z-10) */}
        <div className="relative z-10 flex h-full flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---- your data + accent colors ---- */
const services = [
  {
    icon: <Code className="w-12 h-12 text-blue-600" />,
    title: "Web Development",
    benefit: "Ship a reliable MVP in 6–8 weeks, built to scale.",
    details: ["Architecture & APIs", "Performance & SEO", "Scalable infra"],
    accent: "#2563eb",
  },
  {
    icon: <Smartphone className="w-12 h-12 text-green-600" />,
    title: "Mobile App Development",
    benefit: "Engage users on iOS & Android from one codebase.",
    details: ["React Native", "Offline-first UX", "App Store release"],
    accent: "#16a34a",
  },
  {
    icon: <Database className="w-12 h-12 text-yellow-600" />,
    title: "CMS & Commerce",
    benefit: "Empower content teams with editorial speed and conversion.",
    details: ["Headless/WordPress", "Shopify/Custom", "A/B & analytics"],
    accent: "#ca8a04",
  },
  {
    icon: <Paintbrush className="w-12 h-12 text-red-600" />,
    title: "Product & UI Design",
    benefit: "Turn ideas into clear flows, prototypes, and polished UIs.",
    details: ["User research", "Design systems", "Interactive prototypes"],
    accent: "#dc2626",
  },
  {
    icon: <Box className="w-12 h-12 text-purple-600" />,
    title: "3D & Interactive",
    benefit: "Immersive visuals for marketing, product demos, and apps.",
    details: ["Blender", "WebGL/Three.js", "Real-time engines"],
    accent: "#7c3aed",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Services that drive outcomes
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Senior engineers and designers who ship reliably, scale confidently, and focus on measurable impact.
        </p>

        {/* align cards: equal height & clean gutters */}
        <div className="grid grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <ShapeCard key={s.title} accent={s.accent}>
              <div className="mb-4 flex items-center gap-4">
                {s.icon}
                <h3 className="text-xl font-bold">{s.title}</h3>
              </div>

              <p className="mb-4 text-gray-700">{s.benefit}</p>

              {/* push chips to bottom when possible for consistent heights */}
              <div className="mt-auto flex flex-wrap gap-2">
                {s.details.map((d) => (
                  <span
                    key={d}
                    className="rounded-full bg-gray-100 px-2 py-1 text-sm text-gray-700"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </ShapeCard>
          ))}
        </div>
      </div>
    </section>
  );
}
