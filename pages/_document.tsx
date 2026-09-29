import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        {process.env.NODE_ENV === 'production' ? (
          <Head>
            <link
              rel="icon"
              href="/static/favicon/favicon.ico"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/static/favicon/favicon-16x16.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/static/favicon/favicon-32x32.png"
            />
            <link
              rel="apple-touch-icon"
              href="/static/favicon/apple-touch-icon.png"
            />
            <link
              rel="manifest"
              href="/static/favicon/site.webmanifest"
            />
            <link
              rel="mask-icon"
              href="/static/favicon/safari-pinned-tab.svg"
            />

            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
            />
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </Head>
        ) : (
          <Head>
            <link
              rel="icon"
              href="/static/favicon/favicon.ico"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/static/favicon/favicon-16x16.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/static/favicon/favicon-32x32.png"
            />
            <link
              rel="apple-touch-icon"
              href="/static/favicon/apple-touch-icon.png"
            />
            <link
              rel="manifest"
              href="/static/favicon/site.webmanifest"
            />
            <link
              rel="mask-icon"
              href="/static/favicon/safari-pinned-tab.svg"
            />
          </Head>
        )}

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
