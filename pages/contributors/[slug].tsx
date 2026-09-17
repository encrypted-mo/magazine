import { ArticlesList } from '@components/article'
import { fetchAPI, getMediaURL } from '@lib/api'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ExternalLink from '@components/ui/Link/ExternalLink'
import Image from 'next/image'
import { Layout } from '@components/common/Layout'
import Custom404 from 'pages/404'
import Twitter from '@components/icons/Twitter'
import { BreadcrumbJsonLd, SocialProfileJsonLd } from 'next-seo'
import { SITE_URL } from '@lib/constants'
export async function getStaticPaths() {
  const contributors: TContributor[] = await fetchAPI('/contributors')
  return {
    paths: contributors.map((contributor) => ({
      params: {
        slug: contributor.slug,
      },
    })),
    fallback: false,
  }
}
export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const contributors: TContributor[] = await fetchAPI(
    `/contributors?slug=${params?.slug}`
  )
  const contributor = contributors[0]
  const articles: TArticle[] = await fetchAPI(
    `/articles?author.slug=${params?.slug}`
  )
  if (!contributor) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      contributor,
      articles,
    },
  }
}
function ContributorPage({
  contributor,
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()
  if (!isFallback && !contributor) {
    return <Custom404 />
  }
  const profileImage = contributor?.featured?.profile_image?.formats?.thumbnail?.url
  const imageUrl = profileImage ? getMediaURL(profileImage) : ''
  const bio = contributor?.featured?.description
  const contributorSocialMedia = (urls: TContributor['urls']) => {
    if (!urls) return []
    const { facebook, twitter, instagram, linkedin } = urls
    return [
      facebook,
      twitter,
      instagram,
      linkedin,
    ].filter(Boolean) as string[]
  }
  return (
    <Layout>
      <SocialProfileJsonLd
        type="Person"
        name={contributor?.name as string}
        url={`${SITE_URL}/contributors/${contributor?.slug}`}
        sameAs={contributorSocialMedia(contributor?.urls)}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Contributors',
            item: `${SITE_URL}/contributors`,
          },
          {
            position: 2,
            name: contributor?.name as string,
            item: `${SITE_URL}/contributors/${contributor?.slug}`,
          },
        ]}
      />
      <section className="text-center py-4">
        {imageUrl && (
          <figure className="relative w-32 h-32 mx-auto my-6">
            <Image
              src={imageUrl}
              className="rounded-full object-cover"
              alt={`${contributor?.name} profile`}
              layout="fill"
            />
          </figure>
        )}
        <h1 className="serif mt-0 text-2xl">
          {contributor?.name}
        </h1>
        <p className="text-sm font-serif uppercase mb-2">
          {contributor?.role}
        </p>
        {contributor?.urls?.twitter && (
          <ExternalLink
            to={contributor.urls.twitter}
            ariaLabel="Contributor's Twitter"
            className="flex w-max mx-auto items-center opacity-60 hover:opacity-100"
          >
            <span className="mr-2">
              <Twitter width="18" height="18" />
            </span>
            Twitter / X
          </ExternalLink>
        )}
        {bio && (
          <div className="text-center py-2 leading-relaxed mt-8 lg:w-4/6 lg:mx-auto">
            <p>{bio}</p>
          </div>
        )}
      </section>
      <ArticlesList
        articles={articles || []}
        title="All contributions"
      />
    </Layout>
  )
}
export default ContributorPage
