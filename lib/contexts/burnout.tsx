import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react'
import { Result } from 'lib/burnout/types'

interface BurnoutContext {
  burnoutResults: Result
  setBurnoutResults: Dispatch<SetStateAction<Result>>
  resetResults(): void
}
const BurnoutContext = createContext<BurnoutContext>({} as BurnoutContext)

type BurnoutProviderProps = {
  children: ReactNode
}

const initialResult = {
  result: 0,
  value: undefined
}

const initialState = {
  emotionalExhaustion: initialResult,
  depersonalisation: initialResult,
  personalFulfillment: initialResult
}

export function BurnoutProvider({ children }: BurnoutProviderProps) {
  const [burnoutResults, setBurnoutResults] = useState<Result>(initialState)

  function resetResults() {
    setBurnoutResults(initialState)
  }

  return (
    <BurnoutContext.Provider
      value={{ burnoutResults, setBurnoutResults, resetResults }}
    >
      {children}
    </BurnoutContext.Provider>
  )
}

export function useBurnout() {
  const context = useContext(BurnoutContext)
  if (context === undefined) {
    throw new Error('useBurnout must be used within a BurnoutProvider')
  }
  return context
}
