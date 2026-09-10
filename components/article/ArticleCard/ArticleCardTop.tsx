import { Date } from '@components/ui/Date'
import Link from 'next/link'
import s from './ArticleCard.module.css'
import cn from 'classnames'

type Props = {
  article: TArticle
  index: number
}

const ArticleCardTop = ({ article, index }: Props) => {
  return (
    <article className={s.top}>
      <div className={s.topNumber}>{String(index).padStart(2, '0')}</div>

      <section>
        <Link href={`/articles/${article.slug}`}>
          <a>
            <h3
              className={cn(
                s.title,
                'serif text-xl md:text-2xl leading-tight overflow-hidden max-h-24 mb-3 hover:underline'
              )}
            >
              {article.title}
            </h3>
          </a>
        </Link>

        <div className="text-xs flex flex-wrap items-center text-primary-60">
          <p>
            By{' '}
            <Link href={`/contributors/${article.author.slug}`}>
              <a className="font-bold text-primary hover:underline">
                {article.author.name}
              </a>
            </Link>
          </p>

          <span className="mx-2 text-primary-20">·</span>

          <Link href={`/${article.category.slug}`}>
            <a className="text-accent hover:underline">
              {article.category.title}
            </a>
          </Link>

          <span className="mx-2 text-primary-20">·</span>

          <Date date={article.published_at as string} />
        </div>
      </section>
    </article>
  )
}

export default ArticleCardTop
