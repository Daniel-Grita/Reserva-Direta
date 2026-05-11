import type { MetadataRoute } from 'next';

const BASE = 'https://reservadireta.pt';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/quem-somos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/a-nossa-solucao`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/servicos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/casos-de-uso`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
