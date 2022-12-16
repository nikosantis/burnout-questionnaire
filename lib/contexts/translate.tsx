'use client'

import { createContext, ReactNode, useContext } from 'react'

import { getTranslateFromMap } from 'lib/translate'
import {
  CommonTranslate,
  HomeTranslate,
  ResultTranslate
} from 'lib/translate/core'

interface TranslateContext {
  homeTranslate: HomeTranslate
  commonTranslate: CommonTranslate
  resultTranslate: ResultTranslate
}

const TranslateContext = createContext<TranslateContext>({} as TranslateContext)

type TranslateProviderProps = {
  children: ReactNode
  locale: 'es' | 'en'
}

export function TranslateProvider({
  children,
  locale
}: TranslateProviderProps) {
  const homeTranslate = getTranslateFromMap('home', locale)
  const commonTranslate = getTranslateFromMap('common', locale)
  const resultTranslate = getTranslateFromMap('result', locale)

  return (
    <TranslateContext.Provider
      value={{ homeTranslate, commonTranslate, resultTranslate }}
    >
      {children}
    </TranslateContext.Provider>
  )
}

export function useTranslate() {
  const context = useContext(TranslateContext)
  if (context === undefined) {
    throw new Error('useTranslate must be used within a TranslateProvider')
  }
  return context
}
