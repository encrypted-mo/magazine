import Copy from '@components/icons/Copy'
import Facebook from '@components/icons/Facebook'
import Share from '@components/icons/Share'
import Twitter from '@components/icons/Twitter'
import { Menu, MenuButton, MenuWrapper, MenuItem } from '@components/ui/Menu'
import { SITE_URL } from '@lib/constants'
import { useToast } from '@lib/hooks/use-toast'
import { MouseEvent } from 'react'

type Props = {
  title: string
  path: string
  message?: string
}

const ShareButton = ({
  title,
  path,
  message = 'Check this article',
}: Props) => {
  const { addToast } = useToast()

  const fullURL = `${SITE_URL}${path}`

  const encodedURL = encodeURIComponent(fullURL)
  const encodedTitle = encodeURIComponent(title)

  const onShareClick = (e: MouseEvent) => {
    e.preventDefault()

    if (navigator.share) {
      navigator
        .share({
          title,
          text: message,
          url: fullURL,
        })
        .catch(() => undefined)
    }
  }

  const onCopyToClipboard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(fullURL)
        .then(() => addToast('Copied to the clipboard!'))
        .catch(console.error)
    }
  }

  const onFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`,
      'facebook-share-dialog',
      'width=800,height=600'
    )
  }

  const onWhatsAppShare = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${title}\n\n${fullURL}`)}`,
      '_blank'
    )
  }

  const onTelegramShare = () => {
    window.open(
      `https://t.me/share/url?url=${encodedURL}&text=${encodedTitle}`,
      '_blank'
    )
  }

  return (
    <MenuWrapper>
      <MenuButton ariaLabel="Share" onClick={onShareClick}>
        <Share />
      </MenuButton>

      <Menu title="Share">
        <MenuItem onClick={onWhatsAppShare}>Share on WhatsApp</MenuItem>

        <MenuItem onClick={onTelegramShare}>Share on Telegram</MenuItem>

        <MenuItem
          subfix={<Facebook width={20} height={20} />}
          onClick={onFacebookShare}
        >
          Share on Facebook
        </MenuItem>

        <MenuItem
          subfix={<Twitter width={20} height={20} />}
          href={`https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedTitle}`}
          external
        >
          Share on X
        </MenuItem>

        <MenuItem unstyled>
          <button
            className="w-11/12 my-0 mx-auto border border-primary-20 rounded-xl overflow-hidden whitespace-nowrap overflow-ellipsis relative text-sm py-4 pl-2 pr-9 opacity-70 transition-opacity hover:opacity-100 md:py-2"
            onClick={onCopyToClipboard}
            aria-label="Copy article link"
            title={fullURL}
          >
            {fullURL}

            <span className="text-primary absolute right-3 leading-none">
              <Copy width={16} height={16} />
            </span>
          </button>
        </MenuItem>
      </Menu>
    </MenuWrapper>
  )
}

export default ShareButton
