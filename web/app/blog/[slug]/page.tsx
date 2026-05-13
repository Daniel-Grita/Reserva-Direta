import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import ScrollProgress from '@/components/ui/ScrollProgress';
import { PortableText } from '@/components/seo/PortableText';
import { client } from '@/sanity/lib/client';
import {
  POSTS_QUERY,
  BLOG_FALLBACK_IMAGE,
  formatPublishedDate,
  getPost,
  estimateReadTime,
} from '@/sanity/lib/queries';
import Link from 'next/link';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post ? `${post.title} — Reserva Direta` : 'Blog Post',
    description: post
      ? `${post.title} - artigo sobre estratégias e recursos para alojamentos`
      : 'Blog post from Reserva Direta',
  };
}

export async function generateStaticParams() {
  const posts: Array<{ slug: { current: string } }> = await client.fetch(POSTS_QUERY);
  return posts.map((post) => ({ slug: post.slug.current }));
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <main id="main" tabIndex={-1} className="w-full focus:outline-none">
        <Navbar />
        <section className="pt-page-top py-section-y min-h-[60vh] flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-label tracking-label text-orange-text uppercase mb-4">404</p>
            <h1 className="text-display-md font-display text-navy mb-4">Artigo não encontrado</h1>
            <p className="text-body text-n-600 mb-8 max-w-md mx-auto">
              O artigo que procura pode ter sido removido ou o URL está incorreto.
            </p>
            <Link href="/blog" className="text-navy font-bold hover:text-n-600 transition-colors">
              ← Voltar ao Blog
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const imageUrl = post.imageUrl ?? BLOG_FALLBACK_IMAGE;
  const readTime = estimateReadTime(post.body);

  return (
    <main id="main" tabIndex={-1} className="w-full focus:outline-none">
      <ScrollProgress />
      <Breadcrumbs
        items={[
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug.current}` },
        ]}
      />
      <Navbar />

      {/* All content — centered narrow column */}
      <section className="bg-white pt-[calc(72px+48px)] pb-20">
        <div className="mx-auto max-w-[780px] px-6">

          {/* Contained hero image */}
          <div className="w-full aspect-[16/9] rounded-card-lg overflow-hidden bg-n-300 mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt={post.imageAlt ?? post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Categories */}
          {post.categories?.length ? (
            <div className="flex flex-wrap gap-2 mb-5">
              {post.categories.map((cat) => (
                <Link
                  key={cat._id}
                  href={`/blog?category=${cat.slug.current}`}
                  className="px-3 py-1 bg-cream text-orange-text text-label font-bold rounded-full tracking-label uppercase hover:bg-n-200 transition-colors"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          ) : null}

          {/* Title */}
          <h1 className="text-display-md font-display text-navy leading-tight mb-5">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-body-sm text-n-500 pb-8 mb-10 border-b border-n-200">
            {post.publishedAt && (
              <time dateTime={post.publishedAt}>{formatPublishedDate(post.publishedAt)}</time>
            )}
            <span className="text-n-300" aria-hidden>·</span>
            <span>{readTime} min de leitura</span>
            {post.author && (
              <>
                <span className="text-n-300" aria-hidden>·</span>
                <span>
                  Por{' '}
                  <Link
                    href={`/blog/author/${post.author.slug.current}`}
                    className="text-navy font-medium hover:text-n-600 transition-colors"
                  >
                    {post.author.name}
                  </Link>
                </span>
              </>
            )}
          </div>

          {/* Body */}
          <PortableText value={post.body} />

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-n-200">
            <Link
              href="/blog"
              className="text-button font-bold text-navy hover:text-orange-text transition-colors"
            >
              ← Voltar ao Blog
            </Link>
          </div>

        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
