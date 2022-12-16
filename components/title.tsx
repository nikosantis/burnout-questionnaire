'use client'

import { useTranslate } from 'lib/contexts/translate'

export default function Title() {
  const {
    homeTranslate: { frequency },
    commonTranslate: { points }
  } = useTranslate()
  return (
    <section className='w-full mb-12'>
      <h3 className='text-2xl font-semibold text-center mb-6'>{frequency}</h3>
      <div className='flex flex-col items-center'>
        {points.map(pn => (
          <div key={pn.id} className='text-lg'>
            <span className='mr-2'>
              <strong>{pn.id}</strong>:
            </span>
            <span>{pn.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
