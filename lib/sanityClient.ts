const sanityPkg = require('@sanity/client')

const createClientFn = sanityPkg.createClient || sanityPkg.default || sanityPkg

const imageUrlPkg = require('@sanity/image-url')

const imageUrlBuilderFn = imageUrlPkg.default || imageUrlPkg

export const sanityClient = createClientFn({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_API_TOKEN || undefined,
  useCdn: false,
})

const builder = imageUrlBuilderFn(sanityClient)

export function urlForImage(source: any) {
  return builder.image(source).url()
}