import { blog } from '@/lib/constants';
import SectionHeader from '../ui/SectionHeader';
import { LinkButton } from '../ui/Button';
import { withHighlight } from '@/lib/highlight';
import { client } from '@/sanity/lib/client';
import { POSTS_QUERY, PostSummary, BLOG_FALLBACK_IMAGE } from '@/sanity/lib/queries';
import Link from 'next/link';

type ArticleCard = {
  _id?: string;
  title: string;
  slug?: string;
  image: { src: string; alt: string };
};

export default async function BlogPreview() {
  let posts: PostSummary[] = [];

  try {
    posts = await client.fetch(POSTS_QUERY);
  } catch (err) {
    console.error('Error fetching blog posts:', err instanceof Error ? err.message : err);
  }

  const articles: ArticleCard[] = posts.length > 0
    ? posts.slice(0, 2).map((post) => ({
        _id: post._id,
        title: post.title,
        slug: post.slug.current,
        image: { src: post.imageUrl ?? BLOG_FALLBACK_IMAGE, alt: post.title },
      }))
    : blog.cards.map((card) => ({ title: card.title, image: card.image }));

  return (
    <section id="blog" className="bg-cream py-section-y">
      <div className="section-container">
        <div className="reveal-up">
          <SectionHeader
            className="!max-w-md"
            label={blog.label}
            heading={blog.heading}
            intro={withHighlight(blog.intro, 'guias práticos')}
          />
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {articles.map((article, idx) => (
            <div
              key={article._id ?? `fallback-${idx}`}
              className="bg-white border border-n-200 rounded-card overflow-hidden shadow-card sm:hover:shadow-card-hover sm:hover:-translate-y-1 sm:hover:scale-[1.02] transition-[transform,box-shadow] duration-slow ease-in-out"
            >
              <div className="w-full aspect-[16/9] bg-n-300 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.image.src}
                  alt={article.image.alt}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-card-title font-display text-navy mb-3 leading-tight">
                  {article.title}
                </h3>
                {article.slug ? (
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-button font-body font-bold text-orange-text sm:hover:opacity-80 transition-opacity"
                  >
                    Ler artigo →
                  </Link>
                ) : (
                  <span
                    aria-disabled="true"
                    className="text-button font-body font-bold text-n-400 cursor-not-allowed select-none"
                    title="Em breve"
                  >
                    Ler artigo →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-up">
          <LinkButton href={blog.cta.href} variant="dark">
            {blog.cta.label}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
