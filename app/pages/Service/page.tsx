import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
      <h1 className="font-ptserif text-4xl font-semibold tracking-tight sm:text-5xl">Services</h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-600">
        Product websites, web apps, and social media growth programs tailored to
        where you are today and where you need to go next.
      </p>
      </Reveal>

      <Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white p-6 hover-elevate transition dark:border-zinc-200 dark:bg-white">
          <h2 className="text-xl font-semibold">Web Development</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            <li>Next.js, TypeScript, Tailwind</li>
            <li>Landing pages, CMS, eCommerce</li>
            <li>SEO, accessibility, performance</li>
          </ul>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 hover-elevate transition dark:border-zinc-200 dark:bg-white">
          <h2 className="text-xl font-semibold">Social Media Marketing</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            <li>Content strategy and production</li>
            <li>Paid ads management and creative</li>
            <li>Analytics, reporting, optimization</li>
          </ul>
        </div>
      </div>
      </Reveal>

      <div className="mt-12 rounded-xl border border-zinc-200 bg-white p-6 hover-elevate transition dark:border-zinc-200 dark:bg-white">
        <h2 className="font-ptserif text-xl font-semibold">Process</h2>
        <ol className="mt-4 grid gap-4 sm:grid-cols-3">
          <li className="rounded-lg border border-zinc-200 p-4 hover-elevate transition dark:border-zinc-200">
            <div className="text-sm font-medium">1. Discover</div>
            <div className="mt-1 text-sm text-zinc-600">
              Goals, audience, constraints.
            </div>
          </li>
          <li className="rounded-lg border border-zinc-200 p-4 hover-elevate transition dark:border-zinc-200">
            <div className="text-sm font-medium">2. Design & Build</div>
            <div className="mt-1 text-sm text-zinc-600">
              Iterative design, development, and reviews.
            </div>
          </li>
          <li className="rounded-lg border border-zinc-200 p-4 hover-elevate transition dark:border-zinc-200">
            <div className="text-sm font-medium">3. Launch & Grow</div>
            <div className="mt-1 text-sm text-zinc-600">
              Deploy, measure, optimize.
            </div>
          </li>
        </ol>
      </div>

      <section className="mt-12">
        <h2 className="font-ptserif text-2xl font-semibold tracking-tight">Packages</h2>
        <Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-6 hover-elevate transition dark:border-zinc-200 dark:bg-white">
            <div className="text-sm font-medium text-sky-700 dark:text-sky-300">Web</div>
            <h3 className="mt-2 text-lg font-semibold">Launch Site</h3>
            <p className="mt-2 text-sm text-zinc-600">Focused landing or marketing site.</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>Design system + 5–8 pages</li>
              <li>SEO setup and analytics</li>
              <li>Rapid 2–3 week timeline</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6 hover-elevate transition dark:border-zinc-200 dark:bg-white">
            <div className="text-sm font-medium text-sky-700 dark:text-sky-300">Web</div>
            <h3 className="mt-2 text-lg font-semibold">Growth Site</h3>
            <p className="mt-2 text-sm text-zinc-600">CMS-driven site with scalable content.</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>Headless CMS & components</li>
              <li>Blog, resources, landing pages</li>
              <li>Performance + accessibility</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6 hover-elevate transition dark:border-zinc-200 dark:bg-white">
            <div className="text-sm font-medium text-sky-700 dark:text-sky-300">SMMA</div>
            <h3 className="mt-2 text-lg font-semibold">Performance</h3>
            <p className="mt-2 text-sm text-zinc-600">Paid + organic engine for growth.</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>Content calendar + creative</li>
              <li>Multi-platform paid ads</li>
              <li>Weekly reporting & optimizations</li>
            </ul>
          </div>
        </div>
        </Reveal>
      </section>

      <section className="mt-12">
        <h2 className="font-ptserif text-2xl font-semibold tracking-tight">FAQs</h2>
        <Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <details className="rounded-lg border border-zinc-200 bg-white p-4 open:bg-white hover-elevate transition dark:border-zinc-200 dark:bg-white">
            <summary className="cursor-pointer text-sm font-medium">How long does a project take?</summary>
            <p className="mt-2 text-sm text-zinc-600">Launch sites ship in 2–3 weeks. Growth sites in 4–6 weeks depending on scope.</p>
          </details>
          <details className="rounded-lg border border-zinc-200 bg-white p-4 open:bg-white hover-elevate transition dark:border-zinc-200 dark:bg-white">
            <summary className="cursor-pointer text-sm font-medium">Do you maintain the site after launch?</summary>
            <p className="mt-2 text-sm text-zinc-600">Yes—ongoing retainers cover updates, experiments, and growth.</p>
          </details>
          <details className="rounded-lg border border-zinc-200 bg-white p-4 open:bg-white hover-elevate transition dark:border-zinc-200 dark:bg-white">
            <summary className="cursor-pointer text-sm font-medium">What about content and copy?</summary>
            <p className="mt-2 text-sm text-zinc-600">We help structure the narrative and can support copy and creative as needed.</p>
          </details>
          <details className="rounded-lg border border-zinc-200 bg-white p-4 open:bg-white hover-elevate transition dark:border-zinc-200 dark:bg-white">
            <summary className="cursor-pointer text-sm font-medium">Which platforms do you run ads on?</summary>
            <p className="mt-2 text-sm text-zinc-600">Meta, Google, LinkedIn, and more—based on your audience and goals.</p>
          </details>
        </div>
        </Reveal>
      </section>

      <section className="mt-12">
        <Reveal>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center hover-elevate transition dark:border-zinc-200 dark:bg-white">
          <h3 className="text-2xl font-semibold tracking-tight">Let’s scope your project</h3>
          <p className="mt-2 text-sm text-zinc-600">Share your goals— we’ll reply with a simple plan, timeline, and pricing.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="/pages/Contact" className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100/70">Get a proposal</a>
            <a href="/pages/About" className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100/70">About us</a>
          </div>
        </div>
        </Reveal>
      </section>
    </div>
  );
}
