import { getMediaURL } from '@lib/api'
import Link from 'next/link'
import Image from 'next/image'
import s from './Contributor.module.css'

const ContributorFeatured = ({
  contributor,
}: {
  contributor: TContributor
}) => {
  const thumbnailUrl = getMediaURL(
    contributor?.featured?.profile_image.formats.thumbnail?.url
  )

  return (
    <li>
      <Link href={`/contributors/${contributor.slug}`}>
        <a className={s.featuredContributor}>
          <figure
            className="relative h-16 w-16 shrink-0 rounded-full p-[3px]"
            style={{
              border: '1px solid rgba(212, 175, 55, 0.75)',
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src={thumbnailUrl}
                className="rounded-full object-cover"
                alt={`${contributor?.name} profile`}
                layout="fill"
              />
            </div>
          </figure>

          <div className="ml-5">
            <h3 className="serif">{contributor.name}</h3>

            <p className="text-xs uppercase text-primary-60">
              {contributor.role}
            </p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default ContributorFeatured
