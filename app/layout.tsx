import { headers } from 'next/headers'
import { Roboto } from '@next/font/google'

import './globals.css'

import BurnoutProvider from './burnout-provider'

import SeoIndex from './seo'
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
  const headersList = headers()
  const lang = headersList.get('Accept-Language')
  const locale = lang?.split(',')[0].split('-')[0]
  return (
    <html lang={locale || 'es'} className={roboto.className}>
      <head />
      <body className='bg-slate-50 dark:bg-slate-900'>
        <ModalProvider>
          <BurnoutProvider>{children}</BurnoutProvider>
        </ModalProvider>
      </body>
    </html>
  )
}
