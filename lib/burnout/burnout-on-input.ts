import { RefObject } from 'react'

import { questionsSchema } from './schemas'
import type { BurnoutNamedQuestions } from './types'

const arrayQuestion = Array.from(Array(22).keys())

export function burnoutOnInput(formRef: RefObject<HTMLFormElement>) {
  if (formRef.current) {
    const elements = formRef.current.elements
    const targets = arrayQuestion.map(x => {
      const innerValue = (
        elements.namedItem(
          `burnout-${x + 1}` as BurnoutNamedQuestions
        ) as HTMLSelectElement
      ).value
      const innerValueToNumber = Number(innerValue)
      return innerValueToNumber
    })
    try {
      questionsSchema.parse(targets)
      return true
    } catch (error) {
      return false
    }
  }
  return false
}
