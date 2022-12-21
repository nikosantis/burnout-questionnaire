'use client'

import Link from 'next/link'
import cx from 'clsx'

import { useTranslate } from 'lib/contexts/translate'

type HeaderProps = {
  locale: 'es' | 'en'
}

export default function Header({ locale }: HeaderProps) {
  const { homeTranslate } = useTranslate()
  return (
    <>
      <header className='w-full py-5 border-b border-slate-200 dark:border-slate-800/80'>
        <div className='mx-auto max-w-7xl px-4 text-center'>
          <h1 className='text-slate-900 dark:text-slate-200 font-semibold text-lg'>
            {homeTranslate.title}
          </h1>
        </div>
      </header>

      <div className='mt-4 w-full text-center'>
        {locale === 'es' && (
          <Link
            href='/en'
            className={cx(
              'bg-slate-900 dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400',
              'h-10 px-6 rounded-lg inline-flex items-center justify-center',
              'text-white font-semibold text-sm',
              'hover:bg-slate-700',
              'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50',
              'disabled:cursor-not-allowed disabled:bg-slate-900/60 disabled:dark:bg-sky-500/60'
            )}
            title='🔥 Burnout 🔥 Questionnaire for Workers'
          >
            English version
          </Link>
        )}
        {locale === 'en' && (
          <Link
            href='/'
            className={cx(
              'bg-slate-900 dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400',
              'h-10 px-6 rounded-lg inline-flex items-center justify-center',
              'text-white font-semibold text-sm',
              'hover:bg-slate-700',
              'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50',
              'disabled:cursor-not-allowed disabled:bg-slate-900/60 disabled:dark:bg-sky-500/60'
            )}
            title='Cuestionario 🔥 Burnout 🔥 Laboral'
          >
            Versión en español
          </Link>
        )}
      </div>
    </>
  )
}
