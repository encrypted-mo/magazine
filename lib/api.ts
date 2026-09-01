import { sanityClient, urlForImage } from './sanityClient'

export function getStrapiURL(path: string) {
  return `${process.env.API_URL || 'http://localhost:1337'}${path}`
}

export const getMediaURL = (url?: string) => {
  if (!url) return ' '
  if (url.startsWith('http') || url.startsWith('//')) return url
  return getStrapiURL(url)
}

function mapArticle(doc: any): TArticle {
  return {
    id: doc._id,
    title: doc.title,
    slug: doc.slug,
    author: {
      id: doc.author?._id,
      name: doc.author?.name,
      slug: doc.author?.slug,
    } as TContributor,
    content: doc.body || '',
    category: {
      id: doc.category?._id,
      title: doc.category?.title,
      slug: doc.category?.slug,
    } as TCategory,
    description: doc.excerpt || '',
    published_at: doc.publishedAt,
    created_at: doc.publishedAt,
    updated_at: doc.publishedAt,
    cover: {
      url: doc.coverImage ? urlForImage(doc.coverImage) : '',
      alternativeText: doc.title || '',
      formats: {},
    } as TStrapiImage,
  }
}

function mapCategory(doc: any): TCategory {
  return {
    id: doc._id,
    title: doc.title,
    slug: doc.slug,
    description: '',
    published_at: doc._createdAt,
    created_at: doc._createdAt,
    updated_at: doc._createdAt,
    cover: { url: '' } as TStrapiImage,
  }
}

export async function fetchAPI(path: string) {
  if (path.startsWith('/articles')) {
    const docs = await sanityClient.fetch(
      `*[_type == "article"] | order(publishedAt desc) {
        _id, title, "slug": slug.current, publishedAt, excerpt, body, coverImage,
        category->{_id, title, "slug": slug.current},
        author->{_id, name, "slug": slug.current}
      }`
    )
    return docs.map(mapArticle)
  }

  if (path.startsWith('/categories')) {
    const docs = await sanityClient.fetch(
      `*[_type == "category"]{_id, title, "slug": slug.current, _createdAt}`
    )
    return docs.map(mapCategory)
  }

  if (path.startsWith('/pages')) {
    return []
  }

  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}

export async function getNavigation(): Promise<TNavigation> {
  const [categories, pages] = await Promise.all([
    fetchAPI('/categories'),
    fetchAPI('/pages'),
  ])

  return { categories, pages }
}