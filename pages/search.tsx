import { useRouter } from 'next/router'
// import { useSearch } from '@lib/hooks/use-search'
import { ArticlesList } from '@components/article'
import { fetchAPI } from '@lib/api'
import { InferGetStaticPropsType } from 'next'
import SearchInput from '@components/search/SearchInput'
export async function getStaticProps() {
  const categories: TCategory[] = await fetchAPI('/categories')
  const articles: TArticle[] = await fetchAPI('/articles')
  return { props: { categories, articles } }
}
function SearchPage({
  categories,
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { query } = useRouter()
  const { q, category, sort } = query
  // This hook should work with the API
  // const { isLoading, data } = useSearch<TArticle>('/articles', query)
  // I'm using a filter implementation due heroku sleep problem
  const filteredArticles = articles.filter((a: TArticle) => {
    const stringQuery = decodeURIComponent(q as string).toLowerCase()
    if (category) {
      return (
        a.title.toLowerCase().includes(stringQuery) &&
        a.category.slug === decodeURIComponent(category as string)
      )
    }
    return a.title.toLowerCase().includes(stringQuery)
  })
  const sortedArticles = filteredArticles.sort((a: TArticle, b: TArticle) => {
    const key = 'published_at'
    if (sort === 'desc') return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0
    return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
  })
  return (
    <main className="min-h-screen px-4 pt-8 pb-20 mx-auto md:w-3/4 lg:w-2/3 xl:w-7/12">
      <section className="mb-10 md:mb-14">
        <div className="flex items-center gap-3 mb-5">
          <span
            className="h-px w-12"
            style={{ backgroundColor: '#D4AF37' }}
          />
          <span
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.24em]"
            style={{ color: '#8A6500' }}
          >
            The Archive
          </span>
        </div>
        <h1
          className="text-6xl md:text-8xl leading-[0.82] tracking-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Search
        </h1>
        <p className="mt-5 max-w-xl text-base md:text-lg leading-8 text-primary-70">
          Find stories, ideas and reporting from the HighSkul archive.
        </p>
      </section>
      <section aria-label="Search HighSkul">
        <div className="border-y py-5 md:py-6">
          <SearchInput categories={categories} />
        </div>
      </section>
      {sortedArticles && sortedArticles.length !== 0 ? (
        <section className="mt-10 md:mt-14">
          <ArticlesList
            articles={sortedArticles}
            title={`${sortedArticles.length} ${
              sortedArticles.length > 1 ? 'results' : 'result'
            }`}
          />
        </section>
      ) : (
        <div className="min-h-[280px] flex items-center justify-center text-center">
          <div>
            <div
              className="mx-auto mb-5 h-px w-12"
              style={{ backgroundColor: '#D4AF37' }}
            />
            <p
              className="text-3xl md:text-4xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              We couldn&apos;t find anything.
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-primary-50">
              Try another search
            </p>
          </div>
        </div>
      )}
    </main>
  )
}
export default SearchPage
