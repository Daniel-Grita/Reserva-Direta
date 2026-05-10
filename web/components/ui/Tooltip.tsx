'use client';

import { useId, type ReactNode } from 'react';

type Props = {
  term: ReactNode;
  definition: string;
};

export default function Tooltip({ term, definition }: Props) {
  const id = useId();
  return (
    <span className="group/tip relative inline-block">
      <span
        tabIndex={0}
        role="button"
        aria-label={typeof term === 'string' ? `${term}: ${definition}` : definition}
        aria-describedby={id}
        title={definition}
        className="border-b border-dotted border-current cursor-help focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 rounded-sm"
      >
        {term}
      </span>
      <span
        id={id}
        role="tooltip"
        className="pointer-events-none absolute left-1/2 bottom-full z-20 mb-2 w-64 -translate-x-1/2 rounded-card bg-navy px-3 py-2 text-left text-body-sm font-body font-normal text-white shadow-card-hover opacity-0 transition-opacity duration-base group-hover/tip:opacity-100 group-focus-within/tip:opacity-100 motion-reduce:transition-none"
      >
        {definition}
      </span>
    </span>
  );
}
