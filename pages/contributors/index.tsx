import { Layout } from '@components/common/Layout'
import Hero from '@components/common/Hero/Hero'
import Link from 'next/link'
import { fetchAPI } from '@lib/api'
import { InferGetStaticPropsType } from 'next'

export async function getStaticProps() {
  const authors: TContributor[] = await fetchAPI('/contributors')

  return {
    props: {
      authors,
    },
  }
}

export function ContributorsPage({
  authors,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Hero title="Authors" />

      <ul>
        {authors.map((author) => (
          <li key={author.slug} className="py-4 border-b">
            <Link href={`/contributors/${author.slug}`}>
              <a>
                <h4 className="serif">{author.name}</h4>
                <p className="text-xs uppercase text-primary-60">
                  {author.role}
                </p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default ContributorsPage