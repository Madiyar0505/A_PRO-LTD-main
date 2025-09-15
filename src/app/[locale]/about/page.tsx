"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from 'next/navigation';

type Member = { name: string; position: string; photo: string };

export default function About() {
  const t = useTranslations("About");
  const members: Member[] = t.raw('team.members').filter((member: Member) => member.name.trim() !== "Bakhyt Zhumadilova");
  const { locale } = useParams();

  return (
    <main className="max-w-4xl mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 flex justify-center">
        <div className="bg-white rounded-3xl border-2 border-[#fbbf24] shadow-xl px-6 py-10 max-w-3xl w-full flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center mb-4 text-[#22543d]">{t('hero.title')}</h1>
          <div className="w-20 h-1 bg-[#fbbf24] rounded mb-6" />
          <p className="text-xl text-[#22543d]/90 text-center max-w-2xl">
            {t('hero.desc')}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 flex justify-center">
        <div className="bg-white rounded-3xl border-2 border-[#fbbf24] shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-4xl w-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl bg-[#fff7e6] border-4 border-[#fbbf24] shadow-lg flex items-center justify-center">
              <Image
                src="/images/logo0.jpg"
                alt={t('aboutImageAlt')}
                width={224}
                height={224}
                className="object-contain w-48 h-48 md:w-56 md:h-56"
              />
            </div>
          </div>
          {/* Mission & Vision */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-[#22543d]">{t('mission.title')}</h2>
              <div className="w-16 h-1 bg-[#fbbf24] rounded mb-4 mx-auto md:mx-0" />
              <p className="text-lg text-[#22543d]/90">{t('mission.desc')}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2 text-[#22543d]">{t('vision.title')}</h2>
              <div className="w-16 h-1 bg-[#fbbf24] rounded mb-4 mx-auto md:mx-0" />
              <p className="text-lg text-[#22543d]/90">{t('vision.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#22543d] text-center">{t('team.title')}</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {members.map((member: Member) => {
              const trimmedName = member.name.trim();
              let personSlug = "";
              if (
                ["Айнур Ишимгалиева", "Айнұр Ишимғалиева", "Ainur Ishimgaliyeva"].includes(trimmedName)
              ) {
                personSlug = "person1";
              } else if (
                ["Рустем Жантенов", "Рүстем Жантенов", "Rustem Zhantenov"].includes(trimmedName)
              ) {
                personSlug = "person2";
              } else if (
                ["Адам Ишимгалиев", "Адам Ишимғалиев", "Adam Ishimgaliyev"].includes(trimmedName)
              ) {
                personSlug = "person3";
              }
              const cardContent = (
                <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 w-80 max-w-full">
                  <div className="w-40 h-40 rounded-full border-2 border-[#22543d] flex items-center justify-center mb-4 overflow-hidden bg-white shadow-lg">
                    <Image src={member.photo || '/default.jpg'} alt={member.name} width={160} height={160} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h2 className="text-lg font-bold mb-1 text-center">{member.name}</h2>
                  <p className="text-gray-600 text-center text-sm">{member.position}</p>
                </div>
              );
              return personSlug ? (
                <Link
                  href={`/${locale}/about/${personSlug}`}
                  target="_blank"
                  className="hover:scale-105 transition-transform"
                >
                  {cardContent}
                </Link>
              ) : (
                <div>{cardContent}</div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
} 