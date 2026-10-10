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
  const publishedAt = doc.publishedAt || doc._createdAt

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
    published_at: publishedAt,
    created_at: doc._createdAt,
    updated_at: doc._updatedAt,
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
    updated_at: doc._updatedAt,
    cover: {
      url: doc.coverImage ? urlForImage(doc.coverImage) : '',
      alternativeText: doc.title || '',
      width: doc.imageWidth || 1200,
      height: doc.imageHeight || 800,
      formats: {},
    } as TStrapiImage,
  }
}

function mapAuthor(doc: any): TContributor {
  const author: TContributor = {
    id: doc._id,
    name: doc.name,
    slug: doc.slug,
    role: doc.role || '',
    published_at: doc._createdAt || '',
    created_at: doc._createdAt || '',
    updated_at: doc._updatedAt || doc._createdAt || '',
    urls: {
      id: 0,
      twitter: doc.twitter,
      instagram: doc.instagram,
      facebook: doc.facebook,
      linkedin: doc.linkedin,
    },
  }

  if (doc.image) {
    const imageUrl = urlForImage(doc.image)

    author.featured = {
      id: 0,
      description: doc.bio || '',
      profile_image: {
        id: 0,
        name: doc.name,
        alternativeText: doc.name || '',
        caption: '',
        width: doc.imageWidth || 400,
        height: doc.imageHeight || 400,
        hash: '',
        ext: '',
        mime: '',
        size: 0,
        url: imageUrl,
        previewUrl: null,
        provider: '',
        provider_metadata: null,
        created_at: doc._createdAt || '',
        updated_at: doc._updatedAt || '',
        formats: {
          thumbnail: {
            name: '',
            hash: '',
            ext: '',
            mime: '',
            width: doc.imageWidth || 400,
            height: doc.imageHeight || 400,
            size: 0,
            path: null,
            url: imageUrl,
          },
        },
      },
    }
  }

  return author
}

function mapPage(doc: any): TPage {
  return {
    id: doc._id,
    title: doc.title,
    slug: doc.slug,
    description: doc.description || '',
    content: doc.body || '',
    published_at: doc._createdAt || '',
    created_at: doc._createdAt || '',
    updated_at: doc._updatedAt || doc._createdAt || '',
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

    const categorySlugMatch = path.match(
      /\/articles\?category\.slug=([^&]+)/
    )

    const authorSlugMatch = path.match(
      /\/articles\?author\.slug=([^&]+)/
    )

    const slug = slugMatch ? decodeURIComponent(slugMatch[1]) : null

    const categorySlug = categorySlugMatch
      ? decodeURIComponent(categorySlugMatch[1])
      : null

    const authorSlug = authorSlugMatch
      ? decodeURIComponent(authorSlugMatch[1])
      : null

    const articleFields = `
      _id,
      _createdAt,
      _updatedAt,
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
    `

    const query = slug
      ? `*[_type == "article" && slug.current == $slug][0]{
          ${articleFields}
        }`
      : categorySlug
      ? `*[
          _type == "article" &&
          category->slug.current == $categorySlug
        ] | order(publishedAt desc){
          ${articleFields}
        }`
      : authorSlug
      ? `*[
          _type == "article" &&
          author->slug.current == $authorSlug
        ] | order(publishedAt desc){
          ${articleFields}
        }`
      : `*[_type == "article"] | order(publishedAt desc){
          ${articleFields}
        }`

    const params = slug
      ? { slug }
      : categorySlug
      ? { categorySlug }
      : authorSlug
      ? { authorSlug }
      : {}

    const docs = await sanityClient.fetch(query, params)

    if (slug) {
      return docs ? [mapArticle(docs)] : []
    }

    return (docs || []).map(mapArticle)
  }

  if (path.startsWith('/categories')) {
    const slugMatch = path.match(/\/categories\?slug=([^&]+)/)
    const slug = slugMatch ? decodeURIComponent(slugMatch[1]) : null

    const query = slug
      ? `*[_type == "category" && slug.current == $slug][0]{
          _id,
          title,
          "slug": slug.current,
          description,
          coverImage,
          _createdAt,
          _updatedAt
        }`
      : `*[_type == "category"]{
          _id,
          title,
          "slug": slug.current,
          description,
          coverImage,
          _createdAt,
          _updatedAt
        }`

    const docs = await sanityClient.fetch(query, slug ? { slug } : {})

    if (slug) {
      return docs ? [mapCategory(docs)] : []
    }

    return (docs || []).map(mapCategory)
  }

  if (path.startsWith('/contributors')) {
    const slugMatch = path.match(/\/contributors\?slug=([^&]+)/)
    const slug = slugMatch ? decodeURIComponent(slugMatch[1]) : null

    const contributorFields = `
      _id,
      _createdAt,
      _updatedAt,
      name,
      "slug": slug.current,
      role,
      twitter,
      instagram,
      facebook,
      linkedin,
      image,
      bio,
      "imageWidth": image.asset->metadata.dimensions.width,
      "imageHeight": image.asset->metadata.dimensions.height
    `

    const query = slug
      ? `*[_type == "author" && slug.current == $slug][0]{
          ${contributorFields}
        }`
      : `*[_type == "author"] | order(name asc){
          ${contributorFields}
        }`

    const docs = await sanityClient.fetch(query, slug ? { slug } : {})

    if (slug) {
      return docs ? [mapAuthor(docs)] : []
    }

    return (docs || []).map(mapAuthor)
  }

  if (path.startsWith('/lists')) {
    return []
  }

  if (path.startsWith('/pages')) {
    const slugMatch = path.match(/\/pages\?slug=([^&]+)/)
    const slug = slugMatch ? decodeURIComponent(slugMatch[1]) : null

    const query = slug
      ? `*[_type == "page" && slug.current == $slug][0]{
          _id,
          title,
          "slug": slug.current,
          description,
          body,
          coverImage,
          _createdAt,
          _updatedAt,
          "imageWidth": coverImage.asset->metadata.dimensions.width,
          "imageHeight": coverImage.asset->metadata.dimensions.height
        }`
      : `*[_type == "page"]{
          _id,
          title,
          "slug": slug.current,
          description,
          body,
          coverImage,
          _createdAt,
          _updatedAt,
          "imageWidth": coverImage.asset->metadata.dimensions.width,
          "imageHeight": coverImage.asset->metadata.dimensions.height
        }`

    const docs = await sanityClient.fetch(query, slug ? { slug } : {})

    if (slug) {
      return docs ? [mapPage(docs)] : []
    }

    return (docs || []).map(mapPage)
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
