"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import BookingModal from "./bookingModal";

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
  const [open, setOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <>
      <header>
        <div className="headerBar">
          <div className="logoWrapper"><a href="/">
            <Image
              src="/thebroweditlogo.png"
              width={300}
              height={500}
              alt="The Brow Edit Logo"
              loading="eager"
            /></a>
          </div>

          <button
            className="hamburger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M6 6L18 18" stroke="#171717" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 18L18 6" stroke="#171717" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3 6H21" stroke="#171717" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 12H21" stroke="#171717" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 18H21" stroke="#171717" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>

          <nav className={`headerLinks ${open ? "open" : ""}`}>
            {links.map((link) => {
              const isActive = pathname === link.href;

              if (link.label === "Book") {
                return isActive ? (
                  <span
                    key={link.href}
                    className="headerLink activeLink"
                    aria-current="page"
                    onClick={() => {
                      sendGTMEvent({ event: "buttonClicked", value: "header-book-button" });
                      setOpen(false);
                      setBookingModalOpen(true);
                    }}
                  >
                    {link.label}
                  </span>
                ) : (
                  <button
                    key={link.href}
                    type="button"
                    className="headerLink headerA"
                    onClick={() => {
                      sendGTMEvent({ event: "buttonClicked", value: "header-book-button" });
                      setOpen(false);
                      setBookingModalOpen(true);
                    }}
                  >
                    {link.label}
                  </button>
                );
              }

              return isActive ? (
                <span
                  key={link.href}
                  className="headerLink activeLink"
                  aria-current="page"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </span>
              ) : (
                <a
                  key={link.href}
                  className="headerLink headerA"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
}
