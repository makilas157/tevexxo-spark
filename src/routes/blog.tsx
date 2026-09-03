import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Calendar, Clock, Send, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Mascot } from "@/components/site/Mascot";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Tevexxo Engineering & AI Insights" },
      {
        name: "description",
        content:
          "Practical writing from the Tevexxo team on AI engineering, performance, design systems and shipping software faster.",
      },
      { property: "og:title", content: "Blog — Tevexxo Engineering & AI Insights" },
      {
        property: "og:description",
        content: "Essays on AI engineering, performance, design systems and delivery speed.",
      },
    ],
  }),
  component: Blog,
});

const topics = ["All", "AI", "Engineering", "Design", "Growth"] as const;

const posts = [
  {
    title: "Shipping RAG systems that actually stay accurate",
    topic: "AI",
    date: "12 Aug 2026",
    read: "8 min",
    excerpt: "Chunking, evals and guardrails: the three things that decide whether your copilot survives contact with real users.",
  },
  {
    title: "The performance budget that saved 42% of load time",
    topic: "Engineering",
    date: "29 Jul 2026",
    read: "6 min",
    excerpt: "How we treat milliseconds as a product requirement, and the tooling we wire in before the first component.",
  },
  {
    title: "Design systems for teams that hate design systems",
    topic: "Design",
    date: "04 Jul 2026",
    read: "7 min",
    excerpt: "A pragmatic token-first approach that pays for itself by the third feature, not the thirtieth.",
  },
  {
    title: "Automating operations without breaking trust",
    topic: "AI",
    date: "18 Jun 2026",
    read: "9 min",
    excerpt: "Human-in-the-loop patterns that keep automation fast while leaving people in control of the outcome.",
  },
  {
    title: "Edge rendering, honestly evaluated",
    topic: "Engineering",
    date: "02 Jun 2026",
    read: "5 min",
    excerpt: "Where the edge genuinely wins, where it costs you, and how we decide per project.",
  },
  {
    title: "Landing pages that convert technical buyers",
    topic: "Growth",
    date: "21 May 2026",
    read: "6 min",
    excerpt: "Engineers buy differently. Here is the messaging structure that consistently works for developer tools.",
  },
];

function Blog() {
  const [topic, setTopic] = useState<(typeof topics)[number]>("All");
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (topic === "All" || p.topic === topic) &&
        (q === "" || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)),
    );
  }, [topic, query]);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Notes from the <span className="text-primary text-glow">build floor</span>
          </>
        }
        subtitle="Field reports on AI engineering, performance and product delivery — written by the people doing the work."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            {topics.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(t)}
                className={cn(
                  "glow-btn rounded-full border px-5 py-2 text-sm font-bold tracking-wide uppercase",
                  topic === t
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <label className="sr-only" htmlFor="blog-search">
              Search articles
            </label>
            <input
              id="blog-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-md border border-border bg-card py-2.5 pl-10 pr-4 outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary focus:shadow-[0_0_24px_-6px_var(--primary)]"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <article className="glow-card flex h-full cursor-pointer flex-col rounded-xl border border-border bg-card p-6">
                <span className="w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold tracking-widest uppercase text-primary">
                  {p.topic}
                </span>
                <h2 className="mt-4 text-xl font-bold leading-snug">{p.title}</h2>
                <p className="mt-3 flex-1 text-muted-foreground">{p.excerpt}</p>
                <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-4" /> {p.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-4" /> {p.read}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <Reveal className="mt-16 flex flex-col items-center text-center">
            <Mascot size={190} alt="Tevexxo mascot shrugging because no articles matched" />
            <h2 className="mt-4 text-xl font-bold">No articles matched that search</h2>
            <p className="mt-2 text-muted-foreground">Try a different keyword or clear the topic filter.</p>
          </Reveal>
        )}
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Get the <span className="text-primary">Tevexxo Signal</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              One email a month: what we shipped, what broke, and what we learned. No fluff, no spam.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
                setEmail("");
              }}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 rounded-md border border-border bg-card px-4 py-3 outline-none placeholder:text-muted-foreground focus:border-primary focus:shadow-[0_0_24px_-6px_var(--primary)]"
              />
              <button
                type="submit"
                className="glow-btn inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-bold tracking-wide uppercase text-primary-foreground"
              >
                Subscribe <Send className="size-4" />
              </button>
            </form>
            {subscribed && (
              <p className="mt-4 inline-flex items-center gap-2 text-primary">
                <CheckCircle2 className="size-5" /> You are on the list. Watch your inbox.
              </p>
            )}
          </Reveal>
          <Reveal delay={120} className="flex justify-center">
            <Mascot size={230} alt="Tevexxo mascot holding a newsletter envelope" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
