import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8">
          Have a project in mind? Want to learn more about our services? <br />
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}