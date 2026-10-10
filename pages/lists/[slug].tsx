import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { get } from 'idb-keyval'

import { Article } from '@components/article'
import { Layout } from '@components/common/Layout'
import ArrowLeft from '@components/icons/ArrowLeft'

function SavedArticlePage() {
  const [article, setArticle] = useState<TArticle | 'loading' | null>(
    'loading'
  )

  const {
    query: { slug },
    isReady,
  } = useRouter()

  useEffect(() => {
    if (!isReady || !slug) return

    let cancelled = false

    const getArticle = async () => {
      setArticle('loading')

      try {
        const articleKey = Array.isArray(slug) ? slug[0] : slug
        const storedArticle = await get(articleKey)

        if (cancelled) return

        if (!storedArticle) {
          setArticle(null)
          return
        }

        const parsedArticle =
          typeof storedArticle === 'string'
            ? JSON.parse(storedArticle)
            : storedArticle

        if (!parsedArticle || typeof parsedArticle !== 'object') {
          setArticle(null)
          return
        }

        setArticle(parsedArticle as TArticle)
      } catch {
        if (!cancelled) {
          setArticle(null)
        }
      }
    }

    getArticle()

    return () => {
      cancelled = true
    }
  }, [isReady, slug])

  return (
    <Layout>
      <div className="mb-8 border-b pb-4">
        <Link href="/lists">
          <a className="inline-flex items-center gap-2 text-sm text-primary-60 transition-opacity hover:opacity-70">
            <ArrowLeft />
            <span>Back to saved articles</span>
          </a>
        </Link>
      </div>

      {article === 'loading' ? (
        <section
          className="flex min-h-[40vh] flex-col items-center justify-center py-12"
          aria-live="polite"
        >
          <span
            className="mb-5 h-px w-12"
            style={{ backgroundColor: '#D4AF37' }}
            aria-hidden="true"
          />

          <p
            className="text-3xl md:text-4xl leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Opening your saved story…
          </p>

          <p className="mt-3 text-sm text-primary-60">
            Just a moment.
          </p>
        </section>
      ) : article ? (
        <Article article={article} />
      ) : (
        <section className="flex min-h-[40vh] flex-col items-start justify-center py-12">
          <div className="mb-5 flex items-center gap-3">
            <span
              className="h-px w-12"
              style={{ backgroundColor: '#D4AF37' }}
              aria-hidden="true"
            />

            <span
              className="text-[10px] md:text-xs font-bold uppercase tracking-[0.24em]"
              style={{ color: '#8A6500' }}
            >
              Saved Articles
            </span>
          </div>

          <h1
            className="text-3xl md:text-4xl leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            This story is unavailable.
          </h1>

          <p className="mt-4 max-w-xl text-sm md:text-base leading-7 text-primary-60">
            We couldn&apos;t retrieve this saved article from your device. It
            may have been removed from local storage. You can return to your
            saved articles and continue reading another story.
          </p>

          <Link href="/lists">
            <a
              className="mt-7 inline-flex items-center border px-5 py-3 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
              style={{ borderColor: '#D4AF37' }}
            >
              Return to saved articles
            </a>
          </Link>
        </section>
      )}
    </Layout>
  )
}

export default SavedArticlePage
