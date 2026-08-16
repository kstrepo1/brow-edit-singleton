const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export const icons = {
  sculpt: (
    <svg {...iconProps}>
      <path d="M4.5 6h15" />
      <path d="M6 6v9" />
      <path d="M9.4 6v11" />
      <path d="M12.8 6v9" />
      <path d="M16.2 6v11" />
      <path d="M19.5 6v9" />
    </svg>
  ),
  tint: (
    <svg {...iconProps}>
      <path d="M12 3c3 4 5 7.2 5 10a5 5 0 0 1-10 0c0-2.8 2-6 5-10z" />
    </svg>
  ),
  sculptTint: (
    <svg {...iconProps}>
      <path d="M3.5 6h11.5" />
      <path d="M5 6v8" />
      <path d="M8 6v9.5" />
      <path d="M11 6v8" />
      <path d="M14 6v9.5" />
      <path d="M18.4 4.4c1.5 1.9 2.4 3.3 2.4 4.7a2.4 2.4 0 0 1-4.8 0c0-1.4.9-2.8 2.4-4.7z" />
    </svg>
  ),
  lamination: (
    <svg {...iconProps}>
      <path d="M2.8 15.4c2.7-5 7.2-7.6 12.8-6.8" />
      <path d="M6 12.6c.5-1 1.6-1 2.1 0" />
      <path d="M9.8 10.9c.5-1 1.6-1 2.1 0" />
      <path d="M13.6 9.9c.5-1 1.6-1 2.1 0" />
    </svg>
  ),
  laminationTint: (
    <svg {...iconProps}>
      <path d="M2.4 15.8c2.4-4.6 6.5-7 11.4-6.3" />
      <path d="M5.4 13.2c.45-.9 1.4-.9 1.9 0" />
      <path d="M8.8 11.6c.45-.9 1.4-.9 1.9 0" />
      <path d="M17.5 5c1.4 1.8 2.3 3.1 2.3 4.5a2.3 2.3 0 0 1-4.6 0c0-1.4.9-2.7 2.3-4.5z" />
    </svg>
  ),
  lashLift: (
    <svg {...iconProps}>
      <path d="M4 15.3c2.2-6 8-10 15-9" />
      <path d="M9.2 12.4 8.3 9.9" />
      <path d="M13.2 10.6 12.6 8" />
      <path d="M17.2 9.6 17 7" />
    </svg>
  ),
  lashLiftPlus: (
    <svg {...iconProps}>
      <path d="M3.5 15.3c2.2-6 8-10 14-9" />
      <path d="M8.5 12.4 7.6 9.9" />
      <path d="M12.4 10.6 11.8 8" />
      <path d="m19.5 3.8.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z" />
    </svg>
  ),
  lashTint: (
    <svg {...iconProps}>
      <path d="M4.5 14.6c2-4.6 6.2-7.4 10.8-6.8" />
      <path d="M9 11.9 8.2 9.7" />
      <path d="M17.6 5.6c1.3 1.6 2.1 2.9 2.1 4.1a2.1 2.1 0 0 1-4.2 0c0-1.2.8-2.5 2.1-4.1z" />
    </svg>
  ),
  package: (
    <svg {...iconProps}>
      <rect x="4" y="9.5" width="16" height="10.5" rx="1.4" />
      <path d="M4 13.5h16" />
      <path d="M12 9.5v10.5" />
      <path d="M8.6 9.5c-1.5 0-2.6-.9-2.6-2.1 0-1.1 1-1.7 2-1.3 1.5.6 2.9 1.9 4 3.4" />
      <path d="M15.4 9.5c1.5 0 2.6-.9 2.6-2.1 0-1.1-1-1.7-2-1.3-1.5.6-2.9 1.9-4 3.4" />
    </svg>
  ),
  browTidy: (
    <svg {...iconProps}>
      <circle cx="6" cy="7.5" r="2" />
      <circle cx="6" cy="16.5" r="2" />
      <path d="M7.5 8.9 19 19" />
      <path d="M7.5 15.1 19 5" />
    </svg>
  ),
  browTidyTint: (
    <svg {...iconProps}>
      <circle cx="5.5" cy="7" r="1.8" />
      <circle cx="5.5" cy="15" r="1.8" />
      <path d="M7 8.3 15.5 15.5" />
      <path d="M7 13.7 15.5 6.5" />
      <path d="M18.6 5.4c1.2 1.5 1.9 2.7 1.9 3.8a1.9 1.9 0 0 1-3.8 0c0-1.1.7-2.3 1.9-3.8z" />
    </svg>
  ),
  eyeMask: (
    <svg {...iconProps}>
      <path d="M4 15.5c2.5 2 5.2 3 8 3s5.5-1 8-3" />
      <path d="M8.3 8.6c.9 1.1 1.4 1.9 1.4 2.7a1.4 1.4 0 0 1-2.8 0c0-.8.5-1.6 1.4-2.7z" />
      <path d="M12 6.6c.9 1.1 1.4 1.9 1.4 2.7a1.4 1.4 0 0 1-2.8 0c0-.8.5-1.6 1.4-2.7z" />
      <path d="M15.7 8.6c.9 1.1 1.4 1.9 1.4 2.7a1.4 1.4 0 0 1-2.8 0c0-.8.5-1.6 1.4-2.7z" />
    </svg>
  ),
  wax: (
    <svg {...iconProps}>
      <rect x="5" y="9.5" width="14" height="5" rx="1.4" />
      <path d="M12 14.5v2.6" />
      <path d="M12 17.1c-1 0-1.7.75-1.7 1.55 0 .8.7 1.35 1.7 1.35s1.7-.55 1.7-1.35c0-.8-.7-1.55-1.7-1.55z" />
    </svg>
  ),
  patchTest: (
    <svg {...iconProps}>
      <path d="M12 3.2 19 6v6c0 5-3.6 8-7 9-3.4-1-7-4-7-9V6z" />
      <path d="M9 12.4l2.1 2.1L15.4 10" />
    </svg>
  ),
} as const;

