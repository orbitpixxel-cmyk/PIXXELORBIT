import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <div className="max-w-3xl">
          <h1 className="font-ptserif text-4xl font-semibold tracking-tight">About PIXXELORBIT</h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            We’re a design-led engineering studio building minimal, fast, and scalable
            web experiences—paired with a lean social marketing practice that turns
            attention into outcomes.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        <Reveal>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 hover-elevate transition dark:border-zinc-200 dark:bg-white">
          <h2 className="text-lg font-semibold">Clarity</h2>
          <p className="mt-2 text-zinc-600">Simple interfaces and sharp messaging.</p>
        </div>
        </Reveal>
        <Reveal delay={100}>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 hover-elevate transition dark:border-zinc-200 dark:bg-white">
          <h2 className="text-lg font-semibold">Speed</h2>
          <p className="mt-2 text-zinc-600">Core Web Vitals and accessibility baked in.</p>
        </div>
        </Reveal>
        <Reveal delay={200}>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 hover-elevate transition dark:border-zinc-200 dark:bg-white">
          <h2 className="text-lg font-semibold">Outcomes</h2>
          <p className="mt-2 text-zinc-600">Iterate to improve conversion and ROI.</p>
        </div>
        </Reveal>
      </div>

      <div className="mt-12 rounded-xl border border-zinc-200 bg-white p-6 hover-elevate transition dark:border-zinc-200 dark:bg-white">
        <h2 className="font-ptserif text-xl font-semibold">Tooling we ship with</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <ul className="space-y-2 text-zinc-600">
            <li>Next.js, TypeScript, Tailwind</li>
            <li>Vercel, Edge caching, Image/CDN</li>
            <li>Analytics, heatmaps, A/B tests</li>
          </ul>
          <ul className="space-y-2 text-zinc-600">
            <li>Headless CMS (Sanity/Contentful)</li>
            <li>Forms, email, and automation</li>
            <li>Payment and auth integrations</li>
          </ul>
        </div>
      </div>

      <Reveal>
      <div className="mt-12 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-200 dark:bg-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Work with PIXXELORBIT</h3>
            <p className="mt-1 text-sm text-zinc-600">We’ll propose a simple plan with scope, timeline, and pricing.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/pages/Service" className="inline-flex items-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100/70">See services</a>
            <a href="/pages/Contact" className="inline-flex items-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100/70">Let’s Talk</a>
          </div>
        </div>
      </div>
      </Reveal>
    </div>
  );
}
