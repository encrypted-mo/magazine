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

export default function AboutPage() {
  return (
    <Layout>
      <article
        className="mx-auto max-w-6xl px-4 md:px-8"
        style={{ color: 'var(--primary)' }}
      >
        {/* Hero */}
        <section className="relative min-h-[520px] md:min-h-[650px] overflow-hidden mb-20 md:mb-28">
          <img
            src="https://cdn.modernghana.com/story_/926/499/2102019110643_m6itl8w331_6034305772744_6903731568302.png"
            alt="Students from international schools gathered at a student-led conference in Ghana"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(8,8,8,0.82) 0%, rgba(8,8,8,0.45) 48%, rgba(8,8,8,0.12) 100%)',
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
                  HighSkul Creatives
                </span>
              </div>

              <h1
                className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.86] tracking-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#FFFFFF',
                }}
              >
                About Us
              </h1>

              <p
                className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed"
                style={{ color: '#F3EFE5' }}
              >
                A publication built around the lives, voices and ideas of young
                people.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mb-24 md:mb-32">
          <div className="lg:col-span-4">
            <SectionRule label="Who We Are" />
            <p
              className="font-serif text-4xl md:text-5xl leading-[0.98]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Student life meets the wider world.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 pt-1">
            <p className="text-xl md:text-2xl leading-relaxed font-medium">
              HighSkul Creatives is where student life meets the wider world.
            </p>

            <p className="mt-7 text-base md:text-lg leading-8 text-primary-70">
              We cover the stories, conversations, ideas and opportunities
              shaping young people, from education and campus life to culture,
              sport, careers and beyond.
            </p>
          </div>
        </section>

        {/* Why */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-24 md:mb-32">
          <div className="lg:col-span-7">
            <EditorialImage
              src="https://stlouisshs.edu.gh/wp-content/uploads/2022/03/student1-768x768.jpeg"
              alt="Students of St. Louis Senior High School in Kumasi"
              className="h-[430px] md:h-[620px]"
            />
          </div>

          <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-center">
            <SectionRule label="Our Purpose" />

            <h2
              className="font-serif text-4xl md:text-6xl leading-none mb-7"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Why HighSkul Creatives?
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8 text-primary-80">
              <p>
                Young people have plenty to say, but too often the conversations
                happening around them are told without them. HighSkul Creatives
                exists to change that.
              </p>

              <p>
                We want to create a space where student experiences are taken
                seriously, emerging voices can find an audience and the things
                young people care about are given room to breathe.
              </p>

              <p>
                That means more than reporting what happened. It means asking
                questions, finding the people behind the stories and making room
                for different perspectives.
              </p>
            </div>
          </div>
        </section>

        {/* What we cover */}
        <section className="mb-24 md:mb-32">
          <div className="max-w-3xl mb-14">
            <SectionRule label="The Publication" />

            <h2
              className="font-serif text-5xl md:text-7xl leading-[0.9]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              What We Cover
            </h2>

            <p className="mt-6 text-lg md:text-xl leading-8 text-primary-70">
              HighSkul Creatives is built around the different parts of young
              life that deserve attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24">
            {[
              [
                '01',
                'News',
                'The people, events and developments that matter to students and young communities.',
              ],
              [
                '02',
                'Academics',
                'Education, learning, school life and the issues shaping the way students study and prepare for the future.',
              ],
              [
                '03',
                'Student Life',
                'The everyday experiences, challenges, relationships, conversations and moments that make up student life.',
              ],
              [
                '04',
                'Arts & Entertainment',
                'Music, film, art, creativity, pop culture and the people making things worth paying attention to.',
              ],
              [
                '05',
                'Sports',
                'The athletes, teams, competitions and stories connecting young people through sport.',
              ],
              [
                '06',
                'Career & Opportunities',
                'Internships, jobs, scholarships, programmes, skills and practical opportunities that can help young people move forward.',
              ],
              [
                '07',
                'Opinion',
                'Personal perspectives, arguments and conversations about the issues that young people are thinking and talking about.',
              ],
            ].map(([number, title, body]) => (
              <div
                key={number}
                className="py-7 border-t flex gap-6"
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

        {/* Editorial approach image break */}
        <section className="relative mb-24 md:mb-32 min-h-[440px] md:min-h-[560px] overflow-hidden">
          <img
            src="https://www.africanscienceacademy.org/s/1V6A0006.jpg"
            alt="Students at African Science Academy"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(8,8,8,0.88), rgba(8,8,8,0.35), rgba(8,8,8,0.05))',
            }}
          />

          <div className="relative min-h-[440px] md:min-h-[560px] flex items-center p-7 md:p-14 lg:p-20">
            <div className="max-w-2xl">
              <span
                className="text-xs font-bold uppercase tracking-[0.24em]"
                style={{ color: '#F7E7A3' }}
              >
                How We Work
              </span>

              <h2
                className="mt-5 font-serif text-5xl md:text-7xl leading-[0.9]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#FFFFFF',
                }}
              >
                Journalism with room for personality.
              </h2>

              <p
                className="mt-7 text-base md:text-lg leading-8"
                style={{ color: '#F3EFE5' }}
              >
                We believe young audiences deserve journalism that respects
                their intelligence. We aim to be clear, accurate and fair while
                keeping our writing accessible and engaging.
              </p>
            </div>
          </div>
        </section>

        {/* How we choose */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mb-24 md:mb-32">
          <div className="lg:col-span-4">
            <SectionRule label="Editorial" />
            <h2
              className="font-serif text-4xl md:text-6xl leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              How We Choose Stories
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-base md:text-lg leading-8 text-primary-80">
            <p>
              Not every story has to be breaking news to matter. We look for
              stories that are useful, interesting, timely, overlooked or simply
              worth a conversation.
            </p>

            <p>
              Sometimes that means covering something happening on a campus.
              Sometimes it means speaking to a student with an unusual
              experience, highlighting an emerging creative or breaking down an
              opportunity that students might otherwise miss.
            </p>

            <p>
              We are interested in the big picture, but we also care about the
              small details that make a story feel real.
            </p>
          </div>
        </section>

        {/* Editorial standards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-24 md:mb-32">
          <div>
            <SectionRule label="Standards" />
            <h2
              className="font-serif text-4xl md:text-6xl leading-none mb-7"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Editorial Approach
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8 text-primary-80">
              <p>
                We believe young audiences deserve journalism that respects
                their intelligence. We aim to be clear, accurate and fair while
                keeping our writing accessible and engaging.
              </p>

              <p>
                We distinguish reporting from opinion and do our best to verify
                information before publishing. When a story involves
                allegations, disputed claims or information that cannot be
                independently confirmed, we treat that distinction seriously.
              </p>

              <p>
                We also believe there is room for personality. HighSkul
                Creatives does not have to sound like a textbook or a government
                press release. Our stories can have energy, character and a
                distinctly young voice without sacrificing accuracy.
              </p>
            </div>
          </div>

          <EditorialImage
            src="https://dpsghana.edu.gh/assets/images/about-dps-ghana-committed-to-the-excellance-3.png"
            alt="Students learning together at DPS International Ghana"
            className="h-[420px] md:h-[620px] md:mt-12"
          />
        </section>

        {/* Audience + contributors */}
        <section className="border-t border-b py-16 md:py-20 mb-24 md:mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <SectionRule label="Readers" />

            <h2
              className="font-serif text-4xl md:text-5xl leading-none mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Who We Write For
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8 text-primary-80">
              <p>
                HighSkul Creatives is primarily for students and young people,
                but our stories are not limited to them.
              </p>

              <p>
                We write for anyone interested in what young people are doing,
                experiencing and building. That includes students, educators,
                creatives, professionals, parents and anyone who wants to
                understand the generation coming up behind them.
              </p>
            </div>
          </div>

          <div>
            <SectionRule label="Community" />

            <h2
              className="font-serif text-4xl md:text-5xl leading-none mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Contributors
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8 text-primary-80">
              <p>
                HighSkul Creatives is not just built by one newsroom. We want to
                make room for writers, student reporters, photographers,
                editors, illustrators, creatives and other contributors with
                something worth bringing to the table.
              </p>

              <p>
                Different people see different things. Bringing those
                perspectives together makes the publication stronger.
              </p>
            </div>
          </div>
        </section>

        {/* Final image */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-24 md:mb-32">
          <EditorialImage
            src="https://www.africanscienceacademy.org/s/1V6A0003.jpg"
            alt="Students at African Science Academy working on robotics"
            className="lg:col-span-8 h-[420px] md:h-[560px]"
          />

          <div className="lg:col-span-3 lg:col-start-10 pb-4">
            <span
              className="block text-5xl mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: '#D4AF37',
              }}
            >
              ✦
            </span>

            <h2
              className="font-serif text-3xl md:text-4xl leading-none mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Accuracy matters.
            </h2>

            <p className="text-sm md:text-base leading-7 text-primary-70">
              If we publish an error, we aim to correct it clearly rather than
              quietly changing the record.
            </p>
          </div>
        </section>

        {/* Corrections */}
        <section className="max-w-3xl mx-auto mb-24 md:mb-32">
          <SectionRule label="Corrections & Updates" />

          <div className="space-y-5 text-base md:text-lg leading-8 text-primary-80">
            <p>
              We take accuracy seriously. If we publish an error, we aim to
              correct it clearly rather than quietly changing the record.
            </p>

            <p>
              If you spot an error or have information that could materially
              improve one of our stories, please let us know through our Contact
              page.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative overflow-hidden px-7 py-16 md:px-14 md:py-20 mb-8"
          style={{ backgroundColor: '#0A0A0A' }}
        >
          <div
            className="absolute top-0 left-0 h-px w-full"
            style={{ backgroundColor: '#D4AF37' }}
          />

          <div className="max-w-3xl">
            <span
              className="text-xs font-bold uppercase tracking-[0.24em]"
              style={{ color: '#F7E7A3' }}
            >
              Join the conversation
            </span>

            <h2
              className="mt-5 font-serif text-5xl md:text-7xl leading-[0.9]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: '#FFFFFF',
              }}
            >
              Be Part of HighSkul Creatives
            </h2>

            <div
              className="mt-7 space-y-5 text-base md:text-lg leading-8"
              style={{ color: '#D8D6CF' }}
            >
              <p>
                Have a story? An idea? An opinion? An opportunity students
                should know about? Or something you think we should be paying
                attention to?
              </p>

              <p>
                Tell us. HighSkul Creatives is a publication about young people,
                but it is also a space for young people to participate in the
                conversation.
              </p>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}
