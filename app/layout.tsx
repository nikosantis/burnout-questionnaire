import { Roboto } from '@next/font/google'

import './globals.css'

import BurnoutProvider from './burnout-provider'

import ModalProvider from './modal-provider'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='es' className={roboto.className}>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#ff7a01' />
        <meta name='msapplication-TileColor' content='#000000' />
        <meta name='theme-color' content='#ffffff' />
        <link href='/favicon.ico' rel='shortcut icon' />
      </head>
      <body className='bg-slate-50 dark:bg-slate-900'>
        <ModalProvider>
          <BurnoutProvider>{children}</BurnoutProvider>
        </ModalProvider>
      </body>
    </html>
  )
}
