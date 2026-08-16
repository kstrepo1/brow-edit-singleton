import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../header";
import Footer from "../../footer";
import TimelyButton from "../../book/timelyButton";
import { categories, getCategory, icons, patchTestNote } from "../data";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return {
    title: category.metaTitle,
    description: category.metaDescription,
  };
}

const needsPatchTest = new Set(["brow-styling", "lashes", "packages", "mens-brows"]);

export default async function TreatmentCategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: category.name,
    serviceType: category.name,
    provider: {
      "@type": "LocalBusiness",
      name: "The Brow Edit",
      address: {
        "@type": "PostalAddress",
        streetAddress: "84 John St",
        addressLocality: "Singleton",
        addressRegion: "NSW",
        postalCode: "2330",
        addressCountry: "AU",
      },
    },
    areaServed: [
      "Singleton NSW",
      "Muswellbrook NSW",
      "Maitland NSW",
      "Cessnock NSW",
      "Hunter Valley NSW",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: category.name,
      itemListElement: category.treatments.map((treatment) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: treatment.name,
          description: treatment.description,
        },
        price: treatment.price?.replace("$", ""),
        priceCurrency: treatment.price ? "AUD" : undefined,
      })),
    },
  };

  return (
    <div>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <div className="pageContent px-4 py-6 sm:px-6">
        <nav aria-label="Breadcrumb" className="w-full text-sm text-gray-500">
          <Link href="/treatments" className="hover:underline">
            Treatments
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--linkHighlighted)]">{category.shortName}</span>
        </nav>

        <section className="mt-4 w-full text-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--headerbg)] text-[var(--linkHighlighted)]">
            {icons[category.icon]}
          </span>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
            {category.name === "Add Ons" ? "Brow & Lash Add-Ons" : category.name}
          </h1>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-[var(--linkHighlighted)]">
            {category.tagline}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base">
            {category.intro}
          </p>
        </section>

        <section className="mt-10 grid w-full gap-4 sm:grid-cols-2">
          {category.treatments.map((treatment) => (
            <div
              key={treatment.name}
              className="flex gap-4 rounded-xl border border-gray-200 bg-[var(--headerbg)]/50 p-5 dark:border-white/10 dark:bg-white/5"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/70 text-[var(--linkHighlighted)] dark:bg-white/10">
                {icons[treatment.icon]}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h2 className="text-base font-semibold">{treatment.name}</h2>
                  {treatment.price ? (
                    <span className="whitespace-nowrap text-sm font-semibold text-[var(--linkHighlighted)]">
                      {treatment.price}
                    </span>
                  ) : null}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {treatment.duration}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {treatment.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {needsPatchTest.has(category.slug) ? (
          <section className="mt-6 flex w-full gap-4 rounded-xl border border-[var(--linkHighlighted)]/30 bg-white/60 p-5 dark:bg-white/5">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--headerbg)] text-[var(--linkHighlighted)]">
              {icons[patchTestNote.icon]}
            </span>
            <div>
              <h2 className="text-base font-semibold">
                New to tinting or lamination? Book a patch test first
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {patchTestNote.description}
              </p>
            </div>
          </section>
        ) : null}

        <section className="mt-14 w-full rounded-2xl bg-[var(--headerbg)]/70 p-8 text-center dark:bg-white/5">
          <h2 className="text-2xl font-semibold">Ready to book?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Book online in a few taps, or explore our other treatments below.
          </p>
          <TimelyButton
            buttonId={`${category.slug}-book-button`}
            className="mt-6 flex justify-center"
          />
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            {categories
              .filter((other) => other.slug !== category.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/treatments/${other.slug}`}
                  className="text-[var(--linkHighlighted)] hover:underline"
                >
                  {other.shortName}
                </Link>
              ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
