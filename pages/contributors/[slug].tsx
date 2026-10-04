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
  const slugs: TContributor[] = await fetchAPI('/contributors')

  return {
    paths: slugs.map((contributor) => `/contributors/${contributor.slug}`),
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const contributor: TContributor = (
    await fetchAPI(`/contributors?slug=${params?.slug}`)
  )[0]

  const articles: TArticle[] = await fetchAPI(
    `/articles?author.slug=${params?.slug}`
  )

  if (!contributor) return { props: {} }

  return { props: { contributor, articles } }
}

function ContributorPage({
  contributor,
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (!isFallback && !contributor) {
    return <Custom404 />
  }

  const isFeatured = !!contributor?.featured

  const thumbnailUrl = getMediaURL(
    contributor?.featured?.profile_image.formats.thumbnail?.url
  )

  const contributorSocialMedia = (urls: TContributor['urls']) => {
    if (!urls) return []

    const { facebook, twitter, instagram, linkedin } = urls

    return [
      facebook && `https://www.facebook.com/${facebook}`,
      instagram && `https://instagram.com/${instagram}`,
      linkedin && `https://www.linkedin.com/in/${linkedin}`,
      twitter && `https://twitter.com/${twitter}`,
    ].filter((elem) => elem !== null)
  }

  return (
    <Layout>
      <SocialProfileJsonLd
        type="Person"
        name={contributor?.name as string}
        url={`${SITE_URL}/contributors/${contributor?.slug}`}
        sameAs={contributorSocialMedia(contributor?.urls) as []}
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
            item: `${SITE_URL}/contributors/${contributor?.name}`,
          },
        ]}
      />

      <section className="relative mb-14 md:mb-20">
        <div className="border-b pb-8 md:pb-12">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="h-px w-12"
              style={{ backgroundColor: '#D4AF37' }}
            />

            <span
              className="text-[10px] md:text-xs font-bold uppercase tracking-[0.24em]"
              style={{ color: '#8A6500' }}
            >
              The Newsroom
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className={isFeatured ? 'md:col-span-8' : 'md:col-span-10'}>
              <p className="text-xs uppercase tracking-[0.2em] text-primary-50 mb-3">
                Contributor
              </p>

              <h1
                className="text-6xl md:text-8xl leading-[0.82] tracking-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {contributor?.name}
              </h1>

              <p className="mt-5 text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-primary-60">
                {contributor?.role}
              </p>

              {contributor?.urls?.twitter && (
                <ExternalLink
                  to={`https://twitter.com/${contributor?.urls.twitter}`}
                  ariaLabel="Contributor's twitter"
                  className="flex w-max mt-5 items-center opacity-60 hover:opacity-100"
                >
                  <span className="mr-2">
                    <Twitter width="18" height="18" />
                  </span>

                  {contributor?.urls.twitter}
                </ExternalLink>
              )}
            </div>

            {isFeatured && (
              <figure className="md:col-span-4 md:justify-self-end w-40 h-40 md:w-52 md:h-52 relative">
                <Image
                  src={thumbnailUrl}
                  className="object-cover"
                  alt={`${contributor?.name} profile`}
                  layout="fill"
                />

                <div
                  className="absolute -right-3 -bottom-3 h-full w-full border"
                  style={{ borderColor: '#D4AF37' }}
                  aria-hidden="true"
                />
              </figure>
            )}
          </div>
        </div>
      </section>

      {isFeatured && contributor?.featured?.description && (
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-24">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="h-px w-10"
                style={{ backgroundColor: '#D4AF37' }}
              />

              <span
                className="text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{ color: '#8A6500' }}
              >
                About
              </span>
            </div>
          </div>

          <p className="md:col-span-7 md:col-start-6 text-base md:text-lg leading-8 text-primary-80">
            {contributor.featured.description}
          </p>
        </section>
      )}

      <section>
        <div className="flex items-end justify-between border-b pb-3 mb-0">
          <span
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: '#8A6500' }}
          >
            Published Work
          </span>

          <span className="text-[10px] uppercase tracking-[0.16em] text-primary-50">
            {articles?.length || 0}{' '}
            {(articles?.length || 0) === 1 ? 'Story' : 'Stories'}
          </span>
        </div>

        <ArticlesList
          articles={articles || []}
          title="All Contributions"
        />
      </section>
    </Layout>
  )
}

export default ContributorPage
