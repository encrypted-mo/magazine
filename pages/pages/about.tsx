import { Layout } from '@components/common/Layout'

const ImageBreak = ({
  src,
  alt,
  tall = false,
}: {
  src: string
  alt: string
  tall?: boolean
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${
        tall ? 'h-80 md:h-[520px]' : 'h-64 md:h-96'
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )
}

export default function AboutPage() {
  return (
    <Layout>
      <article className="max-w-5xl mx-auto">
        {/* Hero */}
        <section className="relative h-[420px] md:h-[620px] overflow-hidden rounded-2xl mb-16">
          <img
            src="https://cdn.modernghana.com/story_/926/499/2102019110643_m6itl8w331_6034305772744_6903731568302.png"
            alt="Students from international schools gathered at a student-led conference in Ghana"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black-a-30" />

          <div className="absolute inset-0 flex items-end justify-center p-6 md:p-12 text-center">
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight"
              style={{ color: '#ffffff' }}
            >
              About HighSkul Creatives
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="max-w-4xl mx-auto text-center mb-24">
          <p className="text-3xl md:text-5xl leading-tight font-medium tracking-tight">
            HighSkul Creatives is where student life meets the wider world.
          </p>

          <p className="mt-10 text-lg md:text-xl leading-8">
            We cover the stories, conversations, ideas and opportunities
            shaping young people, from education and campus life to culture,
            sport, careers and beyond.
          </p>
        </section>

        {/* Why HighSkul Creatives? */}
        <section className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Why HighSkul Creatives?
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-8">
            <p>
              Young people are constantly creating, questioning, competing,
              learning and figuring out what comes next. There is no shortage
              of stories around student life, but too often those stories are
              treated as an afterthought.
            </p>

            <p>
              HighSkul Creatives exists to give those stories the attention
              they deserve.
            </p>

            <p>
              We want to create a publication that feels relevant to the
              people actually living these experiences while still being
              interesting to anyone who wants to understand the generation
              shaping what comes next.
            </p>
          </div>
        </section>

        {/* Image */}
        <ImageBreak
          src="https://stlouisshs.edu.gh/wp-content/uploads/2022/03/student1-768x768.jpeg"
          alt="Students at St. Louis Senior High School in Kumasi"
          tall
        />

        {/* What We Cover */}
        <section className="max-w-3xl mx-auto text-center my-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            What We Cover
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-8">
            <p>
              HighSkul Creatives covers the parts of young life that deserve
              more than a passing mention.
            </p>

            <p>
              That includes news and education, student life, arts and
              entertainment, sport, careers and opportunities, opinion and the
              conversations happening around schools and communities.
            </p>

            <p>
              Some stories are serious. Some are creative. Some are simply
              about something interesting happening around young people. The
              common thread is relevance.
            </p>
          </div>
        </section>

        {/* Image */}
        <ImageBreak
          src="https://idealcollegeonline.org/wp-content/uploads/2021/12/event2.jpg"
          alt="Students at Ideal College"
        />

        {/* How We Choose Stories */}
        <section className="max-w-3xl mx-auto text-center my-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            How We Choose Stories
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-8">
            <p>
              We look for stories that are useful, interesting, timely,
              thought-provoking or simply worth knowing about.
            </p>

            <p>
              We pay attention to what students are talking about, what is
              happening in schools and communities, what young people are
              creating and the opportunities that could make a difference.
            </p>

            <p>
              A story does not have to be huge to matter. Sometimes the most
              interesting stories are the ones happening right around us.
            </p>
          </div>
        </section>

        {/* Our Editorial Approach */}
        <section className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Our Editorial Approach
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-8">
            <p>
              We want HighSkul Creatives to feel young without feeling careless.
            </p>

            <p>
              Our stories should be engaging and accessible while still taking
              facts, context and the people involved seriously.
            </p>

            <p>
              We aim to give people room to express different perspectives,
              clearly distinguish reporting from opinion and correct mistakes
              when they happen.
            </p>
          </div>
        </section>

        {/* Image */}
        <ImageBreak
          src="https://dpsghana.edu.gh/assets/images/about-dps-ghana-committed-to-the-excellance-3.png"
          alt="Students at DPS International Ghana"
          tall
        />

        {/* Who We Write For */}
        <section className="max-w-3xl mx-auto text-center my-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Who We Write For
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-8">
            <p>
              HighSkul Creatives is primarily for young people navigating
              school, education, creativity, friendships, ambitions and the
              question of what comes next.
            </p>

            <p>
              But you do not have to be a student to find something here.
              Parents, educators, professionals, creators and anyone curious
              about young people are welcome.
            </p>
          </div>
        </section>

        {/* Our Contributors */}
        <section className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Our Contributors
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-8">
            <p>
              HighSkul Creatives is built around young voices.
            </p>

            <p>
              Our contributors can include writers, student reporters,
              photographers, editors, illustrators and other young creatives
              who have something to say or show.
            </p>

            <p>
              We believe the people experiencing these stories should have a
              place in telling them.
            </p>
          </div>
        </section>

        {/* Image */}
        <ImageBreak
          src="https://images.squarespace-cdn.com/content/v1/5f97f1016ace3749ed3dc1fb/42ecefb8-788c-4f6e-bf7d-5095a19b5d17/1V6A0003.jpg"
          alt="Students working on creative projects at African Science Academy"
          tall
        />

        {/* Corrections & Updates */}
        <section className="max-w-3xl mx-auto text-center my-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Corrections &amp; Updates
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-8">
            <p>
              Accuracy matters to us. If we publish something that is
              inaccurate or incomplete, we want to know about it.
            </p>

            <p>
              When a correction or significant update is necessary, we will
              make the appropriate change and, where necessary, explain what
              was changed.
            </p>

            <p>
              If you spot an error in something we have published, please
              contact us with the relevant article and the information that
              needs correcting.
            </p>
          </div>
        </section>

        {/* Be Part of HighSkul Creatives */}
        <section className="max-w-4xl mx-auto text-center mt-24 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Be Part of HighSkul Creatives
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-8">
            <p>
              Have a story to tell, an idea to pitch or something you think
              young people should know about?
            </p>

            <p>
              HighSkul Creatives is always looking for new voices, ideas and
              perspectives.
            </p>

            <p className="font-medium">
              If you think there is a story there, start the conversation.
            </p>
          </div>
        </section>
      </article>
    </Layout>
  )
}
