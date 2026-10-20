import { createFileRoute, Link } from "@tanstack/react-router";
import { Handshake, Award, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/site-chrome";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands & Partners — Vetri Irrigation" },
      {
        name: "description",
        content:
          "Trusted irrigation, pump and automation brands supplied by Vetri Irrigation including Rain Bird, Aqva Star, Supreme, Wilo, Irritec, and more.",
      },
      { property: "og:title", content: "Brands & Partners — Vetri Irrigation" },
      {
        property: "og:description",
        content: "Trusted irrigation, pump and automation brands supplied by Vetri Irrigation.",
      },
    ],
  }),
  component: Brands,
});

export const BRAND_LOGOS = [
  {
    name: "Rain Bird",
    logo: "https://www.shiva-kaveri.com/image/logo/rain-bird.jpg",
    url: "https://www.rainbird.com/professionals",
  },
  {
    name: "Aqva Star",
    logo: "https://www.shiva-kaveri.com/image/logo/aqva-star.jpg",
    url: "https://aqvastar.in/products/",
  },
  {
    name: "Armas",
    logo: "https://www.shiva-kaveri.com/image/logo/armas.jpg",
    url: "https://www.armas.com.tr/en-US/Dynamic/Page/About-Us",
  },
  {
    name: "Kasco",
    logo: "https://www.shiva-kaveri.com/image/logo/kasco.jpg",
    url: "https://kascomarine.com/",
  },
  {
    name: "Xeritech",
    logo: "https://www.shiva-kaveri.com/image/logo/xeritech.jpg",
    url: "https://www.shiva-kaveri.com/our-brands-and-partners.php#",
  },
  {
    name: "Supreme",
    logo: "https://www.shiva-kaveri.com/image/logo/supreme.jpg",
    url: "https://www.supreme.co.in/",
  },
  {
    name: "Wilo",
    logo: "https://www.shiva-kaveri.com/image/logo/wilo.jpg",
    url: "https://wilo.com/in/en/",
  },
  {
    name: "Italfog",
    logo: "https://www.shiva-kaveri.com/image/logo/italfog.jpg",
    url: "https://italfog.com/",
  },
  {
    name: "Various",
    logo: "https://www.shiva-kaveri.com/image/logo/various.jpg",
    url: "https://www.shiva-kaveri.com/our-brands-and-partners.php#",
  },
  {
    name: "Pimtas",
    logo: "https://www.shiva-kaveri.com/image/logo/pimtas.jpg",
    url: "https://www.pimtas.com/en/pimtech",
  },
  {
    name: "Otterbine",
    logo: "https://www.shiva-kaveri.com/image/logo/otterbine.jpg",
    url: "https://www.otterbine.com/",
  },
  {
    name: "SAB",
    logo: "https://www.shiva-kaveri.com/image/logo/sab.jpg",
    url: "https://www.sabspa.com/en/manifesto/",
  },
  {
    name: "PPP",
    logo: "https://www.shiva-kaveri.com/image/logo/ppp.jpg",
    url: "https://www.pppinc.net/",
  },
  {
    name: "Paige",
    logo: "https://www.shiva-kaveri.com/image/logo/paige.jpg",
    url: "https://paigewater.com/?utm_medium=301&utm_source=paigewire&utm_content=/&AspxAutoDetectCookieSupport=1",
  },
  {
    name: "Zurn",
    logo: "https://www.shiva-kaveri.com/image/logo/zurn.jpg",
    url: "https://www.zurn.com/",
  },
  {
    name: "Nibco",
    logo: "https://www.shiva-kaveri.com/image/logo/nibco.jpg",
    url: "https://www.nibco.com/",
  },
  {
    name: "Lasco",
    logo: "https://www.shiva-kaveri.com/image/logo/lasco.jpg",
    url: "https://www.lascofittings.com/",
  },
  {
    name: "STF",
    logo: "https://www.shiva-kaveri.com/image/logo/stf.jpg",
    url: "https://www.stf-filters.com/products/",
  },
  {
    name: "Irritec",
    logo: "https://www.shiva-kaveri.com/image/logo/irritec.jpg",
    url: "https://www.irritec.com/filtration/",
  },
  {
    name: "Leemco",
    logo: "https://www.shiva-kaveri.com/image/logo/leemco.jpg",
    url: "https://leemco.com/",
  },
];

const categories = [
  {
    title: "Pipes & fittings",
    items: [
      "HDPE & PVC pipe brands",
      "Column and casing pipes",
      "Compression fittings",
      "Solvent-weld fittings",
    ],
  },
  {
    title: "Sprinklers & drip",
    items: [
      "Pop-up rotors and sprays",
      "Impact and rain-gun sprinklers",
      "Inline drip laterals",
      "Online drippers & micro jets",
    ],
  },
  {
    title: "Pumps & motors",
    items: [
      "Monoblock pumps",
      "Submersible pumps",
      "Pool circulation pumps",
      "Booster & pressure sets",
    ],
  },
  {
    title: "Valves & filters",
    items: [
      "Solenoid & control valves",
      "Air release and NRV",
      "Screen & disc filters",
      "Sand and cartridge filters",
    ],
  },
  {
    title: "Automation",
    items: [
      "Irrigation controllers",
      "Rain and moisture sensors",
      "Fountain control panels",
      "Timer-based zoning",
    ],
  },
  {
    title: "Pool & fountain",
    items: [
      "Filtration systems",
      "Underwater LED lighting",
      "Nozzles and jet rings",
      "Chemical dosing units",
    ],
  },
];

function Brands() {
  return (
    <>
      <PageHero
        eyebrow="Brands & Partners"
        title="Brands and partners we work with"
        subtitle="We source from established manufacturers and dealer networks so every system uses genuine, warranty-backed material."
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        {/* Brand Logos 4-Grid Section */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            <Award className="h-4 w-4" /> Trusted Brand Portfolio
          </div>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Our Authorised & Leading Brand Partners
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Explore 20 world-class irrigation, piping, pump, and control system manufacturers. Tap
            any logo to visit the official website.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {BRAND_LOGOS.map((brand) => (
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit official ${brand.name} website`}
                className="group relative flex flex-col items-center justify-center rounded-xl border border-border/80 bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <div className="absolute right-2 top-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 text-muted-foreground group-hover:text-primary">
                  <ExternalLink className="h-3.5 w-3.5" />
                </div>
                <div className="flex h-20 w-full items-center justify-center rounded-lg bg-white p-2">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="mt-3 flex items-center gap-1 text-xs font-semibold text-foreground/90 group-hover:text-primary transition-colors">
                  {brand.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Product Categories Section */}
        <div className="pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Product Offerings
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Equipment Categories & Components
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Genuine components supplied across six major system categories.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-soft)]"
              >
                <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Partner CTA */}
        <div className="mt-14 flex flex-col items-start gap-4 rounded-xl border border-border bg-secondary/40 p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-3">
            <Handshake className="h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">Want to partner or become a dealer?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Manufacturers, contractors and landscape designers are welcome to work with us.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02]"
          >
            Talk to us
          </Link>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Brand names and availability can be confirmed for your specific requirement — please call
          us before finalising a quotation.
        </p>
      </section>
    </>
  );
}
