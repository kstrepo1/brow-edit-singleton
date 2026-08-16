"use client";

import { useState } from "react";
import BookingModal from "../bookingModal";

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

  return (
    <>
      <div id={buttonId} className={className}>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={
            style === "dark"
              ? "bookButton inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium tracking-wide transition-colors duration-200"
              : "inline-flex items-center justify-center rounded-md border border-[#171717] bg-white px-6 py-3 text-base font-medium tracking-wide text-[#171717] transition-colors duration-200 hover:bg-[#f6f1eb]"
          }
        >
          Book now
        </button>
      </div>

      <BookingModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        businessId={businessId}
      />
    </>
  );
}