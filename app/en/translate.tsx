'use client'

import { ReactNode } from 'react'

import { TranslateProvider } from 'lib/contexts/translate'

type TranslateProps = {
  children: ReactNode
}
export default function Translate({ children }: TranslateProps) {
  return <TranslateProvider locale='en'>{children}</TranslateProvider>
}
