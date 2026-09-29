import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { useHideOnScroll } from '@lib/hooks/use-hide-on-scroll'
import {
  MenuWrapper,
  Menu,
  MenuButton,
  MenuItem,
} from '@components/ui/Menu'
import More from '@components/icons/More'

const Nav = ({ categories }: { categories: TCategory[] }) => {
  const router = useRouter()
  const { isHidden } = useHideOnScroll()
  const [localDateTime, setLocalDateTime] = useState('')

  const categoryMap = Object.fromEntries(
    categories.map((category) => [category.slug, category])
  )

  useEffect(() => {
    const updateDateTime = () => {
      const formatter = new Intl.DateTimeFormat(undefined, {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })

      setLocalDateTime(formatter.format(new Date()))
    }

    updateDateTime()

    const interval = window.setInterval(updateDateTime, 60000)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  const navLinkClass =
    'relative flex items-center uppercase py-3 px-4 text-xs font-bold tracking-wide text-primary-90 transition-opacity hover:opacity-70'

  const isActive = (slug: string) => router.query.slug === slug

  const moreIsActive =
    router.pathname === '/opinion' ||
    router.pathname === '/events' ||
    router.pathname === '/contributors' ||
    router.pathname === '/pages/about' ||
    router.pathname === '/pages/contact' ||
    router.query.slug === 'arts-and-entertainment' ||
    router.query.slug === 'sports' ||
    router.query.slug === 'career-and-opportunities'

  return (
    <>
      <nav
        aria-label="Categories Nav"
        className={cn(
          'overflow-x-auto sticky flex whitespace-nowrap px-4 top-16 z-10 bg-secondary scrollbar-none transform transition-transform duration-300',
          'md:justify-center',
          isHidden ? '-translate-y-full' : 'translate-y-0'
        )}
      >
        <Link href="/">
          <a
            className={cn(
              navLinkClass,
              router.pathname === '/' && 'border-b-2 border-primary'
            )}
          >
            Home
          </a>
        </Link>

        {categoryMap.news && (
          <Link href="/news">
            <a
              className={cn(
                navLinkClass,
                isActive('news') && 'border-b-2 border-primary'
              )}
            >
              News
            </a>
          </Link>
        )}

        {categoryMap.academics && (
          <Link href="/academics">
            <a
              className={cn(
                navLinkClass,
                isActive('academics') && 'border-b-2 border-primary'
              )}
            >
              Academics
            </a>
          </Link>
        )}

        {categoryMap['student-life'] && (
          <Link href="/student-life">
            <a
              className={cn(
                navLinkClass,
                isActive('student-life') && 'border-b-2 border-primary'
              )}
            >
              Student Life
            </a>
          </Link>
        )}

        <MenuWrapper>
          <MenuButton ariaLabel="More navigation">
            <span
              className={cn(
                navLinkClass,
                'gap-1',
                moreIsActive && 'border-b-2 border-primary'
              )}
            >
              More
              <More />
            </span>
          </MenuButton>

          <Menu title="More">
            {categoryMap['arts-and-entertainment'] && (
              <MenuItem
                href="/arts-and-entertainment"
                active={isActive('arts-and-entertainment')}
              >
                Arts &amp; Entertainment
              </MenuItem>
            )}

            {categoryMap.sports && (
              <MenuItem
                href="/sports"
                active={isActive('sports')}
              >
                Sports
              </MenuItem>
            )}

            {categoryMap['career-and-opportunities'] && (
              <MenuItem
                href="/career-and-opportunities"
                active={isActive('career-and-opportunities')}
              >
                Career &amp; Opportunities
              </MenuItem>
            )}

            {categoryMap.opinion && (
              <MenuItem
                href="/opinion"
                active={isActive('opinion')}
              >
                Opinion
              </MenuItem>
            )}

            <MenuItem
              href="/events"
              active={router.pathname === '/events'}
            >
              Events
            </MenuItem>

            <MenuItem
              href="/contributors"
              active={router.pathname === '/contributors'}
            >
              Contributors
            </MenuItem>

            <MenuItem
              href="/pages/about"
              active={router.pathname === '/pages/about'}
            >
              About Us
            </MenuItem>

            <MenuItem
              href="/pages/contact"
              active={router.pathname === '/pages/contact'}
            >
              Contact
            </MenuItem>
          </Menu>
        </MenuWrapper>
      </nav>

      <div
        className="flex items-center justify-end px-4 py-0.5 bg-secondary"
        aria-label="Local date and time"
      >
        <span className="uppercase text-[8px] md:text-[9px] font-medium tracking-wide text-primary-60">
          {localDateTime}
        </span>
      </div>
    </>
  )
}

export default Nav
