import { useTranslations } from "next-intl";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export default function Services() {
  const t = useTranslations("Services");
  const services: Service[] = t.raw("list");

  return (
    <main className="min-h-screen bg-[#f7ede2]">
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">{t("title")}</h1>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="bg-white/90 p-8 rounded-2xl shadow-xl border-2 border-[#fbbf24] flex flex-col items-start w-96 max-w-full">
                <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-xl bg-[#f7ede2] border border-[#fbbf24] shadow">
                  <Image src={service.icon} alt={service.title} width={48} height={48} className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#22543d]">{service.title}</h3>
                <p className="text-[#22543d]/80 mb-6">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {services.slice(3, 7).map((service, index) => (
              <div key={index} className="bg-white/90 p-8 rounded-2xl shadow-xl border-2 border-[#fbbf24] flex flex-col items-start w-80 max-w-full">
                <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-xl bg-[#f7ede2] border border-[#fbbf24] shadow">
                  <Image src={service.icon} alt={service.title} width={48} height={48} className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#22543d]">{service.title}</h3>
                <p className="text-[#22543d]/80 mb-6">{service.description}</p>
              </div>
            ))}
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