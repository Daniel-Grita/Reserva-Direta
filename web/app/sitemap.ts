import type { MetadataRoute } from 'next';
import { serviceDetails, type ServiceSlug } from '@/lib/constants';

const BASE = 'https://reservadireta.pt';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const slugs = Object.keys(serviceDetails) as ServiceSlug[];

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/quem-somos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/a-nossa-solucao`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/servicos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/casos-de-uso`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE}/servicos/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}
