import type { ReactNode } from 'react';

interface PortableTextSpan {
  _key?: string;
  _type: 'span';
  text?: string;
  marks?: string[];
}

interface PortableTextBlock {
  _type: string;
  _key?: string;
  style?: string;
  children?: PortableTextSpan[];
  asset?: { url?: string };
  alt?: string;
}

function renderSpan(span: PortableTextSpan, index: number): ReactNode {
  let node: ReactNode = span.text ?? '';
  if (span.marks?.includes('strong')) node = <strong key={span._key ?? index}>{node}</strong>;
  if (span.marks?.includes('em')) node = <em key={span._key ?? index}>{node}</em>;
  return node;
}

function renderBlock(block: PortableTextBlock, index: number): ReactNode {
  const key = block._key ?? index;

  if (block._type === 'block') {
    const children = block.children?.map((child, i) => renderSpan(child, i)) ?? null;

    switch (block.style) {
      case 'h1':
        return <h1 key={key} className="text-h2 font-display text-navy mt-8 mb-4">{children}</h1>;
      case 'h2':
        return <h2 key={key} className="text-h3 font-display text-navy mt-8 mb-4">{children}</h2>;
      case 'h3':
        return <h3 key={key} className="text-h4 font-display text-navy mt-6 mb-3">{children}</h3>;
      case 'blockquote':
        return (
          <blockquote key={key} className="relative bg-cream rounded-card px-8 py-5 my-6 italic text-n-700">
            <span aria-hidden="true" className="absolute top-1 left-4 text-5xl font-display text-orange/20 leading-none select-none">&ldquo;</span>
            <div className="relative">{children}</div>
          </blockquote>
        );
      default:
        return <p key={key} className="text-body text-n-700 my-4 leading-relaxed">{children}</p>;
    }
  }

  if (block._type === 'image' && block.asset) {
    const assetUrl = block.asset.url?.startsWith('https://cdn.sanity.io/') ? block.asset.url : undefined;
    if (!assetUrl) return null;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img key={key} src={assetUrl} alt={block.alt ?? ''} className="w-full rounded-lg my-8 max-w-2xl" />
    );
  }

  return null;
}

interface PortableTextProps {
  value: PortableTextBlock[];
}

export function PortableText({ value }: PortableTextProps) {
  if (!value?.length) return null;
  return <>{value.map((block, index) => renderBlock(block, index))}</>;
}
