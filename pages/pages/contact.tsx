import { Layout } from '@components/common/Layout'

const EditorialImage = ({
  src,
  alt,
  className = '',
}: {
  src: string
  alt: string
  className?: string
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-primary-10 ${className}`}
      style={{
        border: '1px solid rgba(166, 124, 0, 0.65)',
        boxShadow: '10px 10px 0 rgba(212, 175, 55, 0.18)',
      }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )
}

const SectionRule = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span
        className="h-px flex-1"
        style={{ backgroundColor: '#D4AF37' }}
      />
      <span
        className="text-[10px] font-bold uppercase tracking-[0.22em]"
        style={{ color: '#8A6500' }}
      >
        {label}
      </span>
      <span
        className="h-px w-10"
        style={{ backgroundColor: '#D4AF37' }}
      />
    </div>
  )
}

export default function ContactPage() {
  return (
    <Layout>
      <article
        className="mx-auto max-w-6xl px-4 md:px-8"
        style={{ color: 'var(--primary)' }}
      >
        {/* Hero */}
        <section className="relative min-h-[520px] md:min-h-[650px] overflow-hidden mb-20 md:mb-28">
          <img
            src="https://i0.wp.com/gis.edu.gh/wp-content/uploads/2025/02/1737041828651.jpg?resize=1600%2C1067&ssl=1"
            alt="Students at Ghana International School"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(8,8,8,0.84) 0%, rgba(8,8,8,0.42) 52%, rgba(8,8,8,0.08) 100%)',
            }}
          />

          <div className="relative min-h-[520px] md:min-h-[650px] flex items-end p-6 md:p-12 lg:p-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="h-px w-12"
                  style={{ backgroundColor: '#D4AF37' }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-[0.24em]"
                  style={{ color: '#F7E7A3' }}
                >
                  The Newsroom
                </span>
              </div>

              <h1
                className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.86] tracking-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#FFFFFF',
                }}
              >
                Contact
              </h1>

              <p
                className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed"
                style={{ color: '#F3EFE5' }}
              >
                Stories start with someone deciding they are worth telling.
              </p>
            </div>
          </div>
        </section>

        {/* Intro + contact details */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mb-24 md:mb-32">
          <div className="lg:col-span-5">
            <SectionRule label="Get in Touch" />

            <h2
              className="font-serif text-5xl md:text-7xl leading-[0.9]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Have something worth telling us?
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg md:text-xl leading-8 text-primary-80 mb-10">
              Got a story, idea, opportunity, correction or something happening
              in your school or community that you think HighSkul Creatives
              should know about? We want to hear from you.
            </p>

            <div
              className="border-t border-b py-8"
              style={{ borderColor: 'rgba(10,10,10,0.16)' }}
            >
              <a
                href="mailto:hiskulcreatives@gmail.com"
                className="block font-serif text-3xl md:text-4xl leading-none hover:opacity-60 transition-opacity"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                hiskulcreatives@gmail.com
              </a>

              <a
                href="tel:+233555728333"
                className="inline-block mt-5 text-base md:text-lg font-bold tracking-wide hover:opacity-60 transition-opacity"
              >
                0555728333
              </a>
            </div>

            <p className="mt-7 text-sm md:text-base leading-7 text-primary-70">
              Email is the easiest way to send us a story, document, photograph
              or other material. When possible, give your message a clear
              subject and tell us what it concerns.
            </p>
          </div>
        </section>

        {/* Photography break */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24 md:mb-32">
          <EditorialImage
            src="https://i0.wp.com/gis.edu.gh/wp-content/uploads/2025/10/DSC07607-scaled.jpg?resize=1600%2C1067&ssl=1"
            alt="Students gathered at Ghana International School"
            className="lg:col-span-8 h-[400px] md:h-[560px]"
          />

          <div className="lg:col-span-3 lg:col-start-10">
            <span
              className="font-serif text-6xl leading-none"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: '#D4AF37',
              }}
            >
              “
            </span>

            <p
              className="font-serif text-3xl md:text-4xl leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              You don't need to be a professional journalist to get in touch.
            </p>

            <div
              className="mt-6 h-px w-16"
              style={{ backgroundColor: '#D4AF37' }}
            />
          </div>
        </section>

        {/* What you can send */}
        <section className="mb-24 md:mb-32">
          <div className="max-w-3xl mb-12">
            <SectionRule label="Submissions" />

            <h2
              className="font-serif text-5xl md:text-7xl leading-[0.9]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              What You Can Send
            </h2>

            <p className="mt-6 text-lg md:text-xl leading-8 text-primary-70">
              If you think something is worth covering, start the conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24">
            {[
              [
                '01',
                'Story Tips',
                'Something happening at your school, on campus or in your community that deserves attention.',
              ],
              [
                '02',
                'Opportunities',
                'Scholarships, programmes, competitions, internships, jobs or other opportunities for young people.',
              ],
              [
                '03',
                'Events',
                'School events, student activities, exhibitions, competitions and other events our readers may care about.',
              ],
              [
                '04',
                'Creative Work',
                'Writing, photography, illustrations, artwork and other work you think belongs in the conversation.',
              ],
              [
                '05',
                'Contributions',
                'Want to write, report, photograph, edit or contribute to HighSkul Creatives? Tell us what you would like to bring.',
              ],
              [
                '06',
                'Corrections',
                'Found something inaccurate in one of our published stories? Let us know so we can look into it.',
              ],
            ].map(([number, title, body]) => (
              <div
                key={number}
                className="py-8 border-t flex gap-6"
                style={{ borderColor: 'rgba(10,10,10,0.14)' }}
              >
                <span
                  className="text-xs font-bold tracking-widest pt-1"
                  style={{ color: '#8A6500' }}
                >
                  {number}
                </span>

                <div>
                  <h3
                    className="font-serif text-2xl md:text-3xl mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {title}
                  </h3>

                  <p className="text-sm md:text-base leading-7 text-primary-70">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Story tips */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mb-24 md:mb-32">
          <div className="lg:col-span-4">
            <SectionRule label="Story Tips" />

            <h2
              className="font-serif text-4xl md:text-6xl leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Sending a Story Tip?
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-base md:text-lg leading-8 text-primary-80">
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

        {/* Classroom image */}
        <section className="relative min-h-[420px] md:min-h-[540px] overflow-hidden mb-24 md:mb-32">
          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Students_reading_in_a_classroom_02.jpg"
            alt="Students reading together in a classroom"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(8,8,8,0.78), rgba(8,8,8,0.22), rgba(8,8,8,0.05))',
            }}
          />

          <div className="relative min-h-[420px] md:min-h-[540px] flex items-end p-7 md:p-14">
            <div className="max-w-2xl">
              <span
                className="text-xs font-bold uppercase tracking-[0.24em]"
                style={{ color: '#F7E7A3' }}
              >
                Before You Send
              </span>

              <h2
                className="mt-5 font-serif text-5xl md:text-7xl leading-[0.9]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#FFFFFF',
                }}
              >
                Give us enough to understand the story.
              </h2>
            </div>
          </div>
        </section>

        {/* Corrections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-24 md:mb-32">
          <div>
            <SectionRule label="Accuracy" />

            <h2
              className="font-serif text-4xl md:text-6xl leading-none mb-7"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Corrections &amp; Updates
            </h2>
          </div>

          <div className="space-y-5 text-base md:text-lg leading-8 text-primary-80">
            <p>
              Accuracy matters. If you spot an error in something we've
              published, please contact us with the article title, the detail
              you believe is incorrect and any information that can help us
              verify the correction.
            </p>

            <p>
              A difference of opinion is not necessarily a factual error, but
              useful context and well-supported corrections are always welcome.
            </p>
          </div>
        </section>

        {/* Final notice */}
        <section
          className="relative overflow-hidden px-7 py-16 md:px-14 md:py-20 mb-8"
          style={{ backgroundColor: '#0A0A0A' }}
        >
          <div
            className="absolute top-0 left-0 h-px w-full"
            style={{ backgroundColor: '#D4AF37' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <span
                className="text-xs font-bold uppercase tracking-[0.24em]"
                style={{ color: '#F7E7A3' }}
              >
                A note from the newsroom
              </span>

              <h2
                className="mt-5 font-serif text-4xl md:text-5xl leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#FFFFFF',
                }}
              >
                Before You Send
              </h2>
            </div>

            <div
              className="md:col-span-7 md:col-start-6 space-y-5 text-base md:text-lg leading-8"
              style={{ color: '#D8D6CF' }}
            >
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
          </div>
        </section>
      </article>
    </Layout>
  )
}
