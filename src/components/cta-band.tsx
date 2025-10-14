import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold">Ready to move faster?</h3>
          <p className="text-white/90">We reply within 1 business day. No pressure, just clarity.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact"><Button variant="secondary">Book a discovery call</Button></a>
          <a href="#work" className="underline underline-offset-4">See our work</a>
        </div>
      </div>
    </section>
  );
}

