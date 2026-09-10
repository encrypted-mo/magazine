import { ArticleCard } from '..'
import ArticleCardLists from '../ArticleCard/ArticleCardLists'
import ArticleCardTop from '../ArticleCard/ArticleCardTop'

type Props = {
  articles: TArticle[]
  title: string
  variant?: 'default' | 'lists' | 'top'
  className?: string
}

const ArticlesList = ({
  articles,
  title,
  variant = 'default',
  className = '',
}: Props) => {
  if (!articles.length) return null

  const renderCards = () => {
    if (variant === 'lists') {
      return articles.map((article) => (
        <ArticleCardLists article={article} key={article.slug} />
      ))
    }

    if (variant === 'top') {
      return articles.map((article, index) => (
        <ArticleCardTop
          article={article}
          index={index + 1}
          key={article.slug}
        />
      ))
    }

    return articles.map((article) => (
      <ArticleCard article={article} key={article.slug} />
    ))
  }

  return (
    <section className={className}>
      <div className="relative flex items-center py-5 border-b border-primary-20">
        <span
          className="mr-3 w-2 h-2"
          style={{
            backgroundColor: 'var(--accent)',
            transform: 'rotate(45deg)',
          }}
        />

        <h2 className="uppercase text-xs font-bold tracking-widest">{title}</h2>
      </div>

      {renderCards()}
    </section>
  )
}

export default ArticlesList
