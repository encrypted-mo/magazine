import { Layout } from '@components/common/Layout'
import Hero from '@components/common/Hero/Hero'

export default function AboutPage() {
  return (
    <Layout>
      <Hero title="About" />

      <div className="prose max-w-3xl">
        <p>
          HighSkul Creatives is a youth-focused publication covering student
          life, education, campus opinions, news, opportunities and careers.
        </p>

        <p>
          We create and share stories that inform, entertain and give young
          people a space to be heard.
        </p>
      </div>
    </Layout>
  )
}