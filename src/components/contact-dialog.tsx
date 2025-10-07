
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "./contact-form";

export function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Contact Us</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <ContactForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
