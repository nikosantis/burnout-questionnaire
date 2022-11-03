'use client'

import { BurnoutProvider as BProvider } from 'lib/contexts/burnout'

type BurnoutProviderProps = {
  children: React.ReactNode
}

export default function BurnoutProvider({ children }: BurnoutProviderProps) {
  return <BProvider>{children}</BProvider>
}
