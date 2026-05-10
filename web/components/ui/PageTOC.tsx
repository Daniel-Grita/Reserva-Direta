'use client';

import { useActiveSection } from '@/lib/useActiveSection';

export type TOCItem = { id: string; label: string };

const SCROLL_OFFSET = 88;

export default function PageTOC({ items }: { items: readonly TOCItem[] }) {
  const ids = items.map((it) => it.id);
  const active = useActiveSection(ids) ?? items[0]?.id;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <nav
      aria-label="Índice da página"
      className="hidden 2xl:block fixed left-6 top-28 w-52 z-30"
    >
      <p className="text-label font-body uppercase tracking-label text-n-600 mb-4">
        Nesta página
      </p>
      <ul className="space-y-1 border-l border-n-200">
        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={(e) => handleClick(e, it.id)}
                className={`block -ml-px pl-4 py-1.5 text-body-sm font-body border-l-2 transition-colors duration-base ${
                  isActive
                    ? 'border-orange text-navy font-bold'
                    : 'border-transparent text-n-600 hover:text-navy'
                }`}
              >
                {it.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
