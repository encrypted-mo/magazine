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

  const categoryMap = Object.fromEntries(
    categories.map((category) => [category.slug, category])
  )

  const navLinkClass =
    'relative flex items-center uppercase py-3 px-4 text-xs font-bold tracking-wide text-primary-90 transition-opacity hover:opacity-70'

  const isActive = (slug: string) => router.query.slug === slug

  return (
    <nav
      aria-label="Categories Nav"
      className={cn(
        'overflow-x-auto sticky flex whitespace-nowrap px-4 top-16 z-10 bg-secondary scrollbar-none transform transition-transform duration-300',
        'md:justify-center',
        isHidden ? '-translate-y-full' : 'translate-y-0'
      )}
    >
      {/* Home */}
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

      {/* News */}
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

      {/* Academics */}
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

      {/* Student Life */}
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

      {/* Arts & Entertainment */}
      {categoryMap['arts-and-entertainment'] && (
        <Link href="/arts-and-entertainment">
          <a
            className={cn(
              navLinkClass,
              isActive('arts-and-entertainment') &&
                'border-b-2 border-primary'
            )}
          >
            Arts &amp; Entertainment
          </a>
        </Link>
      )}

      {/* Sports */}
      {categoryMap.sports && (
        <Link href="/sports">
          <a
            className={cn(
              navLinkClass,
              isActive('sports') && 'border-b-2 border-primary'
            )}
          >
            Sports
          </a>
        </Link>
      )}

      {/* Career & Opportunities */}
      {categoryMap['career-and-opportunities'] && (
        <Link href="/career-and-opportunities">
          <a
            className={cn(
              navLinkClass,
              isActive('career-and-opportunities') &&
                'border-b-2 border-primary'
            )}
          >
            Career &amp; Opportunities
          </a>
        </Link>
      )}

      {/* More */}
      <MenuWrapper>
        <MenuButton ariaLabel="More navigation">
          <span
            className={cn(
              navLinkClass,
              'gap-1',
              (router.pathname === '/opinion' ||
                router.pathname === '/events' ||
                router.pathname === '/contributors' ||
                router.pathname === '/pages/about' ||
                router.pathname === '/pages/contact') &&
                'border-b-2 border-primary'
            )}
          >
            More
            <More />
          </span>
        </MenuButton>

        <Menu title="More">
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
  )
}

export default Nav
