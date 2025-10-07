import { ContactDialog } from "@/components/contact-dialog";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { Team } from "@/components/team";
import { Process } from "@/components/process";
import { CtaBand } from "@/components/cta-band";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <main className="flex-grow">
      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              We design, build, and scale products that grow revenue
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Senior team shipping dependable software for media, fintech, and e‑commerce. Platforms we&apos;ve built handle <span className="font-semibold text-gray-800">100M+ monthly visits</span> and enable <span className="font-semibold text-gray-800">billions in revenue</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a href="#contact" className="inline-block"><span className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700">Book a discovery call</span></a>
              <a href="#work" className="text-blue-700 underline underline-offset-4">See our work</a>
            </div>
          </div>
          <div className="mt-12 text-sm text-gray-500">
            Trusted by Reverse Media Group, Napier AI, Showcase
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-lg border bg-white"><p className="text-3xl font-bold">11+</p><p className="text-gray-600">Specialists</p></div>
          <div className="p-6 rounded-lg border bg-white"><p className="text-3xl font-bold">15+</p><p className="text-gray-600">Years of Experience</p></div>
          <div className="p-6 rounded-lg border bg-white"><p className="text-3xl font-bold">100M+</p><p className="text-gray-600">Monthly Visits Scaled</p></div>
        </div>
      </section>
      <Services />
      <Process />
      <div id="work">
        <Portfolio />
      </div>
      <Team />
      <CtaBand />
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tell us about your project</h2>
            <p className="text-gray-600 mb-6">We reply within 1 business day. Prefer email? contact@jamdatasolutions.com</p>
          </div>
          <div className="max-w-xl bg-white p-6 rounded-lg shadow">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
