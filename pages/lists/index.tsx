import { ArticlesList } from '@components/article'
import { Layout } from '@components/common/Layout'
import Bookmark from '@components/icons/Bookmark'
import { useList } from '@lib/hooks/use-list'

const ListsPage = () => {
  const { list } = useList()
  const savedArticles = list || []

  return (
    <Layout>
      <header className="border-b py-8 md:py-10">
        <div className="mb-4 flex items-center gap-3">
          <span
            className="h-px w-12"
            style={{ backgroundColor: '#D4AF37' }}
            aria-hidden="true"
          />

          <span
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.24em]"
            style={{ color: '#8A6500' }}
          >
            Your Library
          </span>
        </div>

        <h1
          className="text-4xl md:text-5xl leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Saved Articles
        </h1>

        <p className="mt-3 max-w-xl text-sm md:text-base leading-7 text-primary-70">
          Stories you have saved to return to whenever you are ready.
        </p>
      </header>

      {savedArticles.length > 0 ? (
        <div className="pt-4">
          <ArticlesList
            articles={savedArticles}
            title={
              savedArticles.length === 1
                ? '1 Saved Article'
                : `${savedArticles.length} Saved Articles`
            }
            variant="lists"
          />
        </div>
      ) : (
        <section
          className="flex flex-1 flex-col items-center justify-center py-16 text-center md:py-24"
          aria-labelledby="empty-saved-heading"
        >
          <div
            className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border"
            style={{ borderColor: '#D4AF37' }}
          >
            <Bookmark className="h-6 w-6" />
          </div>

          <h2
            id="empty-saved-heading"
            className="text-3xl md:text-4xl leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Nothing saved just yet.
          </h2>

          <p className="mt-3 max-w-md text-sm md:text-base leading-7 text-primary-60">
            Found a story worth keeping? Tap the bookmark icon on an article
            to save it here and come back to it later.
          </p>
        </section>
      )}
    </Layout>
  )
}

export default ListsPage
