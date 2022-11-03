'use client'

import { useBurnout } from 'lib/contexts/burnout'
import { useModal } from 'lib/contexts/modal'
import { getTranslateFromMap } from 'lib/translate'
import Modal from 'components/modal'
import { BurnoutValues } from 'lib/burnout/types'

const result = getTranslateFromMap('result', 'en')

const resultMap: Record<BurnoutValues, string> = {
  HIGH: 'High',
  MODERATE: 'Moderate',
  LOW: 'Low'
}

export default function ModalEnPage() {
  const { show, setShow } = useModal()
  const { burnoutResults, resetResults } = useBurnout()

  const onReset = () => {
    resetResults()
  }

  return (
    <Modal
      show={show}
      onClose={() => setShow(false)}
      onReset={onReset}
      title={result.title}
      information={result.information}
      cancelText={result.cancelText}
      downloadText={result.downloadText}
      content={{
        evaluatedAspect: result.evaluatedAspect,
        signs: result.signs,
        total: result.total,
        emotionalExhaustion: {
          text: result.emotionalExhaustion,
          value:
            resultMap[
              burnoutResults.emotionalExhaustion.value as BurnoutValues
            ],
          result: burnoutResults.emotionalExhaustion.result,
          originalResult: burnoutResults.emotionalExhaustion
            .value as BurnoutValues,
          signs: result.emotionalExhaustionSigns
        },
        depersonalisation: {
          text: result.depersonalisation,
          value:
            resultMap[burnoutResults.depersonalisation.value as BurnoutValues],
          result: burnoutResults.depersonalisation.result,
          originalResult: burnoutResults.depersonalisation
            .value as BurnoutValues,
          signs: result.depersonalisationSigns
        },
        personalFulfillment: {
          text: result.personalFulfillment,
          value:
            resultMap[
              burnoutResults.personalFulfillment.value as BurnoutValues
            ],
          result: burnoutResults.personalFulfillment.result,
          originalResult: burnoutResults.personalFulfillment
            .value as BurnoutValues,
          signs: result.personalFulfillmentSigns
        }
      }}
    />
  )
}
