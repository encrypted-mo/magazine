import { Layout } from '@components/common/Layout'
import Link from 'next/link'
import { fetchAPI } from '@lib/api'
import { InferGetStaticPropsType } from 'next'

export async function getStaticProps() {
  const authors: TContributor[] = await fetchAPI('/contributors')

  return {
    props: {
      authors,
    },
    revalidate: 60,
  }
}

export function ContributorsPage({
  authors,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const contributors = authors || []

  return (
    <Layout>
      <section className="relative mb-12 md:mb-16">
        <div className="py-8 md:py-12 border-b">
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

          <h1
            className="text-6xl md:text-8xl leading-[0.82] tracking-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Contributors
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg leading-8 text-primary-70">
            The writers, reporters and creative voices behind HighSkul.
          </p>
        </div>
      </section>

      <section aria-label="Contributors">
        <div className="flex items-end justify-between border-b pb-3 mb-0">
          <span
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: '#8A6500' }}
          >
            Our Contributors
          </span>

          <span className="text-[10px] uppercase tracking-[0.16em] text-primary-50">
            {contributors.length.toString().padStart(2, '0')}{' '}
            {contributors.length === 1 ? 'Voice' : 'Voices'}
          </span>
        </div>

        {contributors.length > 0 ? (
          <ul>
            {contributors.map((author, index) => (
              <li key={author.slug} className="border-b">
                <Link href={`/contributors/${author.slug}`}>
                  <a className="group block py-6 md:py-8">
                    <div className="flex items-start gap-5 md:gap-8">
                      <span
                        className="pt-1 text-xs font-bold tracking-[0.14em]"
                        style={{ color: '#D4AF37' }}
                        aria-hidden="true"
                      >
                        {(index + 1).toString().padStart(2, '0')}
                      </span>

                      <div className="flex-1">
                        <h2
                          className="text-3xl md:text-5xl leading-none transition-opacity duration-200 group-hover:opacity-70"
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                          }}
                        >
                          {author.name}
                        </h2>

                        {author.role && (
                          <p className="mt-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-primary-60">
                            {author.role}
                          </p>
                        )}
                      </div>

                      <span
                        className="hidden md:block text-xl leading-none transition-transform duration-200 group-hover:translate-x-1"
                        style={{ color: '#D4AF37' }}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="py-12 md:py-16 border-b">
            <span
              className="mb-5 block h-px w-12"
              style={{ backgroundColor: '#D4AF37' }}
              aria-hidden="true"
            />

            <h2
              className="text-3xl md:text-4xl leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The newsroom is growing.
            </h2>

            <p className="mt-3 max-w-xl text-sm md:text-base leading-7 text-primary-60">
              Contributor profiles will appear here as writers and reporters
              join the publication.
            </p>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default ContributorsPage
