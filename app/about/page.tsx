import type { Metadata } from "next";
import Image from "next/image";
import Header from "../header";
import Footer from "../footer";
import TimelyButton from "../book/timelyButton";
import GoogleMap from "./googleMap";

export const metadata: Metadata = {
  title: "About | The Brow Edit - Singleton",
  description:
    "Meet Tegan Sinclair, the brow and lash artist behind The Brow Edit in Singleton, NSW. Custom brows and lash lifts, tailored to you.",
};

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const values = [
  {
    title: "Tailored to you",
    body: "Every brow is mapped and shaped around your own features, so the result enhances your face rather than overpowering it.",
    // Tapered brow shape with individual hairs above it
    icon: (
      <svg {...iconProps}>
        <path d="M2.8 16.2C6 11 12 7.6 20.5 8.4c-6.5 2.8-12 4.6-17.7 7.8z" />
        <path d="M7 10.6 6 8.4" />
        <path d="M11 9.3 10.4 7" />
        <path d="M15 8.6 14.9 6.3" />
      </svg>
    ),
  },
  {
    title: "Gentle artistry",
    body: "Soft, natural brows and lash lifts, refined over years of training alongside leading artists across Australia and New Zealand.",
    // Eye with lifted lashes
    icon: (
      <svg {...iconProps}>
        <path d="M2.6 13.6S6.2 8.6 12 8.6s9.4 5 9.4 5" />
        <path d="M2.6 13.6S6.2 18 12 18s9.4-4.4 9.4-4.4" />
        <circle cx="12" cy="13.4" r="2.4" />
        <path d="M6.3 8.7 5.1 6.6" />
        <path d="M12 7.1V4.7" />
        <path d="m17.7 8.7 1.2-2.1" />
      </svg>
    ),
  },
  {
    title: "An inclusive space",
    body: "Everyone is welcome here. The goal is simple: that you leave feeling confident, comfortable and effortlessly yourself.",
    // Heart
    icon: (
      <svg {...iconProps}>
        <path d="M12 20.4c-1.4-1-7.6-5-7.6-9.8a4.3 4.3 0 0 1 7.6-2.8 4.3 4.3 0 0 1 7.6 2.8c0 4.8-6.2 8.8-7.6 9.8z" />
      </svg>
    ),
  },
];

const facts = [
  { label: "Brows since", value: "2017" },
  { label: "Trained across", value: "AU & NZ" },
  { label: "Based in", value: "Singleton" },
];

export default function About() {
  return (
    <div>
      <Header />

      <div className="pageContent px-4 py-6 sm:px-6">
        {/* Intro */}
        <section className="w-full text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--contentAccent)]">
            About us
          </p>
          <h1 className="mt-3 block text-3xl font-semibold sm:text-4xl">
            Custom brows &amp; lash lifts, made for you
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            The Brow Edit is a small studio in Singleton, NSW, tucked inside the
            beautiful Haus of Artistry.
          </p>
        </section>

        {/* Founder */}
        <section className="mt-12 flex w-full flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10">
          <div className="flex flex-col items-center text-center sm:w-[200px] sm:shrink-0">
            <Image
              src="/tegan.jpg"
              height={200}
              width={200}
              alt="Tegan Sinclair, founder of The Brow Edit"
              className="h-[160px] w-[160px] rounded-full object-cover sm:h-[200px] sm:w-[200px]"
            />
            <div className="mt-4 font-semibold">Tegan Sinclair</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Brow &amp; Lash Artist
            </div>
          </div>

          <div className="flex-1 text-sm leading-relaxed sm:text-base">
            <p>
              Hi, I&apos;m Tegan. Since 2017, I&apos;ve dedicated my craft to
              creating soft, natural brows and lash lifts designed to enhance
              your unique features rather than overpower them. After years of
              refining my techniques alongside leading artists across Australia
              and New Zealand, I&apos;ve brought that experience home to
              Singleton, NSW.
            </p>
            <p className="mt-4">
              Whether you&apos;re after effortless everyday definition or a
              subtle lift, my focus is always on gentle, tailored artistry that
              leaves you feeling effortlessly confident.
            </p>

            <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-black/10 pt-5 dark:border-white/10">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-[var(--contentAccent)]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Feature image */}
        <section className="mt-14 w-full">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image
              src="/bus-cards.jpeg"
              alt="The Brow Edit business cards resting in a gold holder on a textured stone tray"
              fill
              sizes="(max-width: 800px) 100vw, 800px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-base font-medium text-white sm:text-lg">
              A calm, considered studio &mdash; from the first hello to the
              finished look.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mt-14 w-full">
          <h2 className="text-center text-2xl font-semibold">
            What to expect
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-gray-200 bg-[var(--headerbg)]/60 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-[var(--contentAccent)] dark:bg-white/10">
                  {value.icon}
                </span>
                <h3 className="mt-3 text-base font-semibold text-[var(--contentAccent)]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="mt-14 w-full">
          <h2 className="text-center text-2xl font-semibold">
            Visit the studio
          </h2>
          <div className="mt-6 flex w-full flex-col gap-6 md:flex-row md:items-center">
            <div className="w-full flex-1">
              <GoogleMap />
            </div>

            <div className="w-full flex-1 text-sm leading-relaxed">
              <p className="text-gray-700 dark:text-gray-300">
                You&apos;ll find The Brow Edit inside Haus of Artistry, in the
                centre of Singleton.
              </p>

              <address className="mt-4 not-italic">
                <div className="font-semibold">The Brow Edit Studio</div>
                <div className="mt-1 text-gray-700 dark:text-gray-300">
                  84 John St
                  <br />
                  Singleton NSW 2330
                </div>
                <a
                  href="tel:0421197333"
                  className="mt-2 inline-block text-[var(--contentAccent)] hover:underline"
                >
                  0421 197 333
                </a>
              </address>

              <a
                href="https://www.google.com/maps/dir//The+Brow+Edit,+84+John+St,+Singleton+NSW+2330/@-37.7950689,144.8841253,2711m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x6b0cb172a7519155:0x3932ac5aef96eb4!2m2!1d151.1657893!2d-32.5663148"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[var(--contentAccent)] hover:underline"
              >
                Get directions
              </a>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="mt-14 w-full rounded-2xl bg-[var(--headerbg)]/70 p-8 text-center dark:bg-white/5">
          <h2 className="text-2xl font-semibold">Ready when you are</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Book online any time, or get in touch if you&apos;d like help
            choosing the right treatment.
          </p>
          <TimelyButton
            buttonId="about-book-button"
            className="mt-6 flex justify-center"
          />
          <a
            href="/contact"
            className="inline-block text-sm text-[var(--contentAccent)] hover:underline"
          >
            Or send us a message
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
}
