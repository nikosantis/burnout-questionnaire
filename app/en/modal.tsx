'use client'

import { useBurnout } from 'lib/contexts/burnout'
import { useModal } from 'lib/contexts/modal'
import Modal from 'components/modal'
import { BurnoutValues } from 'lib/burnout/types'

const resultMap: Record<BurnoutValues, string> = {
  HIGH: 'High',
  MODERATE: 'Moderate',
  LOW: 'Low'
}

export default function ModalEnPage() {
  const { show, setShow } = useModal()
  const { burnoutResults } = useBurnout()

  return (
    <Modal
      show={show}
      onClose={() => setShow(false)}
      emotionalExhaustionResult={burnoutResults.emotionalExhaustion.result}
      emotionalExhaustionValue={
        resultMap[burnoutResults.emotionalExhaustion.value as BurnoutValues]
      }
      personalFulfillmentResult={burnoutResults.personalFulfillment.result}
      personalFulfillmentValue={
        resultMap[burnoutResults.personalFulfillment.value as BurnoutValues]
      }
      depersonalisationResult={burnoutResults.depersonalisation.result}
      depersonalisationValue={
        resultMap[burnoutResults.depersonalisation.value as BurnoutValues]
      }
    />
  )
}
