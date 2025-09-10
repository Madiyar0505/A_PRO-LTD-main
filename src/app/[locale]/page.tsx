import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col justify-center items-center bg-center bg-no-repeat"
        style={{ background: "#fff" }}
      >
        {/* Фоновый логотип */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 flex items-center justify-center z-0"
        >
          <Image
            src="/images/logo0.jpg"
            alt="A-PRO background logo"
            width={800}
            height={800}
            className="w-full h-full object-contain opacity-80"
            style={{
              filter: "none",
              borderRadius: "0"
            }}
          />
        </div>
        <div className="relative z-10 max-w-2xl w-full mx-auto text-center bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col items-center border-2 border-[#fbbf24] backdrop-blur-md">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#22543d] drop-shadow">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-[#22543d]/80 mb-8">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>
      {/* Почему выбирают нас */}
      <section className="py-20">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#22543d]">{t('whyUs.title')}</h2>
          <div className="flex flex-wrap justify-center gap-8 w-full max-w-none">
            <div className="flex flex-col items-center text-center p-8 bg-white/90 rounded-2xl shadow-xl border-2 border-[#fbbf24] transition-transform hover:scale-105 hover:shadow-2xl w-80 max-w-full">
              <span className="text-4xl mb-4 text-[#22543d]">💡</span>
              <div className="font-bold text-lg mb-2 text-[#22543d]">{t('whyUs.cards.0.title')}</div>
              <div className="text-[#22543d]/80 text-sm">{t('whyUs.cards.0.desc')}</div>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white/90 rounded-2xl shadow-xl border-2 border-[#fbbf24] transition-transform hover:scale-105 hover:shadow-2xl w-80 max-w-full">
              <span className="text-4xl mb-4 text-[#22543d]">🤝</span>
              <div className="font-bold text-lg mb-2 text-[#22543d]">{t('whyUs.cards.1.title')}</div>
              <div className="text-[#22543d]/80 text-sm">{t('whyUs.cards.1.desc')}</div>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white/90 rounded-2xl shadow-xl border-2 border-[#fbbf24] transition-transform hover:scale-105 hover:shadow-2xl w-80 max-w-full">
              <span className="text-4xl mb-4 text-[#22543d]">🚀</span>
              <div className="font-bold text-lg mb-2 text-[#22543d]">{t('whyUs.cards.2.title')}</div>
              <div className="text-[#22543d]/80 text-sm">{t('whyUs.cards.2.desc')}</div>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white/90 rounded-2xl shadow-xl border-2 border-[#fbbf24] transition-transform hover:scale-105 hover:shadow-2xl w-80 max-w-full">
              <span className="text-4xl mb-4 text-[#22543d]">🌱</span>
              <div className="font-bold text-lg mb-2 text-[#22543d]">{t('whyUs.cards.3.title')}</div>
              <div className="text-[#22543d]/80 text-sm">{t('whyUs.cards.3.desc')}</div>
            </div>
          </div>
        </div>
      </section>
      {/* Наши преимущества */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center mx-auto">
            <h3 className="text-3xl font-extrabold mb-8 text-[#22543d] tracking-tight">{t('advantages.title')}</h3>
            <ul className="space-y-6">
              <li className="flex items-center justify-center gap-3 text-lg">
                <span className="text-green-500 text-2xl">✓</span>
                <span className="text-[#22543d] font-medium">{t('advantages.items.0')}</span>
              </li>
              <li className="flex items-center justify-center gap-3 text-lg">
                <span className="text-green-500 text-2xl">✓</span>
                <span className="text-[#22543d] font-medium">{t('advantages.items.1')}</span>
              </li>
              <li className="flex items-center justify-center gap-3 text-lg">
                <span className="text-green-500 text-2xl">✓</span>
                <span className="text-[#22543d] font-medium">{t('advantages.items.2')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Как мы работаем */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-extrabold mb-12 text-center text-[#22543d] tracking-tight">{t('howWeWork.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#f7ede2] text-3xl font-bold text-[#22543d] mb-4">
                  {i + 1}
                </div>
                <div className="font-semibold mb-1 text-[#22543d]">{t(`howWeWork.cards.${i}.title`)}</div>
                <div className="text-[#22543d]/80 text-sm">{t(`howWeWork.cards.${i}.desc`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 flex flex-col items-center justify-center text-center md:items-end md:justify-end md:text-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto md:mx-0">
            {t('cta.desc')}
          </p>
          <Link href="/contacts" className="inline-block bg-white text-[#22543d] px-8 py-3 rounded-lg font-semibold hover:bg-[#fbbf24] hover:text-[#22543d] border-2 border-[#fbbf24] transition md:ml-auto">
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </main>
  );
}