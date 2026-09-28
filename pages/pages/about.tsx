import { Layout } from '@components/common/Layout'

export default function AboutPage() {
  return (
    <Layout>
      <article className="max-w-5xl mx-auto">
        <section className="relative h-72 md:h-96 overflow-hidden rounded-2xl mb-14">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black-a-40" />

          <div className="absolute inset-0 flex items-end p-6 md:p-10">
            <h1
              className="text-4xl md:text-6xl font-bold tracking-tight"
              style={{ color: '#ffffff' }}
            >
              About Us
            </h1>
          </div>
        </section>

        <div className="max-w-3xl mx-auto">
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

          <section className="mb-14">
            <h2 className="mb-5 text-2xl md:text-3xl font-bold tracking-tight">
              Why HighSkul?
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8">
              <p>
                Young people have plenty to say, but too often the conversations
                happening around them are told without them. HighSkul exists to
                change that.
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

          <section className="mb-14">
            <h2 className="mb-5 text-2xl md:text-3xl font-bold tracking-tight">
              What We Cover
            </h2>

            <div className="space-y-6 text-base md:text-lg leading-8">
              <p>
                HighSkul is built around the different parts of young life that
                deserve attention.
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
                We also believe there is room for personality. HighSkul does
                not have to sound like a textbook or a government press release.
                Our stories can have energy, character and a distinctly young
                voice without sacrificing accuracy.
              </p>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="mb-5 text-2xl md:text-3xl font-bold tracking-tight">
              Who We Write For
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8">
              <p>
                HighSkul is primarily for students and young people, but our
                stories are not limited to them.
              </p>

              <p>
                We write for anyone interested in what young people are doing,
                experiencing and building. That includes students, educators,
                creatives, professionals, parents and anyone who wants to
                understand the generation coming up behind them.
              </p>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="mb-5 text-2xl md:text-3xl font-bold tracking-tight">
              Our Contributors
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8">
              <p>
                HighSkul is not just built by one newsroom. We want to make room
                for writers, student reporters, photographers, editors,
                illustrators, creatives and other contributors with something
                worth bringing to the table.
              </p>

              <p>
                Different people see different things. Bringing those
                perspectives together makes the publication stronger.
              </p>
            </div>
          </section>

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

          <section className="mb-6">
            <h2 className="mb-5 text-2xl md:text-3xl font-bold tracking-tight">
              Be Part of HighSkul
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-8">
              <p>
                Have a story? An idea? An opinion? An opportunity students
                should know about? Or something you think we should be paying
                attention to?
              </p>

              <p>
                Tell us. HighSkul is a publication about young people, but it
                is also a space for young people to participate in the
                conversation.
              </p>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  )
}
