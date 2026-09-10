import { fetchAPI, getMediaURL, getNavigation } from '@lib/api'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { Article } from '@components/article'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import ExitPreviewButton from '@components/common/ExitPreviewButton'
import { Layout } from '@components/common/Layout'
import ArrowLeft from '@components/icons/ArrowLeft'
import Custom404 from 'pages/404'
import { Button } from '@components/ui/Button'
import { SITE_LOGO, SITE_NAME, SITE_URL } from '@lib/constants'

export async function getStaticPaths() {
  const articles: TArticle[] = await fetchAPI('/articles')

  return {
    paths: articles.map((article) => `/articles/${article.slug}`),
    fallback: true,
  }
}

export async function getStaticProps({
  params,
  preview = false,
}: GetStaticPropsContext<{ slug: string }>) {
  const article: TArticle = (
    await fetchAPI(
      `/articles?slug=${params?.slug}${
        preview ? '&_publicationState=preview' : ''
      }`
    )
  )[0]

  const navigation: TNavigation = await getNavigation()

  if (!article) {
    return { props: {} }
  }

  return {
    props: {
      preview,
      navigation,
      article,
    },
  }
}

function ArticlePage({
  article,
  navigation,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return null
  }

  if (!article) {
    return <Custom404 />
  }

  const fullURL = `${SITE_URL}/articles/${article.slug}`

  const coverImage = article.cover?.url
    ? {
        url: getMediaURL(article.cover.url),
        width: article.cover.width,
        height: article.cover.height,
        alt: article.cover.alternativeText || article.title,
      }
    : undefined

  const authorURL = `${SITE_URL}/contributors/${article.author.slug}`

  return (
    <Layout navigation={navigation} isMarkdown>
      <NextSeo
        title={article.title}
        description={article.description}
        canonical={fullURL}
        openGraph={{
          title: article.title,
          description: article.description,
          url: fullURL,
          type: 'article',
          article: {
            publishedTime: article.published_at as string,
            modifiedTime: article.updated_at as string,
            section: article.category.title,
            authors: [authorURL],
            tags: [article.category.title],
          },
          ...(coverImage && {
            images: [coverImage],
          }),
        }}
      />

      <ArticleJsonLd
        url={fullURL}
        title={article.title}
        datePublished={article.published_at as string}
        dateModified={article.updated_at as string}
        authorName={[article.author.name]}
        publisherName={SITE_NAME}
        publisherLogo={SITE_LOGO}
        description={article.description || article.title}
        images={coverImage ? [coverImage.url] : []}
      />

      <div className="mx-auto w-full max-w-6xl px-4 pt-4">
        <Button ariaLabel="Go back" href="/" className="-ml-2">
          <ArrowLeft />
        </Button>
      </div>

      <Article article={article} />

      {preview && <ExitPreviewButton />}
    </Layout>
  )
}

export default ArticlePage
