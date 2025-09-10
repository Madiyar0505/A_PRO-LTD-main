"use client";

import React, { useState } from 'react';

const socials = [
  {
    href: 'https://wa.me/77773927227?text=Здравствуй%20те!',
    bg: 'bg-[#25D366]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.993.583 3.85 1.59 5.41L2 22l4.71-1.56A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.61 0-3.13-.39-4.45-1.08l-.32-.17-2.8.93.93-2.72-.18-.29A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.29-5.71c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.62.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.25-.01-.35-.05-.1-.44-1.07-.6-1.47-.16-.39-.32-.34-.44-.35-.11-.01-.25-.01-.39-.01-.13 0-.35.05-.53.25-.18.2-.7.68-.7 1.65 0 .97.7 1.91.8 2.05.1.13 1.38 2.12 3.36 2.89.47.16.84.25 1.13.32.47.1.9.09 1.24.05.38-.05 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.09-.13-.13-.38-.23z" fill="#fff"/></svg>
    ),
    label: 'WhatsApp',
  },
  {
    href: 'https://t.me/choosePRO',
    bg: 'bg-[#229ED9]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9.036 15.956l-.398 4.013c.57 0 .816-.244 1.113-.537l2.67-2.537 5.537 4.04c1.014.558 1.74.264 1.995-.94l3.62-16.98c.33-1.56-.567-2.17-1.58-1.8L1.36 9.36c-1.54.6-1.52 1.46-.263 1.85l4.13 1.29 9.57-6.04c.45-.29.86-.13.52.16l-7.75 6.99z" fill="#fff"/></svg>
    ),
    label: 'Telegram',
  },
  {
    href: 'https://www.facebook.com/share/1AcG1fceNR/',
    bg: 'bg-[#1877F3]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" fill="#fff"/></svg>
    ),
    label: 'Facebook',
  },
  {
    href: 'https://youtube.com/@a-pro-ltd?si=8nv6Xkh2nQL0GHR3',
    bg: 'bg-gradient-to-tr from-pink-500 via-red-400 to-yellow-400',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="7" fill="url(#ig)"/><defs><linearGradient id="ig" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f09433"/><stop offset="0.25" stopColor="#e6683c"/><stop offset="0.5" stopColor="#dc2743"/><stop offset="0.75" stopColor="#cc2366"/><stop offset="1" stopColor="#bc1888"/></linearGradient></defs><path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.8A3 3 0 1 1 12 9a3 3 0 0 1 0 6zm5.2-8.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" fill="#fff"/></svg>
    ),
    label: 'YouTube',
  },
];

export default function SocialButtons() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end gap-0">
      {/* Socials */}
      <div className={`flex flex-col items-end gap-3 mb-2 transition-all duration-500 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}`}
        style={{ marginBottom: open ? 0 : -16 }}>
          {socials.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={`w-12 h-12 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition-all duration-300 ${s.bg}`}
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      {/* Main simple button */}
      <button
        aria-label="Open socials"
        onClick={() => setOpen((v) => !v)}
        className="w-16 h-16 flex items-center justify-center rounded-full shadow-2xl bg-[#25D366] hover:bg-[#128C7E] transition-all duration-300"
        style={{ zIndex: 2 }}
      >
        {/* Chat icon */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#25D366"/><path d="M7 10.5C7 8.567 8.567 7 10.5 7h3C15.433 7 17 8.567 17 10.5c0 1.933-1.567 3.5-3.5 3.5h-1.086l-1.707 1.707A1 1 0 019 14.293V14c-1.104 0-2-.896-2-2v-1.5z" fill="#fff"/></svg>
      </button>
    </div>
  );
} 