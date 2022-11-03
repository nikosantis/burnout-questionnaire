'use client'

import { ModalProvider as MProvider } from 'lib/contexts/modal'

type ModalProviderProps = {
  children: React.ReactNode
}

export default function ModalProvider({ children }: ModalProviderProps) {
  return <MProvider>{children}</MProvider>
}
