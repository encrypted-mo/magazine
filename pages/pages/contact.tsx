import { Layout } from '@components/common/Layout'
import Hero from '@components/common/Hero/Hero'

export default function ContactPage() {
  return (
    <Layout>
      <Hero title="Contact Us" />

      <div className="prose max-w-3xl">
        <p>
          Got a story, idea, question or something you think HighSkul should
          know about? We want to hear from you.
        </p>

        <h2>Get in Touch</h2>

        <p>
          <strong>Editorial</strong>
        </p>

        <p>
          Have a story worth covering? Send us the details and our editorial
          team will take a look.
        </p>

        <p>
          <strong>Story Tips</strong>
        </p>

        <p>
          Seen something happening at your school, on campus or in your
          community that deserves attention? Tell us what happened, where and
          when it happened and why you think it matters.
        </p>

        <p>
          <strong>Contribute</strong>
        </p>

        <p>
          Want to write, report, photograph, illustrate or contribute to
          HighSkul? Get in touch and tell us a little about yourself and what
          you would like to contribute.
        </p>

        <p>
          <strong>General Enquiries</strong>
        </p>

        <p>
          For general questions, partnerships and other enquiries, you can
          reach us by email or phone.
        </p>

        <p>
          <a href="mailto:hiskulcreatives@gmail.com">
            hiskulcreatives@gmail.com
          </a>
        </p>

        <p>
          <a href="tel:+233555728333">0555728333</a>
        </p>

        <h2>Sending Us a Story Tip?</h2>

        <p>
          The more information you can provide, the easier it is for us to
          understand what you are sharing. If possible, include:
        </p>

        <ul>
          <li>What happened</li>
          <li>Where and when it happened</li>
          <li>The people or organisations involved</li>
          <li>Any relevant documents, photos or other evidence</li>
          <li>People who can confirm or provide more information</li>
          <li>Why you think the story matters to our readers</li>
        </ul>

        <p>
          You do not need to have everything figured out before contacting us.
          If you think there is a story there, start the conversation.
        </p>

        <h2>Before You Send</h2>

        <p>
          Please do not send confidential or sensitive information unless you
          are comfortable sharing it by email. We may contact you for
          clarification or additional information before deciding whether to
          publish a story.
        </p>

        <p>
          Sending information to HighSkul does not guarantee publication.
        </p>
      </div>
    </Layout>
  )
}
