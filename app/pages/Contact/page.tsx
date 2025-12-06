import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
      <div className="max-w-3xl">
        <h1 className="font-ptserif text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          Tell us about your goals. We’ll respond within 1–2 business days with next steps.
        </p>
      </div>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <Reveal>
          <form action="#" method="get" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-500 outline-none ring-0 transition focus:border-zinc-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-500 outline-none ring-0 transition focus:border-zinc-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-500 outline-none ring-0 transition focus:border-zinc-500"
                placeholder="Project scope, timeline, budget, links..."
              />
            </div>

            <div className="flex items-start justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100/70"
              >
                Send message
              </button>
              <p className="text-xs text-zinc-500">We respect your privacy and keep your info confidential.</p>
            </div>
          </form>
          </Reveal>
        </div>

        <div className="lg:col-span-2">
          <Reveal delay={100}>
          <div className="grid gap-4">
            <div className="rounded-xl border border-zinc-200 bg-white p-5 hover-elevate transition dark:border-zinc-200 dark:bg-white">
              <div className="text-sm font-medium text-zinc-700">Email</div>
              <a href="mailto:contact@pixxelorbit.com" className="mt-1 inline-block text-sm text-sky-700 underline underline-offset-4">contact@pixxelorbit.com</a>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 hover-elevate transition dark:border-zinc-200 dark:bg-white">
              <div className="text-sm font-medium text-zinc-700">Location</div>
              <div className="mt-1 text-sm text-zinc-600">Global, remote-first</div>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 hover-elevate transition dark:border-zinc-200 dark:bg-white">
              <div className="text-sm font-medium text-zinc-700">Hours</div>
              <div className="mt-1 text-sm text-zinc-600">Mon–Fri · 9:00–18:00 IST</div>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 hover-elevate transition dark:border-zinc-200 dark:bg-white">
              <div className="text-sm font-medium text-zinc-700">Social</div>
              <div className="mt-2 flex flex-wrap gap-3 text-sm">
                <a href="#" className="text-zinc-600 hover:text-zinc-900">LinkedIn</a>
                <a href="#" className="text-zinc-600 hover:text-zinc-900">Instagram</a>
                <a href="#" className="text-zinc-600 hover:text-zinc-900">X</a>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
