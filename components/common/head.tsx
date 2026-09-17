import { DefaultSeo } from 'next-seo'
import { SITE_NAME, SEO_DESCRIPTION, SITE_URL, OG_IMAGE } from '@lib/constants'
const Head = () => {
  return (
    <DefaultSeo
      defaultTitle="HighSkul Creatives"
      titleTemplate={`%s | ${SITE_NAME}`}
      description={SEO_DESCRIPTION}
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: SITE_URL,
        site_name: SITE_NAME,
        images: [
          {
            url: OG_IMAGE.large.url,
            width: OG_IMAGE.large.width,
            height: OG_IMAGE.large.height,
          },
        ],
      }}
      twitter={{
        handle: '@edgarlr_',
        site: '@edgarlr_',
        cardType: 'summary_large_image',
      }}
    />
  )
}
export default Head
