import { Layout } from '@components/common/Layout'
import Hero from '@components/common/Hero/Hero'
import { fetchAPI } from '@lib/api'
import { PortableText } from '@portabletext/react'

export async function getStaticPaths() {
  const pages: TPage[] = await fetchAPI('/pages')

  return {
    paths: pages.map((page) => ({
      params: {
        slug: page.slug,
      },
    })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const pages: TPage[] = await fetchAPI(`/pages?slug=${params.slug}`)

  if (!pages || pages.length === 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      page: pages[0],
    },
  }
}

export default function Page({ page }: { page: TPage }) {
  return (
    <Layout>
      <Hero title={page.title} />

      <article className="prose max-w-3xl">
        {Array.isArray(page.content) ? (
          <PortableText value={page.content as any} />
        ) : (
          <p>{page.content}</p>
        )}
      </article>
    </Layout>
  )
}
