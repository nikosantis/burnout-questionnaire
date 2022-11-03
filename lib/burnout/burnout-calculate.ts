import type { BurnoutResponses, BurnoutValues } from './types'

function emotionalExhaustionResult(sum: number): BurnoutValues {
  if (sum <= 18) {
    return 'LOW'
  } else if (sum >= 19 && sum <= 26) {
    return 'MODERATE'
  } else {
    return 'HIGH'
  }
}
function depersonalisationResult(sum: number): BurnoutValues {
  if (sum <= 5) {
    return 'LOW'
  } else if (sum >= 6 && sum <= 9) {
    return 'MODERATE'
  } else {
    return 'HIGH'
  }
}
function personalFulfillmentResult(sum: number): BurnoutValues {
  if (sum <= 33) {
    return 'HIGH'
  } else if (sum >= 34 && sum <= 39) {
    return 'MODERATE'
  } else {
    return 'LOW'
  }
}

const emotionalExhaustionIndexes = [
  'burnout-1',
  'burnout-2',
  'burnout-3',
  'burnout-6',
  'burnout-8',
  'burnout-13',
  'burnout-14',
  'burnout-16',
  'burnout-20'
]
const depersonalisationIndexes = [
  'burnout-5',
  'burnout-10',
  'burnout-11',
  'burnout-15',
  'burnout-22'
]
const personalFulfillmentIndexes = [
  'burnout-4',
  'burnout-7',
  'burnout-9',
  'burnout-12',
  'burnout-17',
  'burnout-18',
  'burnout-19',
  'burnout-21'
]

function filterResponses(responses: BurnoutResponses) {
  let emotionalExhaustion = 0
  let depersonalisation = 0
  let personalFulfillment = 0

  responses.forEach((value, key) => {
    if (emotionalExhaustionIndexes.includes(key)) {
      emotionalExhaustion += value
    }
    if (depersonalisationIndexes.includes(key)) {
      depersonalisation += value
    }
    if (personalFulfillmentIndexes.includes(key)) {
      personalFulfillment += value
    }
  })
  return {
    emotionalExhaustion: {
      result: emotionalExhaustion,
      value: emotionalExhaustionResult(emotionalExhaustion)
    },
    depersonalisation: {
      result: depersonalisation,
      value: depersonalisationResult(depersonalisation)
    },
    personalFulfillment: {
      result: personalFulfillment,
      value: personalFulfillmentResult(personalFulfillment)
    }
  }
}

function burnoutCalculate(responses: BurnoutResponses) {
  return filterResponses(responses)
}

export { burnoutCalculate }
