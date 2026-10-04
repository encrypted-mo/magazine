import { Layout } from '@components/common/Layout'
export default function Custom404() {
  return (
    <Layout>
      <main className="min-h-[60vh] flex items-center justify-center px-4">
        <section className="w-full max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span
              className="h-px w-12"
              style={{ backgroundColor: '#D4AF37' }}
            />
            <span
              className="text-[10px] md:text-xs font-bold uppercase tracking-[0.24em]"
              style={{ color: '#8A6500' }}
            >
              HighSkul Creatives
            </span>
            <span
              className="h-px w-12"
              style={{ backgroundColor: '#D4AF37' }}
            />
          </div>
          <p
            className="text-7xl md:text-9xl leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: '#D4AF37',
            }}
          >
            404
          </p>
          <h1
            className="mt-2 text-4xl md:text-6xl leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Page not found
          </h1>
          <p className="mt-5 text-sm md:text-base text-primary-60">
            Sorry, we couldn&apos;t find the page you were looking for.
          </p>
        </section>
      </main>
    </Layout>
  )
}
