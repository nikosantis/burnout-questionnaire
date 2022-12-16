'use client'

import FormSubmit from './submit'
import FormButton from './button'
import FormReset from './reset'
import { useTranslate } from 'lib/contexts/translate'
import QuestionInput from './question-input'

export default function Questions() {
  const { commonTranslate } = useTranslate()
  return (
    <section className='w-full'>
      <FormSubmit>
        <div className='flex flex-col divide-y divide-slate-300 dark:divide-slate-800 border border-slate-300 dark:border-slate-800 mb-10'>
          {commonTranslate.questionnaire.map((q, i) => (
            <div
              className='flex gap divide-x divide-slate-300 dark:divide-slate-800 items-center'
              key={q.id}
            >
              <div className='py-2 min-w-[50px] text-center text-lg'>
                <strong>{i + 1}</strong>
              </div>
              <div className='py-2 px-4 flex-1'>{q.question}</div>
              <div className='py-2 px-4'>
                <QuestionInput id={q.id} points={commonTranslate.points} />
              </div>
            </div>
          ))}
        </div>
        <div className='w-full flex justify-center mb-8'>
          <FormButton />
        </div>
        <div className='w-full flex justify-center'>
          <FormReset />
        </div>
      </FormSubmit>
    </section>
  )
}
