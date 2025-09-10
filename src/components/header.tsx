"use client";
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm z-50 py-2">
      <div className="w-full flex flex-col items-center justify-center relative">
        {/* Top row: hamburger left, logo center, language switcher right */}
        <div className="w-full flex items-center justify-between px-4 relative">
          {/* Hamburger (mobile only) */}
          <div className="block md:hidden">
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-lg border border-[#fbbf24] bg-white text-[#22543d] shadow focus:outline-none focus:ring-2 focus:ring-[#fbbf24]"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Centered logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <Link href="/" className="flex items-center group">
              <div className="w-14 h-14 rounded-full border-4 border-[#fbbf24] bg-white flex items-center justify-center shadow-lg overflow-hidden">
                <Image
                  src="/images/logo0.jpg"
                  alt="A-PRO logo"
                  width={56}
                  height={56}
                  className="object-contain w-12 h-12"
                />
              </div>
            </Link>
          </div>
          {/* Language switcher right */}
          <div className="ml-auto">
            <LocalSwitcher />
          </div>
        </div>
        {/* NESPI title under logo */}
        <span className="font-bold text-2xl text-[#22543d] mt-2 mb-1 transition-colors duration-200 hover:text-[#fbbf24] cursor-pointer">A-PRO LTD</span>
        {/* Desktop Navigation */}
        <nav className="w-full overflow-x-auto flex justify-center mt-2 pb-1 hidden md:flex">
          <div className="flex gap-4 md:gap-8 px-2">
            <Link href="/" className="px-4 py-2 rounded-full font-semibold text-[#22543d] bg-[#f7ede2] shadow hover:bg-[#fbbf24]/80 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#fbbf24] whitespace-nowrap">
              {t('home')}
            </Link>
            <Link href={`/${locale}/about`} className="px-4 py-2 rounded-full font-semibold text-[#22543d] bg-[#f7ede2] shadow hover:bg-[#fbbf24]/80 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#fbbf24] whitespace-nowrap">
              {t('about')}
            </Link>
            <Link href={`/${locale}/services`} className="px-4 py-2 rounded-full font-semibold text-[#22543d] bg-[#f7ede2] shadow hover:bg-[#fbbf24]/80 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#fbbf24] whitespace-nowrap">
              {t('services')}
            </Link>
            <Link href={`/${locale}/contacts`} className="px-4 py-2 rounded-full font-semibold text-[#22543d] bg-[#f7ede2] shadow hover:bg-[#fbbf24]/80 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#fbbf24] whitespace-nowrap">
              {t('contacts')}
            </Link>
          </div>
        </nav>
        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 flex justify-start md:hidden" onClick={() => setMenuOpen(false)}>
            <div className="bg-white w-64 h-full shadow-lg p-6 flex flex-col gap-4" onClick={e => e.stopPropagation()}>
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="self-end mb-4 p-2 rounded-lg border border-[#fbbf24] bg-white text-[#22543d] shadow focus:outline-none focus:ring-2 focus:ring-[#fbbf24]"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Link href="/" className="px-4 py-3 rounded-full font-semibold text-[#22543d] bg-[#f7ede2] shadow hover:bg-[#fbbf24]/80 hover:text-white transition-all whitespace-nowrap" onClick={() => setMenuOpen(false)}>
                {t('home')}
              </Link>
              <Link href={`/${locale}/about`} className="px-4 py-3 rounded-full font-semibold text-[#22543d] bg-[#f7ede2] shadow hover:bg-[#fbbf24]/80 hover:text-white transition-all whitespace-nowrap" onClick={() => setMenuOpen(false)}>
                {t('about')}
              </Link>
              <Link href={`/${locale}/services`} className="px-4 py-3 rounded-full font-semibold text-[#22543d] bg-[#f7ede2] shadow hover:bg-[#fbbf24]/80 hover:text-white transition-all whitespace-nowrap" onClick={() => setMenuOpen(false)}>
                {t('services')}
              </Link>
              <Link href={`/${locale}/contacts`} className="px-4 py-3 rounded-full font-semibold text-[#22543d] bg-[#f7ede2] shadow hover:bg-[#fbbf24]/80 hover:text-white transition-all whitespace-nowrap" onClick={() => setMenuOpen(false)}>
                {t('contacts')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
