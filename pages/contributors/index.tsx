import { Layout } from '@components/common/Layout'
import Contributor from '@components/contributor/Contributor'
import ContributorFeatured from '@components/contributor/ContributorFeatured'
import EditorialOrnament from '@components/common/EditorialOrnament'
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
      <header className="border-b py-8 md:py-10">
        <div className="mb-4 flex items-center gap-3">
          <EditorialOrnament variant="mark" />

          <span
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.24em]"
            style={{ color: '#8A6500' }}
          >
            The Newsroom
          </span>
        </div>

        <h1
          className="text-4xl md:text-5xl leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Contributors
        </h1>

        <p className="mt-3 max-w-xl text-sm md:text-base leading-7 text-primary-70">
          Meet the writers and creative voices behind Highskul Creatives.
        </p>
      </header>

      {featured.length > 0 && (
        <section
          className="pt-8"
          aria-labelledby="featured-contributors-heading"
        >
          <div className="mb-6 flex items-center gap-3 border-b pb-3">
            <EditorialOrnament variant="mark" />

            <h2
              id="featured-contributors-heading"
              className="text-xs uppercase tracking-widest text-primary-60"
            >
              Featured Contributors
            </h2>
          </div>

          <ul className="flex flex-wrap">
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
        <section
          className="mt-8 mb-12"
          aria-labelledby="more-contributors-heading"
        >
          <div className="mb-0 flex items-center gap-3 border-b pb-3">
            <EditorialOrnament variant="mark" />

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
        <section className="border-t border-b py-10">
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
