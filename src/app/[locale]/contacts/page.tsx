// import Footer from '@/components/footer';
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contacts() {
  const t = useTranslations("Contacts");

  return (
    <main className="min-h-screen bg-[#f7ede2]">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-6 text-[#22543d] drop-shadow-lg">{t("title")}</h1>
          <p className="text-xl text-[#22543d]/80 text-center max-w-3xl mx-auto mb-2">{t("subtitle")}</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="bg-white/90 rounded-2xl shadow-xl p-8 border-2 border-[#fbbf24] backdrop-blur-md max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[#22543d]"><Mail className="text-[#fbbf24]" /> {t("info")}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#fbbf24]/30 p-3 rounded-xl"><MapPin className="text-[#22543d] w-6 h-6" /></div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-[#22543d]">{t("addressTitle")}</h3>
                  <p className="text-[#22543d]/80">{t("address")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#fbbf24]/30 p-3 rounded-xl"><Phone className="text-[#22543d] w-6 h-6" /></div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-[#22543d]">{t("phoneTitle")}</h3>
                  <p className="text-[#22543d]/80">{t("phone")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#fbbf24]/30 p-3 rounded-xl"><Mail className="text-[#22543d] w-6 h-6" /></div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-[#22543d]">Email</h3>
                  <p className="text-[#22543d]/80">{t("email")}</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[#22543d]">{t("socialTitle")}</h3>
                <div className="flex gap-3 mt-2 overflow-x-auto whitespace-nowrap pb-2 justify-start">
                  <a href="https://t.me/choosePRO" target="_blank" rel="noopener noreferrer" className="bg-[#fbbf24]/30 hover:bg-[#fbbf24]/60 p-3 rounded-xl transition-all flex items-center gap-2 text-[#22543d] hover:text-white font-semibold border border-[#fbbf24]">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9.036 15.956l-.396 3.72c.568 0 .814-.244 1.112-.537l2.664-2.53 5.522 4.03c1.012.557 1.73.264 1.98-.937l3.594-16.8c.328-1.52-.553-2.116-1.54-1.76l-21.6 8.32c-1.48.592-1.464 1.44-.256 1.824l5.522 1.726 12.812-8.06c.6-.376 1.152-.168.7.208z"/></svg>
                    Telegram
                  </a>
                  <a href="https://wa.me/77773927227?text=Здравствуй%20те!" target="_blank" rel="noopener noreferrer" className="bg-[#fbbf24]/30 hover:bg-[#fbbf24]/60 p-3 rounded-xl transition-all flex items-center gap-2 text-[#22543d] hover:text-white font-semibold border border-[#fbbf24]">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.45l-.38-.23-3.67.96.98-3.58-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.28.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
                    WhatsApp
                  </a>
                  <a href="https://www.instagram.com/apro_ltd?igsh=M244ZWE1OXBodnJy" target="_blank" rel="noopener noreferrer" className="bg-[#fbbf24]/30 hover:bg-[#fbbf24]/60 p-3 rounded-xl transition-all flex items-center gap-2 text-[#22543d] hover:text-white font-semibold border border-[#fbbf24]">
                    <Instagram className="w-5 h-5" /> Instagram
                  </a>
                  <a href="https://www.facebook.com/share/1AcG1fceNR/" target="_blank" rel="noopener noreferrer" className="bg-[#fbbf24]/30 hover:bg-[#fbbf24]/60 p-3 rounded-xl transition-all flex items-center gap-2 text-[#22543d] hover:text-white font-semibold border border-[#fbbf24]">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
