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
    paths: (contributors || []).map(
      (contributor) => `/contributors/${contributor.slug}`
    ),
    fallback: 'blocking',
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const slug = params?.slug

  if (!slug) {
    return {
      notFound: true,
      revalidate: 60,
    }
  }

  const [contributors, articles]: [TContributor[], TArticle[]] =
    await Promise.all([
      fetchAPI(`/contributors?slug=${encodeURIComponent(slug)}`),
      fetchAPI(`/articles?author.slug=${encodeURIComponent(slug)}`),
    ])

  const contributor = contributors?.[0]

  if (!contributor) {
    return {
      notFound: true,
      revalidate: 60,
    }
  }

  return {
    props: {
      contributor,
      articles: articles || [],
    },
    revalidate: 60,
  }
}

function ContributorPage({
  contributor,
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return (
      <Layout>
        <section className="py-16 md:py-24 text-center">
          <p
            className="text-2xl md:text-3xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Preparing this profile…
          </p>
        </section>
      </Layout>
    )
  }

  if (!contributor) {
    return <Custom404 />
  }

  const contributorArticles = articles || []
  const isFeatured = Boolean(contributor.featured)

  const imagePath =
    contributor.featured?.profile_image?.formats?.thumbnail?.url ||
    contributor.featured?.profile_image?.url

  const imageUrl = imagePath ? getMediaURL(imagePath) : ''

  const contributorSocialMedia = (urls: TContributor['urls']) => {
    if (!urls) return []

    const { facebook, twitter, instagram, linkedin } = urls

    return [
      facebook && `https://www.facebook.com/${facebook}`,
      instagram && `https://instagram.com/${instagram}`,
      linkedin && `https://www.linkedin.com/in/${linkedin}`,
      twitter && `https://twitter.com/${twitter}`,
    ].filter(Boolean) as string[]
  }

  return (
    <Layout>
      <SocialProfileJsonLd
        type="Person"
        name={contributor.name}
        url={`${SITE_URL}/contributors/${contributor.slug}`}
        sameAs={contributorSocialMedia(contributor.urls)}
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
            name: contributor.name,
            item: `${SITE_URL}/contributors/${contributor.slug}`,
          },
        ]}
      />

      <section className="py-8 md:py-12 text-center">
        {isFeatured && (
          <figure className="relative mx-auto mb-6 h-28 w-28 md:h-36 md:w-36 overflow-hidden rounded-full bg-secondary">
            {imageUrl.trim() !== '' ? (
              <Image
                src={imageUrl}
                alt={`${contributor.name} portrait`}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center text-3xl text-primary-60">
                {contributor.name
                  .split(/\s+/)
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((part) => part.charAt(0).toUpperCase())
                  .join('')}
              </span>
            )}
          </figure>
        )}

        <p className="mb-3 text-xs uppercase tracking-widest text-primary-60">
          Highskul Creatives Contributor
        </p>

        <h1
          className="text-4xl md:text-6xl leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {contributor.name}
        </h1>

        {contributor.role && (
          <p className="mt-2 text-xs md:text-sm uppercase tracking-widest text-primary-60">
            {contributor.role}
          </p>
        )}

        {contributor.urls?.twitter && (
          <div className="mt-4 flex justify-center">
            <ExternalLink
              to={`https://twitter.com/${contributor.urls.twitter}`}
              ariaLabel={`${contributor.name} on Twitter`}
              className="inline-flex items-center text-sm text-primary-60 transition-opacity hover:opacity-70"
            >
              <span className="mr-2">
                <Twitter width="16" height="16" />
              </span>
              @{contributor.urls.twitter}
            </ExternalLink>
          </div>
        )}

        {isFeatured && contributor.featured?.description && (
          <p className="mx-auto mt-6 max-w-2xl text-sm md:text-base leading-7 text-primary-70">
            {contributor.featured.description}
          </p>
        )}
      </section>

      <section
        aria-label={`Stories by ${contributor.name}`}
        className="mt-8 md:mt-12"
      >
        <div className="flex items-end justify-between border-b pb-3">
          <h2 className="text-xs uppercase tracking-widest text-primary-60">
            Published Work
          </h2>

          <span className="text-xs text-primary-50">
            {contributorArticles.length}{' '}
            {contributorArticles.length === 1 ? 'Story' : 'Stories'}
          </span>
        </div>

        {contributorArticles.length > 0 ? (
          <ArticlesList articles={contributorArticles} title="Stories" />
        ) : (
          <div className="py-10 md:py-14 border-b">
            <p
              className="text-2xl md:text-3xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              No stories published yet.
            </p>

            <p className="mt-3 text-sm md:text-base leading-7 text-primary-60">
              Published stories by {contributor.name} will appear here.
            </p>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default ContributorPage
