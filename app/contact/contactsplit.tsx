"use client";

export default function ContactSplit() {
  return (
    <div className="mb-4 w-full max-w-2xl rounded-xl border border-gray-200 bg-[var(--headerbg)]/80 p-4 text-center shadow-sm sm:p-6 sm:text-left dark:border-white/10 dark:bg-white/5">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--linkHighlighted)]">
        Contact us
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
        We&apos;d love to hear from you
      </h1>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
        Share your ideas, questions, or booking enquiries and we&apos;ll get back to you as soon as we can.
      </p>
    </div>
  );
}