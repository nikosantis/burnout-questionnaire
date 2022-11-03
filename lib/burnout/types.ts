export type BurnoutValues = 'LOW' | 'MODERATE' | 'HIGH'
export type BurnoutQuestions =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
export type BurnoutNamedQuestions = `burnout-${BurnoutQuestions}`
export type BurnoutGenericNamedQuestions<T extends string> = `burnout-${T}`
export type EmotionalExhaustionProcess = BurnoutGenericNamedQuestions<
  '1' | '2' | '3' | '6' | '8' | '13' | '14' | '16' | '20'
>[]
export type DepersonalisationProcess = BurnoutGenericNamedQuestions<
  '5' | '10' | '11' | '15' | '22'
>[]
export type PersonalFulfillmentProcess = BurnoutGenericNamedQuestions<
  '4' | '7' | '9' | '12' | '17' | '18' | '19' | '21'
>[]

export type BurnoutResponses = Map<BurnoutNamedQuestions, number>

export interface TargetElements {
  value: string
  name: string
}

export type MappedLiteral<T extends string> = {
  [K in T]: TargetElements
}

export type CustomTarget = MappedLiteral<BurnoutNamedQuestions>

export type ResultType = {
  result: number
  value: BurnoutValues | undefined
}

export type Result = {
  emotionalExhaustion: ResultType
  depersonalisation: ResultType
  personalFulfillment: ResultType
}
