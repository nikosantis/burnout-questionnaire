type IntroProps = {
  description: string
  information: string
  disclaimer?: string
}

export default function Intro({
  description,
  information,
  disclaimer
}: IntroProps) {
  return (
    <section className='w-full mb-12 pb-12 border-b dark:border-slate-800 border-slate-200'>
      <h2 className='text-3xl font-medium text-center mb-8'>{description}</h2>
      <p className='text-lg text-center mb-8'>{information}</p>
      {disclaimer && <p className='italic text-center'>* {disclaimer} *</p>}
    </section>
  )
}
