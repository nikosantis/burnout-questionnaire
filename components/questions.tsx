import FormSubmit from './submit'
import FormButton from './button'

type QuestionsProps = {
  questionnaire: {
    id: string
    question: string
  }[]
  points: {
    id: string
    text: string
  }[]
}

export default function Questions({ questionnaire, points }: QuestionsProps) {
  return (
    <section className='w-full'>
      <FormSubmit>
        <div className='flex flex-col divide-y divide-slate-800 border border-slate-800 mb-10'>
          {questionnaire.map((q, i) => (
            <div
              className='flex gap divide-x divide-slate-800 items-center'
              key={q.id}
            >
              <div className='py-2 min-w-[50px] text-center text-lg'>
                <strong>{i + 1}</strong>
              </div>
              <div className='py-2 px-4 flex-1'>{q.question}</div>
              <div className='py-2 px-4'>
                <QuestionInput id={q.id} points={points} />
              </div>
            </div>
          ))}
        </div>
        <div className='w-full flex justify-center'>
          <FormButton />
        </div>
      </FormSubmit>
    </section>
  )
}

type QuestionInputProps = {
  id: string
  points: {
    id: string
    text: string
  }[]
}

function QuestionInput({ id, points }: QuestionInputProps) {
  return (
    <div>
      <label htmlFor='id'>
        <select className='text-slate-900 font-semibold' name={id} id={id}>
          {points.map(pn => (
            <option key={pn.id} value={pn.id}>
              {pn.id}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
