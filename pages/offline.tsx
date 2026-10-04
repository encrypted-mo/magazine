import { Layout } from '@components/common/Layout'
const offline = () => {
  return (
    <Layout>
      <main className="min-h-[60vh] flex items-center justify-center px-4">
        <section className="w-full max-w-3xl text-center">
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
          <h1
            className="text-5xl md:text-7xl leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            You are offline
          </h1>
          <div
            className="mx-auto mt-7 h-px w-16"
            style={{ backgroundColor: '#D4AF37' }}
          />
          <p className="mt-6 text-sm md:text-base leading-7 text-primary-60">
            This page can&apos;t be displayed because you are not connected to
            the internet.
          </p>
        </section>
      </main>
    </Layout>
  )
}
export default offline
