import { Date } from '@components/ui/Date'
import { getMediaURL } from '@lib/api'
import Link from 'next/link'
import s from './ArticleCard.module.css'
import cn from 'classnames'
import Image from 'next/image'

type Props = {
  article: TArticle
  variant?: 'default' | 'carousel'
}

const ArticleCard = ({ article, variant = 'default' }: Props) => {
  const rootClassName = cn({
    [s.default]: variant === 'default',
    [s.carousel]: variant === 'carousel',
  })

  return (
    <article className={rootClassName}>
      <Link href={`/articles/${article.slug}`}>
        <a aria-label={`Link to ${article.title}`} className={s.cover}>
          <Image
            src={getMediaURL(
              article.cover.formats.medium?.url || article.cover.url
            )}
            alt={article.cover.alternativeText || ''}
            layout="fill"
            className="object-cover"
          />
        </a>
      </Link>

      <section className="pt-5">
        <Link href={`/${article.category.slug}`}>
          <a className="inline-block uppercase text-xs font-bold tracking-widest text-accent hover:opacity-70">
            {article.category.title}
          </a>
        </Link>

        <Link href={`/articles/${article.slug}`}>
          <a>
            <h3
              className={cn(
                s.title,
                'serif text-2xl md:text-3xl leading-tight overflow-hidden max-h-28 mt-3 hover:underline'
              )}
            >
              {article.title}
            </h3>
          </a>
        </Link>

        <div className="text-sm mt-3 text-primary-60">
          By{' '}
          <Link href={`/contributors/${article.author.slug}`}>
            <a className="font-bold text-primary hover:underline">
              {article.author.name}
            </a>
          </Link>
        </div>

        <Date
          className="text-sm text-primary-60"
          date={article.published_at as string}
        />
      </section>
    </article>
  )
}

export default ArticleCard
