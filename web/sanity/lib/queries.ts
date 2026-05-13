import { defineQuery } from "next-sanity";
import { cache } from "react";
import { client } from "./client";

export const BLOG_FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80';

export const formatPublishedDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('pt-PT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export interface PostSummary {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  imageUrl?: string;
}

export interface Post extends PostSummary {
  author?: {
    name: string;
    slug: { current: string };
  };
  categories?: Array<{
    _id: string;
    title: string;
    slug: { current: string };
  }>;
  imageAlt?: string;
  body: any[];
}

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  "imageUrl": mainImage.asset->url
}`);

export const POST_BY_SLUG_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  author->{
    name,
    slug,
  },
  categories[]->{
    _id,
    title,
    slug,
  },
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  body,
}`);

export const getPost = cache(
  async (slug: string): Promise<Post | null> =>
    client.fetch(POST_BY_SLUG_QUERY, { slug })
);

export function estimateReadTime(body: any[]): number {
  if (!body?.length) return 1;
  const words = body
    .filter(b => b._type === 'block' && Array.isArray(b.children))
    .flatMap((b): any[] => b.children)
    .map((c: any) => c.text ?? '')
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}
