"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const bookingUrl = "https://bookings.gettimely.com/thebrowedit1/bb/book";

  return (
    <>
      <header>
        <div className="headerBar">
          <div className="logoWrapper">
            <Image
              src="/thebroweditlogo.png"
              width={300}
              height={500}
              alt="The Brow Edit Logo"
              loading="eager"
            />
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

      {bookingModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setBookingModalOpen(false)}
        >
          <div
            className="relative h-[90vh] w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close booking modal"
              onClick={() => setBookingModalOpen(false)}
              className="absolute -left-2 top-2 z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-sm text-[#171717] shadow-sm transition hover:bg-white"
            >
              ×
            </button>
            <iframe
              title="Book an appointment"
              src={bookingUrl}
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
