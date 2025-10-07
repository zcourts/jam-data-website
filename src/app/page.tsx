import { ContactDialog } from "@/components/contact-dialog";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { Team } from "@/components/team";

export default function Home() {
  return (
    <main className="flex-grow">
      <section className="py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Your partner in bringing ideas to life</h1>
          <p className="text-lg text-gray-600 mb-8">
            From concept to code, we&apos;re with you every step of the way.
          </p>
          <ContactDialog />
        </div>
      </section>
      <Services />
      <Portfolio />
      <Team />
    </main>
  );
}