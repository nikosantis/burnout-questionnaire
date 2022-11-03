import { getTranslateFromMap } from 'lib/translate'

const seoContent = getTranslateFromMap('home', 'en')

export default function SeoIndex() {
  return (
    <>
      <title>{seoContent.title}</title>
      <meta name='description' content={seoContent.description} />
      <meta name='robots' content='follow, index' />

      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={seoContent.title} />
      <meta property='og:description' content={seoContent.description} />
      <meta property='og:title' content={seoContent.title} />
      <meta property='og:locale' content='es' />
      <meta property='og:locale:alternate' content='es' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@nikosantise' />
      <meta name='twitter:title' content={seoContent.title} />
      <meta name='twitter:description' content={seoContent.description} />
    </>
  )
}
