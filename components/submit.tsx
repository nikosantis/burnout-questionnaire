'use client'

import {
  createContext,
  ReactNode,
  RefObject,
  SyntheticEvent,
  useContext,
  useRef,
  useState
} from 'react'

import { burnoutSubmit } from 'lib/burnout/burnout-submit'
import { useBurnout } from 'lib/contexts/burnout'
import { useModal } from 'lib/contexts/modal'
import { burnoutOnInput } from 'lib/burnout/burnout-on-input'
import { BurnoutNamedQuestions } from 'lib/burnout/types'

type FormSubmitProps = {
  children: ReactNode
}

export default function FormSubmit({ children }: FormSubmitProps) {
  const [isValid, setValid] = useState(false)
  const { setBurnoutResults } = useBurnout()
  const { setShow } = useModal()
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = burnoutSubmit(e)
    if (result) {
      setBurnoutResults(result)
      setShow(true)
    }
  }
  const handleInput = () => {
    setValid(burnoutOnInput(formRef))
  }

  return (
    <form onSubmit={handleSubmit} onInput={handleInput} ref={formRef}>
      <FormContext.Provider
        value={{
          isValid,
          formRef
        }}
      >
        {children}
      </FormContext.Provider>
    </form>
  )
}

interface FormContext {
  isValid: boolean
  formRef: RefObject<HTMLFormElement>
}

const FormContext = createContext<FormContext>({} as FormContext)

export function useFormContext() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormSubmit')
  }
  return context
}
