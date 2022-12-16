'use client'

type QuestionInputProps = {
  id: string
  points: {
    id: string
    text: string
  }[]
}

export default function QuestionInput({ id, points }: QuestionInputProps) {
  return (
    <div>
      <label htmlFor='id'>
        <select
          className='text-slate-900 font-semibold border-slate-400 dark:border-slate-800'
          name={id}
          id={id}
          defaultValue='default'
        >
          <option value='default' disabled>
            -
          </option>
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
