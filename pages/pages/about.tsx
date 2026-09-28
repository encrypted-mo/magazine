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
        <section className="relative h-72 md:h-96 overflow-hidden rounded-2xl mb-14">
          <img
            src="https://cdn.modernghana.com/story_/926/499/2102019110643_m6itl8w331_6034305772744_6903731568302.png"
            alt="Students from international schools gathered at a student-led conference in Ghana"
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
              About Us
            </h1>
          </div>
        </section>

        <div className="max-w-3xl mx-auto text-center">
          {/* Intro */}
          <section className="mb-14">
            <p className="text-2xl md:text-3xl leading-relaxed font-medium tracking-tight">
              HighSkul Creatives is where student life meets the wider world.
            </p>

            <p className="mt-6 text-lg md:text-xl leading-relaxed text-primary-70">
              We cover the stories, conversations, ideas and opportunities
              shaping young people, from education and campus life to culture,
              sport, careers and beyond.
            </p>
          </section>

          {/* Why HighSkul Creatives */}
          <section className="mb-14">
            <h2 className="mb-5 text-2xl md:text-3xl font-bold tracking-tight">
              Why HighSkul Creatives?
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8">
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
          </section>

          {/* Image 2 */}
          <div className="mb-14">
            <ImageBreak
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Students_reading_in_a_classroom_02.jpg"
              alt="Students reading together in a classroom in Ghana"
              tall
            />
          </div>

          {/* What We Cover */}
          <section className="mb-14">
            <h2 className="mb-5 text-2xl md:text-3xl font-bold tracking-tight">
              What We Cover
            </h2>

            <div className="space-y-6 text-base md:text-lg leading-8">
              <p>
                HighSkul Creatives is built around the different parts of young
                life that deserve attention.
              </p>

              <div>
                <h3 className="font-bold text-lg md:text-xl">News</h3>
                <p>
                  The people, events and developments that matter to students
                  and young communities.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg md:text-xl">Academics</h3>
                <p>
                  Education, learning, school life and the issues shaping the
                  way students study and prepare for the future.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg md:text-xl">Student Life</h3>
                <p>
                  The everyday experiences, challenges, relationships,
                  conversations and moments that make up student life.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg md:text-xl">
                  Arts &amp; Entertainment
                </h3>
                <p>
                  Music, film, art, creativity, pop culture and the people
                  making things worth paying attention to.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg md:text-xl">Sports</h3>
                <p>
                  The athletes, teams, competitions and stories connecting young
                  people through sport.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg md:text-xl">
                  Career &amp; Opportunities
                </h3>
                <p>
                  Internships, jobs, scholarships, programmes, skills and
                  practical opportunities that can help young people move
                  forward.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg md:text-xl">Opinion</h3>
                <p>
                  Personal perspectives, arguments and conversations about the
                  issues that young people are thinking and talking about.
                </p>
              </div>
            </div>
          </section>

          {/* Image 3 */}
          <div className="mb-14">
            <ImageBreak
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Young_students.jpg"
              alt="Young students walking together in Nyankpala, Ghana"
            />
          </div>

          {/* How We Choose Stories */}
          <section className="mb-14">
            <h2 className="mb-5 text-2xl md:text-3xl font-bold tracking-tight">
              How We Choose Stories
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8">
              <p>
                Not every story has to be breaking news to matter. We look for
                stories that are useful, interesting, timely, overlooked or
                simply worth a conversation.
              </p>

              <p>
                Sometimes that means covering something happening on a campus.
                Sometimes it means speaking to a student with an unusual
                experience, highlighting an emerging creative or breaking down
                an opportunity that students might otherwise miss.
              </p>

              <p>
                We are interested in the big picture, but we also care about the
                small details that make a story feel real.
              </p>
            </div>
          </section>

          {/* Our Editorial Approach */}
          <section className="mb-14">
            <h2 className="mb-5 text-2xl md:text-3xl font-bold tracking-tight">
              Our Editorial Approach
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8">
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
          </section>

          {/* Image 4 */}
          <div className="mb-14">
            <ImageBreak
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Students_in_class.jpg"
              alt="Nursing students in a classroom at Kumasi Nursing and Midwifery Training College"
            />
          </div>

          {/* Who We Write For */}
          <section className="mb-14">
            <h2 className="mb-5 text-2xl md:text-3xl font-bold tracking-tight">
              Who We Write For
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8">
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
          </section>

          {/* Our Contributors */}
          <section className="mb-14">
            <h2 className="mb-5 text-2xl md:text-3xl font-bold tracking-tight">
              Our Contributors
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8">
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
          </section>

          {/* Image 5 */}
          <div className="mb-14">
            <ImageBreak
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Ghana_Senior_High_School_Students.jpg"
              alt="Ghanaian senior high school students celebrating together"
              tall
            />
          </div>

          {/* Corrections & Updates */}
          <section className="mb-14">
            <h2 className="mb-5 text-2xl md:text-3xl font-bold tracking-tight">
              Corrections &amp; Updates
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8">
              <p>
                We take accuracy seriously. If we publish an error, we aim to
                correct it clearly rather than quietly changing the record.
              </p>

              <p>
                If you spot an error or have information that could materially
                improve one of our stories, please let us know through our
                Contact page.
              </p>
            </div>
          </section>

          {/* Be Part of HighSkul Creatives */}
          <section className="mb-6">
            <h2 className="mb-5 text-2xl md:text-3xl font-bold tracking-tight">
              Be Part of HighSkul Creatives
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8">
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
          </section>
        </div>
      </article>
    </Layout>
  )
}
