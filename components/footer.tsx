'use client'

import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='border-t border-slate-200 dark:border-slate-800/80'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center md:flex-row md:justify-center py-6 gap-x-6 gap-y-4'>
          <p className='text-sm text-slate-500'>
            <span className='mr-1'>Developed by</span>
            <a
              href='https://www.linkedin.com/in/nikosantis/'
              target={'_blank'}
              rel='noreferrer'
              className='hover:text-slate-600 transition-colors font-medium'
            >
              Nikolas Santis
            </a>{' '}
            | 2022
          </p>

          <p className='text-sm text-slate-500'>
            <a
              href='https://github.com/nikosantis/burnout-questionnaire'
              target='_blank'
              rel='noreferrer'
              className='hover:text-slate-600 transition-colors font-medium'
              title='Github'
            >
              <span>
                <FaGithub />
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
