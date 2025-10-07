
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-gray-100">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold text-lg">Jam Data Solutions</Link>
        <div>
          <Link href="/" className="mr-4">Home</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
