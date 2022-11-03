'use client'

import cx from 'clsx'

export default function FormButton() {
  return (
    <button
      type='submit'
      className={cx(
        'bg-slate-900 dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400',
        'h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto',
        'text-white font-semibold',
        'hover:bg-slate-700',
        'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
      )}
    >
      Calcular Burnout
    </button>
  )
}
