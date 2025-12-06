import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <div>
      <section className="relative -mt-16 flex min-h-[88svh] items-center overflow-hidden bg-hero-gradient py-24 text-white sm:py-36">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent"/>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
          <div className="max-w-5xl xl:max-w-6xl">
            <p className="text-sm font-medium text-white/70">Web Development · Social Media Marketing</p>
            <h1 className="font-ptserif mt-4 text-5xl font-semibold leading-tight tracking-tight md:text-7xl lg:text-7xl">
              Elevating brands with strategic web solutions and performance-driven marketing
            </h1>


            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/pages/Contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm ring-1 ring-inset ring-white/20 transition hover:bg-white/90"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>
                Let's Talk
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22h11A2.5 2.5 0 0 0 20 19.5v-15A2.5 2.5 0 0 0 17.5 2h-11A2.5 2.5 0 0 0 4 4.5z"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>
                See our work
              </Link>
            </div>
          </div>
          </Reveal>

          <Reveal delay={150}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-sm text-white/70">
            <span>Trusted by teams at</span>
            <div className="flex flex-wrap items-center gap-4">
              <span className="rounded-md border border-white/20 bg-white/10 px-3 py-1">NEBULA</span>
              <span className="rounded-md border border-white/20 bg-white/10 px-3 py-1">ORBITAL</span>
              <span className="rounded-md border border-white/20 bg-white/10 px-3 py-1">QUANTA</span>
              <span className="rounded-md border border-white/20 bg-white/10 px-3 py-1">LUMEN</span>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-ptserif text-2xl font-semibold tracking-tight">How we work</h2>
          <ol className="mt-8 grid gap-6 lg:grid-cols-3">
            <li className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-200 dark:bg-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 dark:border-zinc-300 dark:bg-white dark:text-zinc-800">1</div>
                <div className="text-sm font-medium">Discover</div>
              </div>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">We align on goals, audience, and constraints. Then we propose the plan.</p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-200 dark:bg-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 dark:border-zinc-300 dark:bg-white dark:text-zinc-800">2</div>
                <div className="text-sm font-medium">Design & Build</div>
              </div>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">We iterate quickly on copy, design, and code with async reviews.</p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-200 dark:bg-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 dark:border-zinc-300 dark:bg-white dark:text-zinc-800">3</div>
                <div className="text-sm font-medium">Launch & Grow</div>
              </div>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Deploy, measure, and optimize with experiments and content.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-ptserif text-2xl font-semibold tracking-tight">What clients say</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <figure className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-200 dark:bg-white">
              <blockquote className="text-sm text-zinc-700 dark:text-zinc-300">“Fast turnaround and a clear process. Our conversions jumped within weeks.”</blockquote>
              <figcaption className="mt-3 flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sky-700 dark:text-sky-700">AK</div>
                <div>
                  <div className="font-medium">Ankit K.</div>
                  <div className="text-xs">Founder, Nebula</div>
                </div>
              </figcaption>
            </figure>
            <figure className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-200 dark:bg-white">
              <blockquote className="text-sm text-zinc-700 dark:text-zinc-300">“The redesign clarified our story and sped up the site—demo requests up 48%.”</blockquote>
              <figcaption className="mt-3 flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-700 dark:text-blue-700">RS</div>
                <div>
                  <div className="font-medium">Riya S.</div>
                  <div className="text-xs">Head of Growth, Orbital</div>
                </div>
              </figcaption>
            </figure>
            <figure className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-200 dark:bg-white">
              <blockquote className="text-sm text-zinc-700 dark:text-zinc-300">“Professional, minimal, and measurable. Exactly what we needed.”</blockquote>
              <figcaption className="mt-3 flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-indigo-800 dark:text-indigo-800">MP</div>
                <div>
                  <div className="font-medium">Manish P.</div>
                  <div className="text-xs">Marketing Lead, Lumen</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal>
            <div className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm dark:border-zinc-200 dark:bg-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 dark:border-zinc-300 dark:bg-white dark:text-zinc-800">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 3L4 14h6l-2 7 11-13h-6z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Performance-first</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Fast by default. Optimized Core Web Vitals and accessibility built in.
              </p>
            </div>
            </Reveal>
            <Reveal delay={100}>
            <div className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm dark:border-zinc-200 dark:bg-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 dark:border-zinc-300 dark:bg-white dark:text-zinc-800">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 17l6-6 4 4 7-7" />
                  <path d="M14 5h7v7" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Conversion focused</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Clear structure, persuasive copy, analytics and tests that move the needle.
              </p>
            </div>
            </Reveal>
            <Reveal delay={200}>
            <div className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm dark:border-zinc-200 dark:bg-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 dark:border-zinc-300 dark:bg-white dark:text-zinc-800">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7l9-4 9 4-9 4-9-4z" />
                  <path d="M3 12l9 4 9-4" />
                  <path d="M3 17l9 4 9-4" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Marketing OS</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Content, paid ads, and reporting aligned into one simple operating system.
              </p>
            </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Reveal>
            <div className="rounded-lg border border-zinc-200 bg-white p-4 text-center text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm dark:border-zinc-200 dark:bg-white">
              <div className="text-2xl font-semibold">200ms</div>
              <div className="text-zinc-600 dark:text-zinc-400">median LCP</div>
            </div>
            </Reveal>
            <Reveal delay={100}>
            <div className="rounded-lg border border-zinc-200 bg-white p-4 text-center text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm dark:border-zinc-200 dark:bg-white">
              <div className="text-2xl font-semibold">+40%</div>
              <div className="text-zinc-600 dark:text-zinc-400">conversion rate</div>
            </div>
            </Reveal>
            <Reveal delay={200}>
            <div className="rounded-lg border border-zinc-200 bg-white p-4 text-center text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm dark:border-zinc-200 dark:bg-white">
              <div className="text-2xl font-semibold">5x</div>
              <div className="text-zinc-600 dark:text-zinc-400">average ROAS</div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="work" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-200 dark:bg-white">
              <div className="text-sm font-medium text-sky-700 dark:text-sky-300">Case study</div>
              <h3 className="mt-2 text-2xl font-semibold">B2B SaaS landing redesign</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                We rebuilt the website with a focused narrative and faster pages. The result: more demos and lower CAC.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-2">
                <li>+52% qualified demos</li>
                <li>−28% bounce rate</li>
                <li>Core Web Vitals all green</li>
                <li>CMS for easy edits</li>
              </ul>
              <div className="mt-6">
                <Link href="/pages/Service" className="text-sm font-medium text-sky-700 underline underline-offset-4 hover:text-sky-900 dark:text-sky-300">See how we work</Link>
              </div>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-200 dark:bg-white">
              <h3 className="text-2xl font-semibold">What you get</h3>
              <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-400">
                <li>Strategy workshop and roadmap</li>
                <li>Design system and components</li>
                <li>SEO, analytics, and launch support</li>
                <li>Ongoing growth and optimization</li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/pages/Contact"
                  className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100/60 dark:border-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100/60"
                >
                  Book a 20‑min intro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-zinc-200 bg-white dark:border-zinc-200">
            <div className="rounded-2xl bg-white px-6 py-10 text-center dark:bg-white sm:px-12">
              <h3 className="text-2xl font-semibold tracking-tight">Ready to build and grow?</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">Tell us your goals and we’ll share a short plan with timelines and pricing.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/pages/Contact" className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100/60 dark:border-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100/60">Get a proposal</Link>
                <Link href="/pages/Service" className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100/60 dark:border-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100/60">See services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
  );
}
