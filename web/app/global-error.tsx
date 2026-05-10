'use client';

import { useEffect } from 'react';

export default function GlobalError({
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
    <html lang="pt">
      <body
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          background: '#F0F4FF',
          color: '#002F6D',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '480px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '12px' }}>
            Erro crítico
          </h1>
          <p style={{ fontSize: '16px', color: '#65676B', marginBottom: '24px' }}>
            Não conseguimos carregar a aplicação. Por favor recarregue a página.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              background: '#FF9202',
              color: 'white',
              fontWeight: 700,
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Tentar novamente
          </button>
          {error.digest && (
            <p style={{ fontSize: '12px', color: '#BEC3CC', marginTop: '24px' }}>
              Ref: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  );
}
