import { useTranslations } from 'next-intl';
import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#22543d] mt-auto border-t-2 border-[#fbbf24] shadow-inner">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Logo left */}
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <Link href="/">
              <div className="w-20 h-20 rounded-full border-4 border-[#fbbf24] bg-white flex items-center justify-center shadow-lg overflow-hidden">
                <Image src="/images/logo0.jpg" alt="A-PRO logo" width={64} height={64} className="object-contain w-16 h-16" />
              </div>
            </Link>
          </div>
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#22543d]">{t('company.title')}</h3>
            <p className="text-[#22543d]/80">
              {t('company.description')}
            </p>
          </div>
          {/* Contacts */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#22543d]">{t('contacts.title')}</h3>
            <ul className="space-y-2 text-[#22543d]/80">
              <li>{t('contacts.phone')}: +7 (777) 392-72-27</li>
              <li>Email: <span className="text-[#fbbf24]">info@a-pro.center / ais.pro.kz@gmail.com</span></li>
              <li>{t('contacts.address')}</li>
            </ul>
          </div>
          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#22543d]">{t('social.title')}</h3>
            <div className="flex space-x-4">
              <a href="https://linktr.ee/apro.ltd" target="_blank" rel="noopener noreferrer" className="text-[#fbbf24] hover:text-[#22543d] font-semibold transition">
                Linktr.ee
              </a>
              <a href="https://youtube.com/@a-pro-ltd?si=8nv6Xkh2nQL0GHR3" target="_blank" rel="noopener noreferrer" className="text-[#fbbf24] hover:text-[#22543d] font-semibold transition">
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#fbbf24] mt-8 pt-8 text-center text-[#22543d]/60">
          <p>{t('copyright', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
}
