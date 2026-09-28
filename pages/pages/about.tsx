import { Layout } from '@components/common/Layout'
import Hero from '@components/common/Hero/Hero'

export default function AboutPage() {
  return (
    <Layout>
      <Hero title="About Us" />

      <div className="prose max-w-3xl">
        <p>
          HighSkul Creatives is where student life meets the wider world.
        </p>

        <p>
          We cover the stories, conversations, ideas and opportunities shaping
          young people, from education and campus life to culture, sport,
          careers and beyond.
        </p>
      </div>
    </Layout>
  )
}
