import Facebook from '@components/icons/Facebook'
import Instagram from '@components/icons/Instagram'
import Twitter from '@components/icons/Twitter'
import ExternalLink from '@components/ui/Link/ExternalLink'

function AuthorSocialMedia({ urls }: { urls: TContributor['urls'] }) {
  if (!urls) return null

  const { twitter, instagram, facebook } = urls

  if (twitter) {
    return (
      <ExternalLink
        className="text-primary-60 flex items-center gap-2 pt-2 text-sm hover:text-accent transition-colors"
        to={`https://twitter.com/${twitter}`}
        ariaLabel="Author's Twitter"
      >
        <Twitter width="16" height="16" />
        <span>@{twitter}</span>
      </ExternalLink>
    )
  }

  if (instagram) {
    return (
      <ExternalLink
        className="text-primary-60 flex items-center gap-2 pt-2 text-sm hover:text-accent transition-colors"
        to={`https://instagram.com/${instagram}`}
        ariaLabel="Author's Instagram"
      >
        <Instagram width="16" height="16" />
        <span>@{instagram}</span>
      </ExternalLink>
    )
  }

  if (facebook) {
    return (
      <ExternalLink
        className="text-primary-60 flex items-center gap-2 pt-2 text-sm hover:text-accent transition-colors"
        to={`https://facebook.com/${facebook}`}
        ariaLabel="Author's Facebook"
      >
        <Facebook width="16" height="16" />
        <span>{facebook}</span>
      </ExternalLink>
    )
  }

  return null
}

export default AuthorSocialMedia
