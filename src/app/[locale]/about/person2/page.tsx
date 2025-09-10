"use client";
import { useTranslations } from 'next-intl';
import Link from "next/link";
import Image from 'next/image';

type Member = { name: string; position: string; photo: string };

export default function Person2Page() {
  const t = useTranslations('Person2');
  const members: Member[] = t.raw('team.members');
  const images = members.map((member) => (member.photo || "/default.jpg").trim());

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 w-full max-w-3xl mx-auto">
        {members.slice(0, 2).map((member: Member, idx: number) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 w-72 transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
          >
            <div className="w-40 h-40 rounded-full border-2 border-[#22543d] flex items-center justify-center mb-4 overflow-hidden bg-white shadow-lg">
              <Image src={images[idx]} alt={member.name} width={160} height={160} className="w-full h-full object-cover rounded-full" />
            </div>
            <h2 className="text-lg font-bold mb-1 text-center">{member.name}</h2>
            <p className="text-gray-600 text-center text-sm">{member.position}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 w-full max-w-5xl mx-auto">
        {members.slice(2).map((member: Member, idx: number) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 w-72 transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
          >
            <div className="w-40 h-40 rounded-full border-2 border-[#22543d] flex items-center justify-center mb-4 overflow-hidden bg-white shadow-lg">
              <Image src={images[idx+2]} alt={member.name} width={160} height={160} className="w-full h-full object-cover rounded-full" />
            </div>
            <h2 className="text-lg font-bold mb-1 text-center">{member.name}</h2>
            <p className="text-gray-600 text-center text-sm">{member.position}</p>
          </div>
        ))}
      </div>
      <Link href="/about" className="mt-4 inline-block bg-[#22543d] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a3a2a] transition">{t('back')}</Link>
    </main>
  );
} 