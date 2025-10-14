import { HeroArtwork } from "@/components/hero-artwork";
import { ContactDialog } from "@/components/contact-dialog";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { Team } from "@/components/team";
import { Process } from "@/components/process";
import { CtaBand } from "@/components/cta-band";
import { ContactForm } from "@/components/contact-form";
import { Users2, Briefcase, BarChart3 } from "lucide-react";
import { StatCard } from "@/components/stats";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-grow">
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* Left: copy (unchanged) */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-600 mb-5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Senior, battle-tested delivery
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
                We design, build, and scale products that grow revenue
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                Senior team shipping dependable software for media, fintech, and e-commerce.
                Platforms we&apos;ve built handle <span className="font-semibold text-gray-800">100M+ monthly visits</span> and enable <span className="font-semibold text-gray-800">billions in revenue</span>.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a href="#contact" className="inline-block">
                  <span className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M7 2v3M17 2v3M3.5 9h17M5 6h14a2 2 0 0 1 2 2v10.5A2.5 2.5 0 0 1 18.5 21h-13A2.5 2.5 0 0 1 3 18.5V8a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    Book a discovery call
                  </span>
                </a>
                <a href="#work" className="text-blue-700 underline underline-offset-4">See our work</a>
              </div>
              <div className="mt-8 text-sm text-gray-500">
                Trusted by Reverse Media Group, Napier AI, Showcase
              </div>
            </div>

            {/* Right: client-side artwork with fallback */}
            <HeroArtwork />
          </div>

          {/* stats strip (unchanged) */}
          <div className="mt-12">
  <div className="grid gap-4 md:grid-cols-3">
    <StatCard
      icon={<Users2 className="h-6 w-6" aria-hidden="true" />}
      value="11+"
      label="Specialists"
    />
    <StatCard
      icon={<Briefcase className="h-6 w-6" aria-hidden="true" />}
      value="15+"
      label="Years of Experience"
    />
    <StatCard
      icon={<BarChart3 className="h-6 w-6" aria-hidden="true" />}
      value="100M+"
      label="Monthly Visits Scaled"
    />
  </div>
</div>
        </div>
      </section>

      <Services />
      <Process />
      <div id="work">
        {/* <Portfolio /> */}
      </div>
      <Portfolio />
      <Team />
      <CtaBand />
      <section id="contact" className="py-20 bg-gray-50 px-4">
  <div className="container mx-auto">
    <div className="grid md:grid-cols-2 items-start gap-10 lg:gap-12 items-center justify-center">
      {/* Left: illustration only */}
        {/* soft background blob (optional) */}

        <div className="mx-auto w-full max-w-[620px]">
          <Image
            src="/contact.png"
            alt="Filling a contact form illustration"
            width={1200}
            height={900}
            // keep aspect and prevent huge overflow
            className="w-full h-auto object-contain aspect-[16/11] mt-20"
            priority
          />
        </div>
      

      {/* Right: heading + form card */}
      <div className="order-1 md:order-2">
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
          Tell us about your project
        </h3>
        <p className="mt-2 text-gray-600 max-w-prose">
          We reply within 1 business day. Prefer email?{" "}
          <span className="font-medium text-gray-900">
            contact@jamdatasolutions.com
          </span>
        </p>

        <div className="mt-6 rounded-2xl bg-white p-6 md:p-8 ring-1 ring-gray-200 shadow-xl">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}
