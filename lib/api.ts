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
  const imageUrl = doc.coverImage ? urlForImage(doc.coverImage) : ''

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
      url: imageUrl,
      alternativeText: doc.title || '',
      width: doc.imageWidth || 1200,
      height: doc.imageHeight || 800,
      formats: {},
    } as TStrapiImage,
  }
}

function mapCategory(doc: any): TCategory {
  return {
    id: doc._id,
    title: doc.title,
    slug: doc.slug,
    description: doc.description || '',
    published_at: doc._createdAt,
    created_at: doc._createdAt,
    updated_at: doc._createdAt,
    cover: {
      url: doc.coverImage ? urlForImage(doc.coverImage) : '',
      alternativeText: doc.title || '',
      width: doc.imageWidth || 1200,
      height: doc.imageHeight || 800,
      formats: {},
    } as TStrapiImage,
  }
}

export async function fetchAPI(path: string) {
  if (path.startsWith('/articles')) {
    const slugMatch = path.match(/\/articles\?slug=([^&]+)/)
    const categorySlugMatch = path.match(/\/articles\?category\.slug=([^&]+)/)

    const slug = slugMatch ? decodeURIComponent(slugMatch[1]) : null
    const categorySlug = categorySlugMatch
      ? decodeURIComponent(categorySlugMatch[1])
      : null

    const query = slug
      ? `*[_type == "article" && slug.current == $slug][0]{
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          excerpt,
          body,
          coverImage,
          "imageWidth": coverImage.asset->metadata.dimensions.width,
          "imageHeight": coverImage.asset->metadata.dimensions.height,
          category->{_id, title, "slug": slug.current},
          author->{_id, name, "slug": slug.current}
        }`
      : categorySlug
      ? `*[
          _type == "article" &&
          category->slug.current == $categorySlug
        ] | order(publishedAt desc){
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          excerpt,
          body,
          coverImage,
          "imageWidth": coverImage.asset->metadata.dimensions.width,
          "imageHeight": coverImage.asset->metadata.dimensions.height,
          category->{_id, title, "slug": slug.current},
          author->{_id, name, "slug": slug.current}
        }`
      : `*[_type == "article"] | order(publishedAt desc){
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          excerpt,
          body,
          coverImage,
          "imageWidth": coverImage.asset->metadata.dimensions.width,
          "imageHeight": coverImage.asset->metadata.dimensions.height,
          category->{_id, title, "slug": slug.current},
          author->{_id, name, "slug": slug.current}
        }`

    const params = categorySlug ? { categorySlug } : slug ? { slug } : {}

    const docs = await sanityClient.fetch(query, params)

    if (slug) {
      return docs ? [mapArticle(docs)] : []
    }

    return docs.map(mapArticle)
  }

  if (path.startsWith('/categories')) {
    const slugMatch = path.match(/\/categories\?slug=([^&]+)/)
    const slug = slugMatch ? decodeURIComponent(slugMatch[1]) : null

    const query = slug
      ? `*[_type == "category" && slug.current == $slug][0]{
          _id,
          title,
          "slug": slug.current,
          _createdAt
        }`
      : `*[_type == "category"]{
          _id,
          title,
          "slug": slug.current,
          _createdAt
        }`

    const docs = await sanityClient.fetch(query, slug ? { slug } : {})

    if (slug) {
      return docs ? [mapCategory(docs)] : []
    }

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
