import Link from 'next/link'
import SocialUrls from './SocialUrls'
import ThemeSwitch from '../ThemeSwitch'
import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer className="block bottom-0 left-0 right-0 bg-primary-05 px-6 py-6 md:px-32 lg:px-48 xl:px-1/5">
      <nav
        className="flex flex-col mt-6 mb-6 flex-wrap gap-10 md:flex-row md:justify-between"
        aria-label="Footer Nav"
      >
        {/* Sections */}
        <div>
          <h3 className={s.heading}>Sections</h3>

          <ul className={s.ul}>
            <li>
              <Link href="/news">
                <a className={s.link}>News</a>
              </Link>
            </li>

            <li>
              <Link href="/academics">
                <a className={s.link}>Academics</a>
              </Link>
            </li>

            <li>
              <Link href="/student-life">
                <a className={s.link}>Student Life</a>
              </Link>
            </li>

            <li>
              <Link href="/arts-and-entertainment">
                <a className={s.link}>Arts &amp; Entertainment</a>
              </Link>
            </li>

            <li>
              <Link href="/sports">
                <a className={s.link}>Sports</a>
              </Link>
            </li>

            <li>
              <Link href="/career-and-opportunities">
                <a className={s.link}>Career &amp; Opportunities</a>
              </Link>
            </li>

            <li>
              <Link href="/opinion">
                <a className={s.link}>Opinion</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className={s.heading}>About</h3>

          <ul className={s.ul}>
            <li>
              <Link href="/pages/about">
                <a className={s.link}>About HighSkul</a>
              </Link>
            </li>

            <li>
              <Link href="/contributors">
                <a className={s.link}>Contributors</a>
              </Link>
            </li>

            <li>
              <a
                className={s.link}
                href="mailto:hiskulcreatives@gmail.com"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className={s.heading}>More</h3>

          <ul className={s.ul}>
            <li>
              <Link href="/events">
                <a className={s.link}>Events</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <SocialUrls />

      <ThemeSwitch />
    </footer>
  )
}

export default Footer
