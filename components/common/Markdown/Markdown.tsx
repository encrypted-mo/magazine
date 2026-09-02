/* eslint-disable react/prop-types */

import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { getMediaURL } from '@lib/api'
import { urlForImage } from '@lib/sanityClient'

const ImageRenderer = ({ value }: { value: any }) => {
  if (!value?.asset) return null

  const imageUrl = urlForImage(value)
  const alt = value.alt || ''

  return (
    <figure className="relative w-full mt-6">
      <Image
        src={getMediaURL(imageUrl)}
        alt={alt}
        width={1200}
        height={800}
        className="w-full h-auto object-contain"
      />
      {alt && (
        <figcaption className="text-sm mt-4 text-primary-60 text-center">
          {alt}
        </figcaption>
      )}
    </figure>
  )
}

const components: PortableTextComponents = {
  types: {
    image: ImageRenderer,
  },
}

const Markdown = ({ content }: { content?: any }) => {
  return (
    <section className="markdown">
      {Array.isArray(content) ? (
        <PortableText value={content} components={components} />
      ) : (
        <p>{content || ''}</p>
      )}
    </section>
  )
}

export default Markdown
