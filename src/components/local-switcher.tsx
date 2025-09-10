'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && ['en', 'ru', 'kz'].includes(segments[0])) {
      segments[0] = nextLocale;
    } else {
      segments.unshift(nextLocale);
    }
    const newPath = '/' + segments.join('/');
    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <div className="relative">
      <label className="sr-only">Change language</label>
      <select
        defaultValue={localActive}
        onChange={onSelectChange}
        disabled={isPending}
        className="appearance-none bg-white border border-[#fbbf24] rounded-xl py-2 pl-4 pr-10 text-base font-semibold shadow focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-[#fbbf24] cursor-pointer hover:border-[#fbbf24] transition-colors min-w-[120px] text-[#22543d]"
        aria-label="Select language"
        style={{ boxShadow: '0 2px 8px 0 rgba(251,191,36,0.10)' }}
      >
        <option value="en" className="py-2">English</option>
        <option value="ru" className="py-2">Русский</option>
        <option value="kz" className="py-2">Қазақша</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#fbbf24]">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
