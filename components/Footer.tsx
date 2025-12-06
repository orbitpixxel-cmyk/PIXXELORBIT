import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200/70 bg-white backdrop-blur dark:border-zinc-200/70 dark:bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-900">
              <span>PIXXELORBIT</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-zinc-600 dark:text-zinc-600">
              Minimal, high-performance websites and social campaigns that grow your business.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-900">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-600">
                <li><Link href="/pages/Home" className="hover:text-zinc-900 dark:hover:text-zinc-900">Home</Link></li>
                <li><Link href="/pages/About" className="hover:text-zinc-900 dark:hover:text-zinc-900">About</Link></li>
                <li><Link href="/pages/Service" className="hover:text-zinc-900 dark:hover:text-zinc-900">Services</Link></li>
                <li><Link href="/pages/Contact" className="hover:text-zinc-900 dark:hover:text-zinc-900">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-900">Services</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-600">
                <li>Web Development</li>
                <li>Landing & CMS Sites</li>
                <li>SEO & Analytics</li>
                <li>Social Media Marketing</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-900">Contact</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-600">
                <li><a href="mailto:contact@pixxelorbit.com" className="hover:text-zinc-900 dark:hover:text-zinc-900">contact@pixxelorbit.com</a></li>
                <li className="text-zinc-500">Global · Remote-first</li>
                <li className="flex gap-3">
                  <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-900">LinkedIn</a>
                  <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-900">Instagram</a>
                  <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-900">X</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-200/60 pt-6 text-sm text-zinc-600 dark:border-zinc-200/60 dark:text-zinc-600 md:flex-row">
          <div>© {new Date().getFullYear()} PIXXELORBIT. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/pages/Service" className="hover:text-zinc-900 dark:hover:text-zinc-900">Services</Link>
            <Link href="/pages/About" className="hover:text-zinc-900 dark:hover:text-zinc-900">About</Link>
            <Link href="/pages/Contact" className="hover:text-zinc-900 dark:hover:text-zinc-900">Contact</Link>
            <Link href="/pages/Privacy" className="hover:text-zinc-900 dark:hover:text-zinc-900">Privacy</Link>
            <Link href="/pages/Terms" className="hover:text-zinc-900 dark:hover:text-zinc-900">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
