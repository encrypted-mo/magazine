import { useMenuContext } from './use-menu-context'
import cn from 'classnames'
import { useIsMobile } from '@lib/hooks/use-media-queries'
import s from './Menu.module.css'
import { Portal } from '../Portal'

type Props = {
  children: React.ReactNode
  title: string
}

const Menu = ({ children, title }: Props) => {
  const { isVisible, toggle } = useMenuContext()
  const isMobile = useIsMobile()

  if (!isVisible) return null

  if (isMobile) {
    return (
      <Portal id="drawer">
        <div
          className={cn(s.mobileMenu, 'animate-fade-in')}
          aria-label={title}
          onClick={toggle}
        >
          <div
            className={cn(s.mobileContent, 'animate-slide-up')}
            data-menu-content
            onClick={(e) => e.stopPropagation()}
          >
            <div className={s.mobileHeader}>
              <p className={s.mobileTitle}>{title}</p>

              <button
                type="button"
                onClick={toggle}
                className={s.mobileClose}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <ul className={s.mobileList} role="menu">
              {children}
            </ul>
          </div>
        </div>
      </Portal>
    )
  }

  return (
    <Portal id="menu">
      <div
        className={s.menu}
        aria-label={title}
        data-menu-content
      >
        <p className={s.menuTitle}>{title}</p>

        <ul role="menu" className={s.menuList}>
          {children}
        </ul>
      </div>
    </Portal>
  )
}

export default Menu
