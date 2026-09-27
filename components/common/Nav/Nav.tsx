import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { useHideOnScroll } from '@lib/hooks/use-hide-on-scroll'
import { MenuWrapper, Menu, MenuButton, MenuItem } from '@components/ui/Menu'
import More from '@components/icons/More'

const Nav = ({ categories }: { categories: TCategory[] }) => {
  const router = useRouter()
  const { isHidden } = useHideOnScroll()

  const categoryMap = Object.fromEntries(
    categories.map((category) => [category.slug, category])
  )

  const navLinkClass =
    'relative uppercase py-3 px-4 text-xs font-bold tracking-wide text-primary-90 transition-opacity hover:opacity-70'

  const isCategoryActive = (slug: string) =>
    router.query.slug === slug

  const isCombinedActive = (slugs: string[]) =>
    slugs.includes(router.query.slug as string)

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
            'relative uppercase px-5 py-3 text-xs font-bold tracking-wide text-primary-90',
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
              isCategoryActive('news') && 'border-b-2 border-primary'
            )}
          >
            News
          </a>
        </Link>
      )}

      {/* Education */}
      {categoryMap.education && (
        <Link href="/education">
          <a
            className={cn(
              navLinkClass,
              isCategoryActive('education') && 'border-b-2 border-primary'
            )}
          >
            Education
          </a>
        </Link>
      )}

      {/* Student Life */}
      {categoryMap['student-life'] && (
        <Link href="/student-life">
          <a
            className={cn(
              navLinkClass,
              isCategoryActive('student-life') &&
                'border-b-2 border-primary'
            )}
          >
            Student Life
          </a>
        </Link>
      )}

      {/* Arts & Entertainment */}
      {(categoryMap.culture || categoryMap.features) && (
        <MenuWrapper>
          <MenuButton ariaLabel="Arts and Entertainment navigation">
            <span
              className={cn(
                navLinkClass,
                isCombinedActive(['culture', 'features']) &&
                  'border-b-2 border-primary'
              )}
            >
              Arts & Entertainment
            </span>
          </MenuButton>

          <Menu title="Arts & Entertainment">
            {categoryMap.culture && (
              <MenuItem
                href="/culture"
                active={isCategoryActive('culture')}
              >
                Culture
              </MenuItem>
            )}

            {categoryMap.features && (
              <MenuItem
                href="/features"
                active={isCategoryActive('features')}
              >
                Features
              </MenuItem>
            )}
          </Menu>
        </MenuWrapper>
      )}

      {/* Sports */}
      {categoryMap.sports && (
        <Link href="/sports">
          <a
            className={cn(
              navLinkClass,
              isCategoryActive('sports') && 'border-b-2 border-primary'
            )}
          >
            Sports
          </a>
        </Link>
      )}

      {/* Career & Opportunities */}
      {(categoryMap.career || categoryMap.opportunities) && (
        <MenuWrapper>
          <MenuButton ariaLabel="Career and Opportunities navigation">
            <span
              className={cn(
                navLinkClass,
                isCombinedActive(['career', 'opportunities']) &&
                  'border-b-2 border-primary'
              )}
            >
              Career & Opportunities
            </span>
          </MenuButton>

          <Menu title="Career & Opportunities">
            {categoryMap.career && (
              <MenuItem
                href="/career"
                active={isCategoryActive('career')}
              >
                Career
              </MenuItem>
            )}

            {categoryMap.opportunities && (
              <MenuItem
                href="/opportunities"
                active={isCategoryActive('opportunities')}
              >
                Opportunities
              </MenuItem>
            )}
          </Menu>
        </MenuWrapper>
      )}

      {/* More */}
      <MenuWrapper>
        <MenuButton ariaLabel="More navigation">
          <span className="flex items-center gap-1 uppercase py-3 px-4 text-xs font-bold tracking-wide text-primary-90 hover:opacity-70">
            <More />
            More
          </span>
        </MenuButton>

        <Menu title="More">
          {categoryMap.opinion && (
            <MenuItem
              href="/opinion"
              active={isCategoryActive('opinion')}
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
            About
          </MenuItem>
        </Menu>
      </MenuWrapper>
    </nav>
  )
}

export default Nav
