type HeaderProps = {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className='w-full py-5 border-b border-slate-200 dark:border-slate-800/80'>
      <div className='mx-auto max-w-7xl px-4 text-center'>
        <h1 className='text-slate-900 dark:text-slate-200 font-semibold text-lg'>
          {title}
        </h1>
      </div>
    </header>
  )
}
