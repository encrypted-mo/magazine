import Link from 'next/link'
import { HTMLAttributes, MouseEvent } from 'react'
import { useMenuContext } from './use-menu-context'
import cn from 'classnames'
import ExternalLink from '../Link/ExternalLink'
import s from './Menu.module.css'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  active?: boolean
  subfix?: React.ReactNode
  onClick?: (e: MouseEvent) => void
  href?: string
  external?: boolean
  unstyled?: boolean
}

const MenuItem = ({
  children,
  active = false,
  subfix = null,
  external = false,
  unstyled = false,
  href,
  onClick,
  ...rest
}: Props) => {
  const { toggle } = useMenuContext()

  const handleButtonClick = (e: MouseEvent) => {
    onClick?.(e)
    toggle()
  }

  let content: React.ReactNode

  if (href) {
    if (external) {
      content = (
        <ExternalLink
          to={href}
          ariaLabel="Link"
          className={s.itemContent}
        >
          {children}
        </ExternalLink>
      )
    } else {
      content = (
        <Link href={href}>
          <a className={s.itemContent}>{children}</a>
        </Link>
      )
    }
  } else if (onClick) {
    content = (
      <button
        type="button"
        onClick={handleButtonClick}
        className={s.itemContent}
        {...rest}
      >
        {children}
      </button>
    )
  } else if (unstyled) {
    content = <>{children}</>
  } else {
    content = <span className={s.itemContent}>{children}</span>
  }

  return (
    <li
      role="menuitem"
      tabIndex={-1}
      data-selected={active ? '' : undefined}
      className={cn(s.menuItem, {
        [s.menuItemActive]: active,
      })}
    >
      {content}

      {subfix && <span className={s.subfix}>{subfix}</span>}
    </li>
  )
}

export default MenuItem
