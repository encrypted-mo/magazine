import { Layout } from '@components/common/Layout'
import Contributor from '@components/contributor/Contributor'
import ContributorFeatured from '@components/contributor/ContributorFeatured'
import { fetchAPI } from '@lib/api'
import { InferGetStaticPropsType } from 'next'

export async function getStaticProps() {
  const authors: TContributor[] = await fetchAPI('/contributors')

  return {
    props: {
      authors: authors || [],
    },
    revalidate: 60,
  }
}

export function ContributorsPage({
  authors,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const contributors = authors || []

  const featured = contributors.filter((contributor) =>
    Boolean(contributor.featured)
  )

  const others = contributors.filter(
    (contributor) => !contributor.featured
  )

  return (
    <Layout>
      <section className="py-8 md:py-12">
        <p className="text-xs uppercase tracking-widest text-primary-60 mb-3">
          Highskul Creatives
        </p>

        <h1
          className="text-5xl md:text-7xl leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Contributors
        </h1>

        <p className="mt-3 max-w-xl text-sm md:text-base leading-7 text-primary-70">
          Meet the writers and creative voices behind our stories.
        </p>
      </section>

      {featured.length > 0 && (
        <section aria-labelledby="featured-contributors-heading" className="mb-12">
          <div className="border-b pb-3 mb-6">
            <h2
              id="featured-contributors-heading"
              className="text-xs uppercase tracking-widest text-primary-60"
            >
              Featured Contributors
            </h2>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {featured.map((contributor) => (
              <ContributorFeatured
                contributor={contributor}
                key={contributor.slug}
              />
            ))}
          </ul>
        </section>
      )}

      {others.length > 0 && (
        <section aria-labelledby="more-contributors-heading" className="mb-12">
          <div className="border-b pb-3 mb-0">
            <h2
              id="more-contributors-heading"
              className="text-xs uppercase tracking-widest text-primary-60"
            >
              More Contributors
            </h2>
          </div>

          <ul>
            {others.map((contributor) => (
              <Contributor
                contributor={contributor}
                key={contributor.slug}
              />
            ))}
          </ul>
        </section>
      )}

      {contributors.length === 0 && (
        <section className="py-10 border-t border-b">
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our newsroom is growing.
          </h2>

          <p className="mt-3 max-w-xl text-sm md:text-base leading-7 text-primary-60">
            New contributors will appear here as they join Highskul Creatives.
          </p>
        </section>
      )}
    </Layout>
  )
}

export default ContributorsPage
