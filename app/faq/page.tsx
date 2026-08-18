import type { Metadata } from "next";
import Link from "next/link";
import Header from "../header";
import Footer from "../footer";
import TimelyButton from "../book/timelyButton";

export const metadata: Metadata = {
  title: "FAQs | Brow & Lash Treatments in Singleton NSW",
  description:
    "Answers to common questions about brow lamination, lash lifts, patch tests, pricing, packages and booking at The Brow Edit in Singleton, NSW.",
};

type FaqItem = {
  question: string;
  answer: string;
  link?: { href: string; label: string };
};

type FaqCategory = {
  title: string;
  items: FaqItem[];
};

const categories: FaqCategory[] = [
  {
    title: "New to The Brow Edit?",
    items: [
      {
        question: "What happens at my first brow appointment?",
        answer:
          "Your first brow appointment includes a full consultation, custom brow mapping to suit your face shape, shaping, and a tint if you choose it - which is why the New Client Brow Sculpt & Tint/Dye is a slightly longer 40-minute appointment ($60) compared to the standard 30-minute return visit ($55).",
        link: { href: "/treatments/brow-styling", label: "See Brow Styling treatments" },
      },
      {
        question: "How do I book my first appointment?",
        answer:
          "You can book online any time through our booking system - choose your treatment, pick a time that suits you, and you're set. If you're not sure which treatment is right for you, send us a message and we're happy to help you choose.",
        link: { href: "/contact", label: "Get in touch" },
      },
    ],
  },
  {
    title: "Brow Treatments",
    items: [
      {
        question: "What's the difference between a brow sculpt and brow lamination?",
        answer:
          "A brow sculpt reshapes your brows through shaping (and tint, if added) using your existing hair growth, while brow lamination resets each hair to sit in one direction for a fuller, brushed-up look that holds for weeks. Many clients combine both in our Brow Lamination, Sculpt & Tint/Dye service for the most complete result.",
        link: { href: "/treatments/brow-styling", label: "See Brow Styling treatments" },
      },
      {
        question: "What is brow lamination and how long does it last?",
        answer:
          "Brow lamination sets your brow hairs in a uniform, upward direction using a gentle solution, creating a fuller, more structured brow look without makeup. Like a lash lift, the effect generally lasts around 4-6 weeks as your hair grows through its natural cycle.",
      },
      {
        question:
          "What's the difference between Brow Lamination and Baby (Mini) Brow Lamination?",
        answer:
          "Baby (Mini) Brow Lamination uses the same technique but with a gentler approach suited to finer or sparser brows, giving lift and structure without an overly dramatic result. Full Brow Lamination suits brows with more hair to work with.",
      },
      {
        question: "Can I get my brows tinted without shaping?",
        answer:
          "Yes - Brow Tint/Dye only is a standalone 20-minute service ($35) for anyone who wants more depth and definition in their existing brow shape without a reshape.",
      },
    ],
  },
  {
    title: "Lash Treatments",
    items: [
      {
        question: "What is a lash lift and how is it different from lash extensions?",
        answer:
          "A lash lift curls and tints your own natural lashes rather than adding synthetic ones, giving you an open, wide-awake look with no daily maintenance - no extensions, no infills, no daily mascara. Results generally last around 6-8 weeks as your natural lashes shed and grow.",
        link: { href: "/treatments/lashes", label: "See Lash treatments" },
      },
      {
        question:
          "What's the difference between a Lash Lift & Tint and the Korean Lash Lift & Tint?",
        answer:
          "Both lift and tint your natural lashes over the same one-hour appointment; the Korean Lash Lift & Tint uses a gentler curl pattern for a softer, more natural everyday finish, while our standard Lash Lift & Tint gives a more noticeable, dramatic lift.",
      },
      {
        question: "Can I just get a lash tint without a lift?",
        answer:
          "Yes - Lash Tint is a standalone 15-minute service ($30) that darkens fair or fading lashes when you don't need a fresh lift.",
      },
      {
        question: "Will a lash lift damage my natural lashes?",
        answer:
          "A lash lift works with your own natural lashes rather than adding weight or extensions, so it shouldn't damage them when it's done correctly and you're not overdue for your next lift. This is also part of why we require a patch test before your first lift - to check your skin and lashes react well to the products used.",
      },
    ],
  },
  {
    title: "Packages & Men's Grooming",
    items: [
      {
        question:
          "Do you offer discounted packages if I want my brows and lashes done together?",
        answer:
          "Yes - we offer two discounted combo packages: Lash Lift & Tint with Brow Sculpt & Tint/Dye ($155, 1 hour 15 minutes), and Lash Lift & Tint with full Brow Lamination, Sculpt & Tint/Dye ($195, 1 hour 30 minutes) - both cheaper than booking each service separately.",
        link: { href: "/treatments/packages", label: "See Packages" },
      },
      {
        question: "Do you do brow grooming for men?",
        answer:
          "Yes - our Men's Brows menu includes a Brow Tidy ($35, 20 minutes) to clean up stray hairs and soften the unibrow, and a Brow Tidy & Tint ($55, 30 minutes) if you'd also like a subtle tint for greying or fair brows. Both are designed to look natural, not obviously groomed.",
        link: { href: "/treatments/mens-brows", label: "See Men's Brows" },
      },
      {
        question: "What add-ons can I book with my appointment?",
        answer:
          "You can add a Hydrating Under Eye Mask, or a quick Upper Lip, Chin or Nostril Wax, to any brow or lash appointment - each is $15 and takes about 5 minutes.",
        link: { href: "/treatments/add-ons", label: "See Add-Ons" },
      },
    ],
  },
  {
    title: "Booking, Policies & Location",
    items: [
      {
        question: "Where is The Brow Edit located?",
        answer:
          "We're located at 84 John St, Singleton NSW 2330, inside Haus of Artistry - we welcome clients from Singleton as well as Muswellbrook, Maitland, Cessnock and across the Hunter Valley.",
        link: { href: "/about", label: "See our location" },
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Cancellations made within 24 hours of your scheduled appointment are charged 50% of the service price, and missed appointments (no-shows) are charged 100%. By booking online, you agree to these terms.",
        link: { href: "/terms-and-conditions", label: "Read our full Terms & Conditions" },
      },
      {
        question: "How can I check your opening hours or available appointment times?",
        answer:
          "The fastest way is to check our online booking calendar, where you can see live appointment availability for any day. You can also call us on 0421 197 333 or send a message through our contact page.",
        link: { href: "/contact", label: "Contact us" },
      },
      {
        question: "Who will be doing my treatment?",
        answer:
          "All treatments at The Brow Edit are performed by founder Tegan, a brow and lash artist with experience across Australia and New Zealand since 2017.",
        link: { href: "/about", label: "Meet Tegan" },
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  ),
};

export default function FAQ() {
  return (
    <div>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="pageContent px-4 py-6 sm:px-6">
        <section className="w-full text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--contentAccent)]">
            FAQ
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Everything new and returning clients ask us about brow and lash
            treatments, patch tests, pricing and booking at The Brow Edit in
            Singleton, NSW.
          </p>
        </section>

        {categories.map((category) => (
          <section key={category.title} className="mt-12 w-full">
            <h2 className="text-2xl font-semibold">{category.title}</h2>
            <div className="mt-5 flex flex-col gap-4">
              {category.items.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-gray-200 bg-[var(--headerbg)]/50 p-5 dark:border-white/10 dark:bg-white/5"
                >
                  <h3 className="text-base font-semibold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {item.answer}
                  </p>
                  {item.link ? (
                    <Link
                      href={item.link.href}
                      className="mt-2 inline-block text-sm text-[var(--contentAccent)] hover:underline"
                    >
                      {item.link.label} &rarr;
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-14 w-full rounded-2xl bg-[var(--headerbg)]/70 p-8 text-center dark:bg-white/5">
          <h2 className="text-2xl font-semibold">Still have a question?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Send us a message and we'll get back to you, or book straight
            online if you're ready to go.
          </p>
          <TimelyButton buttonId="faq-book-button" className="mt-6 flex justify-center" />
          <Link
            href="/contact"
            className="inline-block text-sm text-[var(--contentAccent)] hover:underline"
          >
            Or send us a message
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
}
