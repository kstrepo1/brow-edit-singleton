"use client";

import { useState } from "react";

type TimelyButtonProps = {
  buttonId?: string;
  businessId?: string;
  style?: "dark" | "light";
  className?: string;
};

export default function TimelyButton({
  buttonId = "timely-book-button",
  businessId = "thebrowedit1",
  style = "dark",
  className = "flex justify-center py-6",
}: TimelyButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const bookingUrl = `https://bookings.gettimely.com/${businessId}/bb/book`;

  return (
    <>
      <div id={buttonId} className={className}>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={
            style === "dark"
              ? "inline-flex items-center justify-center rounded-md bg-[#171717] px-6 py-3 text-base font-medium tracking-wide text-white transition-colors duration-200 hover:bg-[#2b2b2b]"
              : "inline-flex items-center justify-center rounded-md border border-[#171717] bg-white px-6 py-3 text-base font-medium tracking-wide text-[#171717] transition-colors duration-200 hover:bg-[#f6f1eb]"
          }
        >
          Book now
        </button>
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative h-[90vh] w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close booking modal"
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl text-[#171717] shadow-sm transition hover:bg-white"
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