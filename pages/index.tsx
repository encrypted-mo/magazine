import { InferGetStaticPropsType } from 'next'
import { ArticlesCarousel, ArticlesList } from '@components/article'
import { fetchAPI, getNavigation } from '@lib/api'
import { Layout } from '@components/common/Layout'
import { useMediaQuery } from '@lib/hooks/use-media-queries'
import ArticlesHero from '@components/article/ArticlesHero/ArticlesHero'

export async function getStaticProps() {
  const articles: TArticle[] = await fetchAPI('/articles')
  const navigation: TNavigation = await getNavigation()

  return {
    props: {
      articles,
      navigation,
    },
  }
}

function Home({
  articles,
  navigation,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isTablet = useMediaQuery(1023)

  const topStories = articles.slice(0, 4)
  const recentArticles = articles.slice(4, 9)
  const featuredArticles = articles.slice(9, 14)
  const popularArticles = articles.slice(14, 19)
  const moreArticles = articles.slice(19, 24)

  return (
    <Layout navigation={navigation}>
      {isTablet ? (
        <ArticlesCarousel title="Top Stories" articles={topStories} />
      ) : (
        <ArticlesHero articles={topStories} />
      )}

      <ArticlesList articles={recentArticles} title="Recent" />

      <div className="lg:py-24 lg:flex lg:w-full lg:gap-28 lg:mx-auto">
        <ArticlesList
          articles={featuredArticles}
          title="Featured"
          variant="top"
          className="lg:w-1/2"
        />

        <ArticlesList
          articles={popularArticles}
          title="Popular"
          variant="top"
          className="lg:w-1/2"
        />
      </div>

      <ArticlesList articles={moreArticles} title="More Articles" />
    </Layout>
  )
}

export default Home
