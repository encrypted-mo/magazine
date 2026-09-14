import { Layout } from '@components/common/Layout'
import Hero from '@components/common/Hero/Hero'

export default function EventsPage() {
  return (
    <Layout>
      <Hero title="Events" />

      <div className="prose max-w-3xl">
        <p>
          HighSkul events and activities will be featured here.
        </p>
      </div>
    </Layout>
  )
}