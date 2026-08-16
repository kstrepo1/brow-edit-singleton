import type { Metadata } from "next";
import Link from "next/link";
import Header from "../header";
import Footer from "../footer";
import TimelyButton from "../book/timelyButton";
import { categories, icons, patchTestNote } from "./data";

export const metadata: Metadata = {
  title: "Treatments | Brow & Lash Studio in Singleton NSW",
  description:
    "Brow shaping, lamination, tinting, lash lifts and more at The Brow Edit - a boutique studio in Singleton, NSW serving Muswellbrook, Maitland, Cessnock and the Hunter Valley.",
};

export default function Treatments() {
  return (
    <div>
      <Header />

      <div className="pageContent px-4 py-6 sm:px-6">
        <section className="w-full text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--linkHighlighted)]">
            Treatments
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Brow & Lash Treatments in Singleton, NSW
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Every treatment at The Brow Edit is tailored to your own features -
            from a quick brow tidy to a full lash lift and lamination package.
            Based in Singleton and welcoming clients from Muswellbrook,
            Maitland, Cessnock and across the Hunter Valley.
          </p>
        </section>

        <section className="mt-10 grid w-full gap-4 sm:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/treatments/${category.slug}`}
              className="flex gap-4 rounded-xl border border-gray-200 bg-[var(--headerbg)]/50 p-5 transition hover:border-[var(--linkHighlighted)]/40 hover:bg-[var(--headerbg)]/80 dark:border-white/10 dark:bg-white/5"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/70 text-[var(--linkHighlighted)] dark:bg-white/10">
                {icons[category.icon]}
              </span>
              <div>
                <h2 className="text-base font-semibold text-[var(--linkHighlighted)]">
                  {category.shortName}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {category.tagline}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {category.treatments.length} services &rarr;
                </p>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-6 flex w-full gap-4 rounded-xl border border-[var(--linkHighlighted)]/30 bg-white/60 p-5 dark:bg-white/5">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--headerbg)] text-[var(--linkHighlighted)]">
            {icons[patchTestNote.icon]}
          </span>
          <div>
            <h2 className="text-base font-semibold">
              First time tinting or laminating with us?
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {patchTestNote.description}
            </p>
          </div>
        </section>

        <section className="mt-14 w-full rounded-2xl bg-[var(--headerbg)]/70 p-8 text-center dark:bg-white/5">
          <h2 className="text-2xl font-semibold">Ready to book?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Book online any time, or get in touch if you&apos;d like help
            choosing the right treatment.
          </p>
          <TimelyButton
            buttonId="treatments-book-button"
            className="mt-6 flex justify-center"
          />
          <a
            href="/contact"
            className="inline-block text-sm text-[var(--linkHighlighted)] hover:underline"
          >
            Or send us a message
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
}