export type IconKey = keyof typeof icons;

export type Treatment = {
  name: string;
  duration: string;
  price?: string;
  description: string;
  icon: IconKey;
};

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  icon: IconKey;
  treatments: Treatment[];
};

export const patchTestNote: Treatment = {
  name: "Patch Test",
  duration: "15 mins",
  description:
    "A quick patch test is required at least 24-48 hours before your first brow tint, lash tint or brow lamination appointment, and again if it's been a while between visits. It's a simple safety step so your appointment can go ahead smoothly.",
  icon: "patchTest",
};

export const categories: Category[] = [
  {
    slug: "brow-styling",
    name: "Brow Styling",
    shortName: "Brow Styling",
    tagline: "Shaping, tinting and lamination for soft, natural brows",
    metaTitle: "Brow Shaping, Tinting & Lamination | Singleton NSW",
    metaDescription:
      "Custom brow sculpting, tinting and lamination at The Brow Edit in Singleton, NSW - serving Muswellbrook, Maitland, Cessnock and the Hunter Valley. Book online today.",
    intro:
      "Looking for eyebrow shaping near Singleton, NSW? At The Brow Edit, every brow appointment starts with mapping your natural shape and face, then sculpting, tinting or laminating to suit it - never a one-size-fits-all template. We welcome clients travelling in from Muswellbrook, Maitland, Cessnock, Branxton and across the Hunter Valley for soft, low-maintenance brows that hold their shape between visits.",
    icon: "sculptTint",
    treatments: [
      {
        name: "Brow Sculpt & Tint/Dye (New Client)",
        duration: "40 mins",
        price: "$60",
        description:
          "A longer first appointment for new clients, covering a full consultation, custom brow mapping, shaping and a tint to match.",
        icon: "sculptTint",
      },
      {
        name: "Brow Sculpt & Tint/Dye",
        duration: "30 mins",
        price: "$55",
        description:
          "The classic combo for returning clients - precision shaping paired with a tint for definition that lasts weeks, not days.",
        icon: "sculptTint",
      },
      {
        name: "Brow Lamination, Sculpt & Tint/Dye",
        duration: "1 hour",
        price: "$100",
        description:
          "Our most complete brow service: lamination for a fuller, brushed-up finish, plus shaping and tint for a polished, fluffy brow that holds for weeks.",
        icon: "laminationTint",
      },
      {
        name: "Brow Lamination (no tint)",
        duration: "45 mins",
        price: "$80",
        description:
          "Brow lamination sets each hair in place for a fuller, brushed-up look - ideal if your natural colour already has plenty of depth.",
        icon: "lamination",
      },
      {
        name: "Baby (Mini) Brow Lamination",
        duration: "45 mins",
        price: "$80",
        description:
          "A gentler lamination for finer or sparser brows, giving lift and structure without an overly dramatic result.",
        icon: "lamination",
      },
      {
        name: "Brow Sculpt (no tint)",
        duration: "20 mins",
        price: "$35",
        description:
          "A quick tidy-up and reshape to keep your brows sharp between fuller appointments - no tint required.",
        icon: "sculpt",
      },
      {
        name: "Brow Tint/Dye only",
        duration: "20 mins",
        price: "$35",
        description:
          "A standalone tint to add depth and definition to your existing brow shape - a fast refresh on a busy day.",
        icon: "tint",
      },
    ],
  },
  {
    slug: "lashes",
    name: "Lashes",
    shortName: "Lashes",
    tagline: "Lash lifts and tinting for a lifted, wide-awake look",
    metaTitle: "Lash Lift & Tint Singleton NSW | The Brow Edit",
    metaDescription:
      "Soft, lifted lashes without extensions. Lash lift and tint services at The Brow Edit in Singleton, NSW, for clients from Muswellbrook, Maitland and Cessnock.",
    intro:
      "A lash lift and tint curls and darkens your own natural lashes for a wide-awake look that lasts through showers, swimming and sleep - no extensions, no daily mascara. Based in Singleton, NSW, The Brow Edit welcomes clients from Maitland, Cessnock, Muswellbrook and across the Hunter Valley searching for a low-maintenance lash lift near them.",
    icon: "lashLift",
    treatments: [
      {
        name: "Lash Lift & Tint",
        duration: "1 hour",
        price: "$115",
        description:
          "Your natural lashes lifted and darkened for an open, wide-eyed look that lasts around 6-8 weeks.",
        icon: "lashLift",
      },
      {
        name: "Korean Lash Lift & Tint",
        duration: "1 hour",
        price: "$115",
        description:
          "A gentler, more natural curl pattern favoured for a soft, everyday finish rather than a dramatic lift.",
        icon: "lashLiftPlus",
      },
      {
        name: "Lash Tint",
        duration: "15 mins",
        price: "$30",
        description:
          "A standalone tint to darken fair or fading lashes when you don't need a fresh lift.",
        icon: "lashTint",
      },
    ],
  },
  {
    slug: "packages",
    name: "Packages - Discounted",
    shortName: "Packages",
    tagline: "Brow and lash combos, bundled and discounted",
    metaTitle: "Brow & Lash Packages | The Brow Edit Singleton",
    metaDescription:
      "Save when you combine a lash lift with brow sculpting or lamination. Discounted brow and lash packages at The Brow Edit in Singleton, NSW.",
    intro:
      "Booking your brows and lashes together saves both time and money. These discounted packages pair a lash lift and tint with your choice of brow sculpting or full lamination, so you leave with a complete, camera-ready look in one appointment - popular with clients travelling in from across the Hunter Valley for a single, efficient visit.",
    icon: "package",
    treatments: [
      {
        name: "Lash Lift & Tint + Brow Sculpt & Tint/Dye",
        duration: "1 hour 15 mins",
        price: "$155",
        description:
          "Lifted, tinted lashes and precisely shaped, tinted brows in one appointment - a complete refresh at a discounted combined rate.",
        icon: "package",
      },
      {
        name: "Lash Lift & Tint + Brow Lamination, Sculpt & Tint/Dye",
        duration: "1 hour 30 mins",
        price: "$195",
        description:
          "Our most complete package: lash lift and tint paired with full brow lamination, sculpting and tint for a head-turning finish, bundled to save.",
        icon: "package",
      },
    ],
  },
  {
    slug: "mens-brows",
    name: "Men's Brows",
    shortName: "Men's Brows",
    tagline: "Simple, natural-looking brow grooming for men",
    metaTitle: "Men's Eyebrow Grooming | Singleton NSW",
    metaDescription:
      "Tidy, natural-looking men's brow grooming at The Brow Edit in Singleton, NSW. Quick brow tidy and tint appointments for clients across the Hunter Valley.",
    intro:
      "Men's brow grooming in Singleton, NSW, is about tidying stray hairs and softening the unibrow without looking obviously 'done'. Quick, low-key appointments for clients across Singleton, Muswellbrook, Maitland and Cessnock who want sharper brows without the fuss.",
    icon: "browTidy",
    treatments: [
      {
        name: "Brow Tidy",
        duration: "20 mins",
        price: "$35",
        description:
          "A clean, natural tidy-up that removes stray hairs and defines the brow line without changing the overall shape.",
        icon: "browTidy",
      },
      {
        name: "Brow Tidy & Tint",
        duration: "30 mins",
        price: "$55",
        description:
          "A brow tidy plus a subtle tint to add depth to lighter or greying brows, still entirely natural-looking.",
        icon: "browTidyTint",
      },
    ],
  },
  {
    slug: "add-ons",
    name: "Add Ons",
    shortName: "Add-Ons",
    tagline: "Quick extras to round out your appointment",
    metaTitle: "Brow & Lash Add-Ons | The Brow Edit Singleton",
    metaDescription:
      "Enhance your appointment with an eye mask or facial waxing add-on at The Brow Edit in Singleton, NSW. Quick, affordable extras for every visit.",
    intro:
      "Add a little extra to any brow or lash appointment at The Brow Edit in Singleton, NSW. These quick add-ons are booked alongside another service and take just a few minutes each.",
    icon: "eyeMask",
    treatments: [
      {
        name: "Hydrating Under Eye Mask",
        duration: "5 mins",
        price: "$15",
        description:
          "A soothing, hydrating mask applied while you relax during your main treatment - a small moment of extra care.",
        icon: "eyeMask",
      },
      {
        name: "Upper Lip Wax",
        duration: "5 mins",
        price: "$15",
        description: "Fast, precise waxing to keep your upper lip smooth.",
        icon: "wax",
      },
      {
        name: "Chin Wax",
        duration: "5 mins",
        price: "$15",
        description: "Quick chin waxing added on to your brow or lash appointment.",
        icon: "wax",
      },
      {
        name: "Nostril Wax",
        duration: "5 mins",
        price: "$15",
        description: "A tidy nostril wax, done quickly and comfortably.",
        icon: "wax",
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
