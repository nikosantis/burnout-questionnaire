'use client'

import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-CM7SJ3DQ83'
      />

      <Script id='gtag-init' strategy='afterInteractive'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CM7SJ3DQ83', {
              page_path: window.location.pathname,
            });
        `}
      </Script>
    </>
  )
}
