import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Person3Page() {
  const t = useTranslations('Person3');
  const locale = useLocale();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-16 px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10 border border-[#fbbf24]">
        <div className="flex flex-col items-center text-center gap-2">
          <h1 className="text-3xl font-extrabold mb-1 text-[#22543d] drop-shadow">{t('name')}</h1>
        </div>
        <div className="space-y-6 text-gray-700 mt-2">
          <div className="flex items-center gap-2 justify-center">
            <svg className="w-5 h-5 text-[#22543d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>{t('degree')}</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <svg className="w-5 h-5 text-[#22543d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <a
              href="https://orcid.org/0009-0006-4635-4519"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              https://orcid.org/0009-0006-4635-4519
            </a>
          </div>
          <div className="flex items-start gap-2 justify-center">
            <svg className="w-5 h-5 text-[#22543d] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span>{t('expertise')}</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <svg className="w-5 h-5 text-[#22543d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{t('roles')}</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <svg className="w-5 h-5 text-[#22543d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>{t('platforms')}</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <svg className="w-5 h-5 text-[#22543d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>{t('achievements')}</span>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href={`/${locale}/about`}
            className="inline-flex items-center gap-2 bg-[#22543d] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#fbbf24] hover:text-[#22543d] border-2 border-[#fbbf24] transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('back')}
          </Link>
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ru' },
    { locale: 'kz' }
  ];
}
