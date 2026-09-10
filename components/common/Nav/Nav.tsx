import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { useHideOnScroll } from '@lib/hooks/use-hide-on-scroll'
import { MenuWrapper, Menu, MenuButton, MenuItem } from '@components/ui/Menu'
import More from '@components/icons/More'

const Nav = ({ categories }: { categories: TCategory[] }) => {
  const router = useRouter()
  const { isHidden } = useHideOnScroll()

  const mainCategories = [
    'news',
    'campus',
    'education',
    'opportunities',
    'student-life',
    'culture',
  ]

  const moreCategories = ['career', 'opinion', 'features']

  const mainNavCategories = categories.filter((category) =>
    mainCategories.includes(category.slug)
  )

  const moreNavCategories = categories.filter((category) =>
    moreCategories.includes(category.slug)
  )

  const navLinkClass =
    'relative uppercase py-3 px-4 text-xs font-bold tracking-wide text-primary-90 transition-opacity hover:opacity-70'

  return (
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
            'relative uppercase px-5 py-3 text-xs font-bold tracking-wide text-primary-90',
            router.pathname === '/' && 'border-b-2 border-primary'
          )}
        >
          Home
        </a>
      </Link>

      {mainNavCategories.map((category) => (
        <Link href={`/${category.slug}`} key={category.slug}>
          <a
            className={cn(
              navLinkClass,
              router.query.slug === category.slug && 'border-b-2 border-primary'
            )}
          >
            {category.title}
          </a>
        </Link>
      ))}

      <MenuWrapper>
        <MenuButton ariaLabel="More navigation">
          <span className="flex items-center gap-1 uppercase py-3 px-4 text-xs font-bold tracking-wide text-primary-90 hover:opacity-70">
            <More />
            More
          </span>
        </MenuButton>

        <Menu title="More">
          {moreNavCategories.map((category) => (
            <MenuItem
              key={category.slug}
              href={`/${category.slug}`}
              active={router.query.slug === category.slug}
            >
              {category.title}
            </MenuItem>
          ))}

          <MenuItem href="/events">Events</MenuItem>
          <MenuItem href="/contributors">Authors</MenuItem>
          <MenuItem href="/pages/about">About</MenuItem>
        </Menu>
      </MenuWrapper>
    </nav>
  )
}

export default Nav
