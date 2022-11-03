import { SyntheticEvent } from 'react'

import { burnoutCalculate } from './burnout-calculate'
import type { BurnoutNamedQuestions } from './types'

export function burnoutSubmit(event: SyntheticEvent<HTMLFormElement>) {
  const targets = Object.values(event.target).filter(
    x => x instanceof HTMLSelectElement
  ) as HTMLSelectElement[]
  const burnoutTargets = targets.map(
    x => [x.name as BurnoutNamedQuestions, Number(x.value)] as const
  )
  const mapResponses = new Map(burnoutTargets)
  const result = burnoutCalculate(mapResponses)
  return result
}
