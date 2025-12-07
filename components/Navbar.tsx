"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Works", href: "/Works" },
  { name: "Contact", href: "/Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const pathname = usePathname();

  // no-op: removed theme handling

  useEffect(() => {
    let last = typeof window !== "undefined" ? window.scrollY : 0;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY || 0;
          setAtTop(y <= 10);
          const delta = y - last;
          if (y > 80 && delta > 2) {
            setHidden(true);
          } else if (delta < -2) {
            setHidden(false);
          }
          last = y;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const shouldHide = hidden && !open;
  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        atTop ? "border-transparent" : "border-zinc-200/70 shadow-sm"
      } bg-white/80 supports-[backdrop-filter]:bg-white/70 backdrop-blur transition-transform duration-300 ${
        shouldHide ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-base font-semibold tracking-tight md:text-lg">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400" aria-hidden="true" />
            <span className="text-zinc-900">PIXXELORBIT</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Primary">
            {navItems.map((item) => {
              const active = pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative px-1 py-1 text-sm font-medium transition-colors ${active ? "text-black" : "text-zinc-700 hover:text-black"}`}
                >
                  <span className="relative">
                    {item.name}
                    <span
                      className={`absolute -bottom-2 left-0 right-0 h-0.5 origin-left rounded-full bg-zinc-900 transition-transform duration-200 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    />
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/Contact"
              aria-label="Let's Talk"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm ring-1 ring-zinc-900/10 transition hover:bg-zinc-800"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>
              <span>Let’s Talk</span>
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-zinc-200/70 bg-white backdrop-blur md:hidden">
          <div className="mx-auto max-w-7xl px-4 pb-4 pt-2 sm:px-6">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/Contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Let's Talk
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
