import { Date } from '@components/ui/Date'
import { getMediaURL } from '@lib/api'
import Link from 'next/link'
import s from '../ArticleCard/ArticleCard.module.css'
import cn from 'classnames'
import Image from 'next/image'
import ArticleCardTop from '../ArticleCard/ArticleCardTop'
import ActionButtons from '../Article/ActionButtons'

const ArticlesHero = ({ articles }: { articles: TArticle[] }) => {
  if (!articles.length) return null

  const heroArticle = articles[0]
  const secondaryArticles = articles.slice(1, 4)

  return (
    <section className="mb-8 lg:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <article className={s.hero}>
            <Link href={`/articles/${heroArticle.slug}`}>
              <a aria-label={`Link to ${heroArticle.title}`}>
                <div className={s.cover}>
                  <Image
                    src={getMediaURL(
                      heroArticle.cover.formats.medium?.url ||
                        heroArticle.cover.url
                    )}
                    alt={heroArticle.cover.alternativeText || ''}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </a>
            </Link>

            <section className="pt-7">
              <Link href={`/${heroArticle.category.slug}`}>
                <a className="inline-flex items-center uppercase text-xs font-bold tracking-widest text-accent hover:opacity-70">
                  <span
                    className="mr-2 inline-block w-1.5 h-1.5"
                    style={{
                      backgroundColor: 'var(--accent)',
                      transform: 'rotate(45deg)',
                    }}
                  />
                  {heroArticle.category.title}
                </a>
              </Link>

              <Link href={`/articles/${heroArticle.slug}`}>
                <a>
                  <h1
                    className={cn(
                      s.title,
                      'serif text-3xl md:text-4xl lg:text-5xl leading-tight overflow-hidden max-h-40 mt-4 mb-3 hover:underline'
                    )}
                  >
                    {heroArticle.title}
                  </h1>
                </a>
              </Link>

              <div className="flex flex-wrap items-center text-sm text-primary-60">
                By{' '}
                <Link href={`/contributors/${heroArticle.author.slug}`}>
                  <a className="pl-1 pr-3 font-bold text-primary hover:underline">
                    {heroArticle.author.name}
                  </a>
                </Link>
                <span className="text-primary-20 mr-3">·</span>
                <Date
                  className="text-primary-60"
                  date={heroArticle.published_at as string}
                />
              </div>
            </section>

            <ActionButtons article={heroArticle} />
          </article>
        </div>

        <div className="lg:col-span-5 lg:border-l lg:pl-10 border-primary-10">
          <div className="flex items-center mb-2">
            <span
              className="mr-3 w-2 h-2"
              style={{
                backgroundColor: 'var(--accent)',
                transform: 'rotate(45deg)',
              }}
            />

            <h2 className="uppercase text-xs font-bold tracking-widest">
              Top Stories
            </h2>
          </div>

          {secondaryArticles.map((article, index) => (
            <ArticleCardTop
              article={article}
              index={index + 2}
              key={article.slug}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArticlesHero
