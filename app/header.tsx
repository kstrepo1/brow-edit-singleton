"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book" },
  { href: "/contact", label: "Contact" },
  { href: "/treatments", label: "Treatments" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <main>
      <div className="headerBar">
        <Image
          src="/thebroweditlogo.png"
          width={300}
          height={500}
          alt="The Brow Edit Logo"
          loading="eager"
        />
        <div className="headerLinks">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <a
                key={link.href}
                className={`headerLink${isActive ? " activeLink" : ""}`}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
