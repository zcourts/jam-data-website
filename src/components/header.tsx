
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <nav className="container mx-auto flex items-center justify-between py-3">
        <Link href="/" className="font-bold text-lg tracking-tight">
          Jam Data Solutions
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          <Link href="#contact">
            <Button className="ml-2">Book a call</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
