import { Layout } from '@components/common/Layout'
import Hero from '@components/common/Hero/Hero'
export default function EventsPage() {
  return (
    <Layout>
      <Hero title="Events" />
      <section className="relative overflow-hidden border-t border-b py-16 md:py-24">
        <div className="absolute left-0 top-0 h-full w-px" style={{ backgroundColor: '#D4AF37' }} />
        <div className="pl-6 md:pl-10 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-2xl"
              style={{ color: '#D4AF37' }}
              aria-hidden="true"
            >
              ✦
            </span>
            <span
              className="text-[10px] md:text-xs font-bold uppercase tracking-[0.24em]"
              style={{ color: '#8A6500' }}
            >
              Coming Up
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            What&apos;s happening around the HighSkul community.
          </h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-8 text-primary-70">
            HighSkul Creatives events, activities and community happenings will
            be featured here.
          </p>
          <div className="mt-10 flex items-center gap-3">
            <span
              className="h-px w-16"
              style={{ backgroundColor: '#D4AF37' }}
            />
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary-50">
              Events Desk
            </span>
          </div>
        </div>
      </section>
    </Layout>
  )
}
