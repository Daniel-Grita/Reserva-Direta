'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main" tabIndex={-1} className="w-full min-h-screen flex items-center justify-center bg-light-blue px-6 py-section-y focus:outline-none">
      <div className="max-w-xl text-center space-y-6">
        <p className="text-label font-body uppercase tracking-label text-orange-text">
          Algo correu mal
        </p>
        <h1 className="text-display-md lg:text-display-lg font-display text-navy text-balance">
          Tivemos um problema inesperado.
        </h1>
        <p className="text-body-base font-body text-n-600 max-w-md mx-auto">
          Tente recarregar a página. Se o problema persistir, escreva-nos para{' '}
          <a
            href="mailto:agenciareservadireta@gmail.com"
            className="text-navy font-bold underline underline-offset-2"
          >
            agenciareservadireta@gmail.com
          </a>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            type="button"
            onClick={reset}
            className="bg-orange text-white text-button font-body font-bold px-6 py-3 rounded-btn hover:opacity-90 transition-opacity duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
          >
            Tentar novamente
          </button>
          <Link
            href="/"
            className="border border-navy text-navy text-button font-body font-bold px-6 py-3 rounded-btn hover:bg-navy hover:text-white transition-colors duration-base text-center"
          >
            Voltar ao início
          </Link>
        </div>
        {error.digest && (
          <p className="text-caption font-body text-n-400 pt-4">Ref: {error.digest}</p>
        )}
      </div>
    </main>
  );
}
