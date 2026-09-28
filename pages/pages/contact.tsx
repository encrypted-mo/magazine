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
        tall ? 'h-80 md:h-[500px]' : 'h-64 md:h-96'
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

export default function ContactPage() {
  return (
    <Layout>
      <article className="max-w-5xl mx-auto">
        {/* Hero */}
        <section className="relative h-72 md:h-96 overflow-hidden rounded-2xl mb-16">
          <img
            src="https://i0.wp.com/gis.edu.gh/wp-content/uploads/2025/02/1737041828651.jpg?resize=1600%2C1067&ssl=1"
            alt="Students at Ghana International School"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }}
          />

          <div className="absolute inset-0 flex items-end justify-center p-6 md:p-10">
            <h1
              className="text-4xl md:text-6xl font-bold tracking-tight text-center"
              style={{ color: '#ffffff' }}
            >
              Contact
            </h1>
          </div>
        </section>

        <div className="max-w-3xl mx-auto text-center">
          {/* Intro */}
          <section className="mb-16">
            <p className="text-2xl md:text-3xl leading-relaxed font-medium tracking-tight">
              Have something worth telling us?
            </p>

            <p className="mt-6 text-lg md:text-xl leading-relaxed text-primary-70">
              Got a story, idea, opportunity, correction or something happening
              in your school or community that you think HighSkul Creatives
              should know about? We want to hear from you.
            </p>
          </section>

          {/* Get in touch */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl md:text-3xl font-bold tracking-tight">
              Get in Touch
            </h2>

            <div className="space-y-5">
              <a
                href="mailto:hiskulcreatives@gmail.com"
                className="block text-xl md:text-2xl font-medium hover:opacity-60 transition-opacity"
              >
                hiskulcreatives@gmail.com
              </a>

              <a
                href="tel:+233555728333"
                className="block text-lg md:text-xl hover:opacity-60 transition-opacity"
              >
                0555728333
              </a>
            </div>

            <p className="mt-6 text-base md:text-lg leading-8 text-primary-70">
              Email is the easiest way to send us a story, document, photograph
              or other material. When possible, give your message a clear
              subject and tell us what it concerns.
            </p>
          </section>

          {/* Image */}
          <div className="mb-16">
            <ImageBreak
              src="https://i0.wp.com/gis.edu.gh/wp-content/uploads/2025/10/DSC07607-scaled.jpg?resize=1600%2C1067&ssl=1"
              alt="Students gathered at Ghana International School"
              tall
            />
          </div>

          {/* What you can send */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl md:text-3xl font-bold tracking-tight">
              What You Can Send
            </h2>

            <p className="mb-8 text-base md:text-lg leading-8">
              You don't need to be a professional journalist to get in touch.
              If you think something is worth covering, start the conversation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 text-left">
              <div>
                <h3 className="font-bold text-lg md:text-xl mb-2">
                  Story Tips
                </h3>
                <p className="text-base md:text-lg leading-7">
                  Something happening at your school, on campus or in your
                  community that deserves attention.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg md:text-xl mb-2">
                  Opportunities
                </h3>
                <p className="text-base md:text-lg leading-7">
                  Scholarships, programmes, competitions, internships, jobs or
                  other opportunities for young people.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg md:text-xl mb-2">
                  Events
                </h3>
                <p className="text-base md:text-lg leading-7">
                  School events, student activities, exhibitions, competitions
                  and other events our readers may care about.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg md:text-xl mb-2">
                  Creative Work
                </h3>
                <p className="text-base md:text-lg leading-7">
                  Writing, photography, illustrations, artwork and other work
                  you think belongs in the conversation.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg md:text-xl mb-2">
                  Contributions
                </h3>
                <p className="text-base md:text-lg leading-7">
                  Want to write, report, photograph, edit or contribute to
                  HighSkul Creatives? Tell us what you would like to bring.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg md:text-xl mb-2">
                  Corrections
                </h3>
                <p className="text-base md:text-lg leading-7">
                  Found something inaccurate in one of our published stories?
                  Let us know so we can look into it.
                </p>
              </div>
            </div>
          </section>

          {/* Image */}
          <div className="mb-16">
            <ImageBreak
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Students_reading_in_a_classroom_02.jpg"
              alt="Students reading together in a classroom"
            />
          </div>

          {/* Story tips */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl md:text-3xl font-bold tracking-tight">
              Sending a Story Tip?
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8">
              <p>
                The more information you can give us, the easier it is to
                understand what you are sharing.
              </p>

              <p>
                If possible, tell us what happened, where and when it happened,
                who was involved and why you think it matters. Photos, documents
                or people who can provide more information can also be useful.
              </p>

              <p>
                You don't have to have the entire story figured out before you
                contact us. If you think there is something worth looking into,
                tell us what you know.
              </p>
            </div>
          </section>

          {/* Corrections */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl md:text-3xl font-bold tracking-tight">
              Corrections &amp; Updates
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8">
              <p>
                Accuracy matters. If you spot an error in something we've
                published, please contact us with the article title, the detail
                you believe is incorrect and any information that can help us
                verify the correction.
              </p>

              <p>
                A difference of opinion is not necessarily a factual error, but
                useful context and well-supported corrections are always
                welcome.
              </p>
            </div>
          </section>

          {/* Before you send */}
          <section className="mb-6">
            <h2 className="mb-6 text-2xl md:text-3xl font-bold tracking-tight">
              Before You Send
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8">
              <p>
                Please avoid sending confidential or sensitive personal
                information unless it is necessary to understand what you are
                sharing. If something is sensitive, tell us clearly.
              </p>

              <p>
                Sending a story idea, press release, photograph, event notice
                or other material does not guarantee publication. We consider
                submissions based on relevance, timing, public interest and
                whether the information can be verified.
              </p>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  )
}
