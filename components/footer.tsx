export default function Footer() {
  return (
    <footer className='border-t border-slate-200 dark:border-slate-800/80'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center md:flex-row md:justify-center py-6'>
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
        </div>
      </div>
    </footer>
  )
}
