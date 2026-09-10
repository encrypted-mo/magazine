import { getMediaURL } from '@lib/api'
import Link from 'next/link'
import AuthorSocialMedia from './AuthorSocialMedia'
import Image from 'next/image'

function AuthorCard({ author }: { author: TContributor }) {
  const thumbnailUrl = author.featured?.profile_image?.formats?.thumbnail?.url
    ? getMediaURL(author.featured.profile_image.formats.thumbnail.url)
    : ''

  return (
    <div className="border-l-2 border-accent pl-5 py-3">
      <div className="flex items-center">
        {author.featured && thumbnailUrl && (
          <Link href={`/contributors/${author.slug}`}>
            <a
              aria-label={`View ${author.name}'s contributor profile`}
              className="relative w-14 h-14 mr-4 shrink-0 overflow-hidden rounded-full"
            >
              <Image
                src={thumbnailUrl}
                alt={`${author.name} profile`}
                layout="fill"
                className="object-cover"
              />
            </a>
          </Link>
        )}

        <div>
          <div className="uppercase text-xs font-bold tracking-widest text-accent mb-1">
            Written by
          </div>

          <Link href={`/contributors/${author.slug}`}>
            <a className="serif text-xl md:text-2xl hover:underline">
              {author.name}
            </a>
          </Link>

          <AuthorSocialMedia urls={author.urls} />
        </div>
      </div>
    </div>
  )
}

export default AuthorCard
