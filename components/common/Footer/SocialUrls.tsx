import Facebook from '@components/icons/Facebook'
import Instagram from '@components/icons/Instagram'
import Linkedin from '@components/icons/Linkedin'
import Youtube from '@components/icons/Youtube'
import ExternalLink from '@components/ui/Link/ExternalLink'
import { SOCIAL_USERNAMES } from '@lib/constants'

const TikTok = ({ width = '20', height = '20' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.77V2h-3.31v13.67a2.5 2.5 0 1 1-2.5-2.5c.27 0 .53.04.77.12v-3.36a5.84 5.84 0 1 0 5.04 5.78V8.77a8.15 8.15 0 0 0 4.77 1.53V6.99a4.83 4.83 0 0 1-1-.3Z" />
  </svg>
)

const SocialUrls = () => {
  const { tiktok, instagram, facebook, youtube, linkedin } = SOCIAL_USERNAMES

  return (
    <ul className="flex py-6 justify-center">
      {tiktok && (
        <li className="px-4">
          <ExternalLink
            to={`https://www.tiktok.com/@${tiktok}`}
            ariaLabel="TikTok"
          >
            <TikTok width="20" height="20" />
          </ExternalLink>
        </li>
      )}

      {instagram && (
        <li className="px-4">
          <ExternalLink
            to={`https://instagram.com/${instagram}`}
            ariaLabel="Instagram"
          >
            <Instagram width="20" height="20" />
          </ExternalLink>
        </li>
      )}

      {facebook && (
        <li className="px-4">
          <ExternalLink
            to={`https://facebook.com/${facebook}`}
            ariaLabel="Facebook"
          >
            <Facebook width="20" height="20" />
          </ExternalLink>
        </li>
      )}

      {youtube && (
        <li className="px-4">
          <ExternalLink
            to={`https://youtube.com/@${youtube}`}
            ariaLabel="Youtube"
          >
            <Youtube width="20" height="20" />
          </ExternalLink>
        </li>
      )}

      {linkedin && (
        <li className="px-4">
          <ExternalLink
            to={`https://linkedin.com/in/${linkedin}`}
            ariaLabel="Linkedin"
          >
            <Linkedin width="20" height="20" />
          </ExternalLink>
        </li>
      )}
    </ul>
  )
}

export default SocialUrls
