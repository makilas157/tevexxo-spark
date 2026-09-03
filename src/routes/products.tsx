import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, Activity, Server, Hammer, ScanEye, Share2, ArrowUpRight } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Orbit, Pulse, Grid & More | Tevexxo" },
      {
        name: "description",
        content:
          "Explore Tevexxo products: Orbit AI copilot orchestration, Pulse analytics, Grid cloud tooling, Forge workflow builder, Lens vision AI and Relay integrations.",
      },
      { property: "og:title", content: "Products — Orbit, Pulse, Grid & More | Tevexxo" },
      {
        property: "og:description",
        content: "Six Tevexxo products spanning AI, analytics, cloud, automation and integrations.",
      },
    ],
  }),
  component: Products,
});

const products = [
  {
    icon: Bot,
    category: "AI Platform",
    name: "Tevexxo Orbit",
    body: "AI copilot orchestration platform for routing, grounding and governing every assistant in your stack.",
    large: true,
  },
  {
    icon: Activity,
    category: "Analytics",
    name: "Tevexxo Pulse",
    body: "Real-time analytics and automation dashboards with alerting your teams actually act on.",
    large: false,
  },
  {
    icon: Server,
    category: "Infrastructure",
    name: "Tevexxo Grid",
    body: "Cloud infrastructure and scaling toolkit with cost-aware autoscaling baked in.",
    large: false,
  },
  {
    icon: Hammer,
    category: "Internal Tools",
    name: "Tevexxo Forge",
    body: "Internal tools and workflow builder that turns operational processes into shipped software.",
    large: false,
  },
  {
    icon: ScanEye,
    category: "Vision AI",
    name: "Tevexxo Lens",
    body: "Computer vision and document intelligence for extraction, inspection and classification.",
    large: false,
  },
  {
    icon: Share2,
    category: "Integrations",
    name: "Tevexxo Relay",
    body: "Integration and automation hub connecting your systems with reliable, observable event flows.",
    large: true,
  },
];

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Our products"
        title={
          <>
            Platforms engineered by <span className="text-primary text-glow">Tevexxo</span>
          </>
        }
        subtitle="A product suite covering AI orchestration, analytics, cloud, automation and integrations."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 80}
              className={cn(p.large && "lg:col-span-2")}
            >
              <article
                className={cn(
                  "glow-card group flex h-full flex-col rounded-xl border border-border bg-card p-6",
                  p.large && "lg:p-8",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-lg bg-primary/15 text-primary">
                    <p.icon className="size-6" />
                  </span>
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold tracking-widest uppercase text-primary">
                    {p.category}
                  </span>
                </div>
                <h3 className={cn("mt-5 text-xl font-bold", p.large && "lg:text-3xl")}>{p.name}</h3>
                <p className={cn("mt-3 text-muted-foreground", p.large && "lg:text-lg")}>{p.body}</p>
                <Link
                  to="/contact"
                  className="glow-btn mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-border px-5 py-2 text-sm font-bold tracking-wide uppercase hover:border-primary hover:text-primary"
                >
                  Explore
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <SectionHeading
            eyebrow="Get access"
            title="See any product in action"
            subtitle="Book a walkthrough and we will tailor the demo to your stack and your workflows."
            center
          />
          <Reveal delay={100} className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="glow-btn inline-flex rounded-md bg-primary px-6 py-3 font-bold tracking-wide uppercase text-primary-foreground"
            >
              Request a demo
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
