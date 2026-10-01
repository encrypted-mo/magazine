import Link from 'next/link'
import { Markdown } from '@components/common/Markdown'
import AuthorCard from './AuthorCard'
import { Date } from '@components/ui/Date'
import ActionButtons from './ActionButtons'
import { getMediaURL } from '@lib/api'
import Image from 'next/image'

function Article({ article }: { article: TArticle | undefined }) {
  if (!article) return <p>Something went wrong</p>

  return (
    <article className="pb-16">
      <header className="pt-8 pb-12 md:pt-14 md:pb-16">
        <div className="mx-auto max-w-4xl">
          <Link href={`/${article.category.slug}`}>
            <a className="inline-flex items-center gap-2 uppercase text-xs font-bold tracking-widest text-accent hover:opacity-70">
              <span
                aria-hidden="true"
                className="inline-block h-2 w-2 rotate-45 bg-accent"
              />
              {article.category.title}
            </a>
          </Link>

          <h1 className="serif mt-5 text-4xl leading-tight md:text-6xl md:leading-tight">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center text-sm text-primary-60">
            <span>
              By{' '}
              <Link href={`/contributors/${article.author.slug}`}>
                <a className="font-bold text-primary hover:underline">
                  {article.author.name}
                </a>
              </Link>
            </span>

            <span className="mx-3 text-accent" aria-hidden="true">
              ·
            </span>

            <Date date={article.published_at as string} />
          </div>

          <div className="mt-6">
            <ActionButtons article={article} />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl md:mt-14">
          <div className="relative overflow-hidden bg-primary-05">
            <Image
              src={getMediaURL(
                article.cover.formats.medium?.url || article.cover.url
              )}
              alt={article.cover.alternativeText || article.title}
              width={article.cover.width}
              height={article.cover.height}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          {article.cover.alternativeText && (
            <p className="mt-3 text-xs text-primary-60">
              {article.cover.alternativeText}
            </p>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-3xl">
        <Markdown content={article.content} />
      </div>

      <footer className="mx-auto mt-20 max-w-3xl border-t border-primary-10 pt-8 md:mt-28 md:pt-10">
        <div className="mb-4 uppercase text-xs font-bold tracking-widest text-accent">
          About the author
        </div>

        <AuthorCard author={article.author} />

        <div className="mt-6">
          <ActionButtons article={article} />
        </div>
      </footer>
    </article>
  )
}

export default Article
