'use client'

import { useTranslate } from 'lib/contexts/translate'

export default function Header() {
  const { homeTranslate } = useTranslate()
  return (
    <header className='w-full py-5 border-b border-slate-200 dark:border-slate-800/80'>
      <div className='mx-auto max-w-7xl px-4 text-center'>
        <h1 className='text-slate-900 dark:text-slate-200 font-semibold text-lg'>
          {homeTranslate.title}
        </h1>
      </div>
    </header>
  )
}
