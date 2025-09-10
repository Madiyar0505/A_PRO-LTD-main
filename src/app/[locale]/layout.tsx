import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/header';
import SocialButtons from '@/components/SocialButtons';
import Footer from '@/components/footer';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <div className='flex-grow mt-20'>{children}</div>
        <SocialButtons />
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}