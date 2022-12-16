'use client'

import cx from 'clsx'
import { useBurnout } from 'lib/contexts/burnout'
import { useTranslate } from 'lib/contexts/translate'

export default function FormReset() {
  const { homeTranslate } = useTranslate()
  const { resetResults } = useBurnout()
  return (
    <button
      type='reset'
      onClick={() => resetResults()}
      className={cx(
        'bg-slate-900 dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400',
        'h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto',
        'text-white font-semibold',
        'hover:bg-slate-700',
        'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50',
        'disabled:cursor-not-allowed disabled:bg-slate-900/60 disabled:dark:bg-sky-500/60'
      )}
    >
      {homeTranslate.reset}
    </button>
  )
}
