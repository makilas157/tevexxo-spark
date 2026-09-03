import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Mascot } from "@/components/site/Mascot";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Tevexxo Product Engineering Work" },
      {
        name: "description",
        content:
          "Selected Tevexxo projects across AI platforms, fintech, logistics and SaaS — with the outcomes each build delivered.",
      },
      { property: "og:title", content: "Projects — Tevexxo Product Engineering Work" },
      {
        property: "og:description",
        content: "AI platforms, fintech, logistics and SaaS products engineered by Tevexxo.",
      },
    ],
  }),
  component: Projects,
});

const categories = ["All", "AI", "SaaS", "Fintech", "Automation"] as const;

const projects = [
  {
    title: "Nebula Copilot",
    cat: "AI",
    tag: "Enterprise assistant",
    body: "A retrieval copilot answering 40k support questions a month with cited sources.",
    metric: "-58% ticket volume",
  },
  {
    title: "Orbit Ledger",
    cat: "Fintech",
    tag: "Payments platform",
    body: "Multi-currency ledger and reconciliation engine handling 2M events daily.",
    metric: "99.99% uptime",
  },
  {
    title: "Forge OS",
    cat: "SaaS",
    tag: "Operations suite",
    body: "Modular workspace for manufacturing teams with realtime shop-floor dashboards.",
    metric: "3x faster reporting",
  },
  {
    title: "Relay Grid",
    cat: "Automation",
    tag: "Logistics routing",
    body: "Route optimisation service cutting fleet idle time across 14 depots.",
    metric: "-22% fuel spend",
  },
  {
    title: "Aether Studio",
    cat: "AI",
    tag: "Creative tooling",
    body: "Generative asset pipeline with brand-safe guardrails for a global agency.",
    metric: "12x asset output",
  },
  {
    title: "Pulse Analytics",
    cat: "SaaS",
    tag: "Product analytics",
    body: "Event warehouse and dashboard layer that replaced three legacy tools.",
    metric: "$310k saved / yr",
  },
];

function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Products built to <span className="text-primary text-glow">outperform</span>
          </>
        }
        subtitle="A selection of platforms, copilots and automation systems we designed, engineered and scaled."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <Reveal className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                "glow-btn rounded-full border px-5 py-2 text-sm font-bold tracking-wide uppercase",
                active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="glow-card group h-full rounded-xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold tracking-widest uppercase text-primary">
                    {p.cat}
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
                <p className="mt-1 text-sm tracking-wide uppercase text-muted-foreground">{p.tag}</p>
                <p className="mt-4 text-muted-foreground">{p.body}</p>
                <p className="mt-6 font-display text-lg font-bold text-primary">{p.metric}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <Reveal className="flex justify-center">
            <Mascot size={230} alt="Tevexxo mascot presenting project results" />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Next build"
              title="Your product could be the next case study"
              subtitle="Bring us a rough idea or a stalled roadmap — we will turn it into a shipping plan."
            />
            <Reveal delay={100}>
              <Link
                to="/contact"
                className="glow-btn mt-8 inline-flex rounded-md bg-primary px-6 py-3 font-bold tracking-wide uppercase text-primary-foreground"
              >
                Book a discovery call
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
