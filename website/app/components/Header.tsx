"use client";

import { Menu, MessageSquarePlus, Star, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-4 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight">Evaliphy</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/docs/introduction"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Documentation
            </Link>
            <Link
              href="/docs/assertions-api"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              API Reference
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://forms.gle/5CQGzonT1XUUHCJu6"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-zinc-900 px-3 sm:px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            <MessageSquarePlus className="h-4 w-4" />
            <span className="xs:inline">Feedback</span>
          </a>
          <a
            href="https://github.com/priyanshus/evaliphy"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 sm:px-4 py-1.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
          >
            <span className="hidden xs:inline">Star on GitHub</span>
            <span className="xs:hidden"><Star className="h-4 w-4" /></span>
          </a>
          <button
            className="md:hidden p-1 text-zinc-600 hover:text-zinc-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white p-4 space-y-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="/docs/introduction"
              className="text-base font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link
              href="/docs/assertions-api"
              className="text-base font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              onClick={() => setIsMenuOpen(false)}
            >
              API Reference
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
