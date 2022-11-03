'use client'

import { ReactNode, SyntheticEvent } from 'react'

import { burnoutSubmit } from 'lib/burnout/burnout-submit'
import { useBurnout } from 'lib/contexts/burnout'
import { useModal } from 'lib/contexts/modal'

type FormSubmitProps = {
  children: ReactNode
}

export default function FormSubmit({ children }: FormSubmitProps) {
  const { setBurnoutResults } = useBurnout()
  const { setShow } = useModal()

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = burnoutSubmit(e)
    if (result) {
      setBurnoutResults(result)
      setShow(true)
    }
  }

  return <form onSubmit={handleSubmit}>{children}</form>
}
