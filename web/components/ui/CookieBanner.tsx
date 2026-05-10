'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'rd-cookie-ack';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    // One-shot post-mount check: localStorage is client-only, so this is the
    // earliest we can decide whether to render the banner.
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // no-op
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso sobre cookies"
      className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:right-4 sm:bottom-4 sm:max-w-sm z-40 bg-navy text-white rounded-card-lg shadow-card-hover p-5"
    >
      <p className="text-body-sm font-body text-white/90 mb-4">
        Utilizamos apenas cookies essenciais ao funcionamento do site. Não usamos
        cookies de rastreamento ou publicidade.{' '}
        <Link
          href="/politica-privacidade"
          className="underline underline-offset-2 hover:text-orange transition-colors duration-base"
        >
          Saber mais
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={dismiss}
        className="w-full bg-orange text-white text-button font-body font-bold px-4 py-2.5 rounded-btn hover:opacity-90 transition-opacity duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
      >
        OK, entendido
      </button>
    </div>
  );
}
