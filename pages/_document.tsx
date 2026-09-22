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
        <Head>
          {/* HighSkul Creatives favicon system */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
          <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
          <link
            rel="icon"
            href="/dark-32x32.png"
            sizes="32x32"
            type="image/png"
            media="(prefers-color-scheme: dark)"
          />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f5a623" />

          {process.env.NODE_ENV === 'production' && (
            <>
              {/* Only run GA on Production */}
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
            </>
          )}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
