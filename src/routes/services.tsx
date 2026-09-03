import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, Code2, Boxes, Workflow, Palette, Cloud } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AI, Web, Cloud & Automation | Tevexxo" },
      {
        name: "description",
        content:
          "Tevexxo services: AI solutions, web and software development, digital products, data automation, UI/UX design and cloud-scale engineering.",
      },
      { property: "og:title", content: "Services — AI, Web, Cloud & Automation | Tevexxo" },
      {
        property: "og:description",
        content:
          "Six engineering services covering AI, web platforms, digital products, automation, design and cloud.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Brain,
    title: "AI & Intelligent Solutions",
    body: "Copilots, retrieval systems and model pipelines wired directly into your product workflow.",
    points: ["Custom copilots & RAG", "Model orchestration", "Evaluation & guardrails"],
  },
  {
    icon: Code2,
    title: "Web & Software Development",
    body: "Fast, accessible and edge-rendered platforms engineered for long-term maintainability.",
    points: ["React & TypeScript platforms", "API & backend engineering", "Performance budgets"],
  },
  {
    icon: Boxes,
    title: "Digital Product Development",
    body: "From discovery to launch — we own the roadmap, the build and the release rhythm.",
    points: ["Discovery sprints", "MVP to scale", "Weekly production releases"],
  },
  {
    icon: Workflow,
    title: "Data & Automation",
    body: "Pipelines and workflow engines that remove manual work and surface real-time truth.",
    points: ["ETL & event pipelines", "Workflow automation", "Reporting & dashboards"],
  },
  {
    icon: Palette,
    title: "UI/UX & Experience Design",
    body: "Design systems and interfaces that feel effortless and convert without friction.",
    points: ["Design systems", "Prototyping & testing", "Accessibility by default"],
  },
  {
    icon: Cloud,
    title: "Cloud & Scalable Technology",
    body: "Hardened infrastructure, observability and cost control from the first deploy onward.",
    points: ["Cloud architecture", "CI/CD & IaC", "Monitoring & scaling"],
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={
          <>
            Services built for <span className="text-primary text-glow">momentum</span>
          </>
        }
        subtitle="Six focused capabilities, one team — combined into whatever your product needs to ship and scale."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="glow-card h-full rounded-xl border border-border bg-card p-6">
                <span className="grid size-12 place-items-center rounded-lg bg-primary/15 text-primary">
                  <s.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.body}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <SectionHeading
            eyebrow="Next step"
            title="Tell us what you are building"
            subtitle="Share the goal and the constraints — we will come back with a plan, a scope and a timeline."
            center
          />
          <Reveal delay={100} className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="glow-btn inline-flex rounded-md bg-primary px-6 py-3 font-bold tracking-wide uppercase text-primary-foreground"
            >
              Start a project
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
