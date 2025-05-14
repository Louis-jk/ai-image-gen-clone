import Link from "next/link";
import { NavLinks } from "@/app/constant/constant";
export default function Header() {
  return (
    <header className="w-full p-4 border-b border-gray-800">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">AI Image Generator</h1>
        <div className="flex items-center gap-4">
          {NavLinks.map((link) => (
            <Link key={link.id} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}