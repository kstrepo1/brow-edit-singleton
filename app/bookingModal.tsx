"use client";

import { useEffect } from "react";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  businessId?: string;
};

export default function BookingModal({
  isOpen,
  onClose,
  businessId = "thebrowedit1",
}: BookingModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    // Locks background scroll so mobile browsers can't shift the address
    // bar mid-interaction, which otherwise desyncs tap coordinates from
    // the fixed modal's rendered position.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const bookingUrl = `https://bookings.gettimely.com/${businessId}/bb/book`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="bookingModalCard flex w-full max-w-5xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex shrink-0 justify-end border-b border-black/10 p-2">
          <button
            type="button"
            aria-label="Close booking modal"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-xl text-[#171717] transition hover:bg-black/5"
          >
            ×
          </button>
        </div>
        <iframe
          title="Book an appointment"
          src={bookingUrl}
          className="min-h-0 w-full flex-1 border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}
