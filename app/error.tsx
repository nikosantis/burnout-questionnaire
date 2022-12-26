'use client'

import { useEffect } from 'react'
import { log } from 'next-axiom'

export default function Error({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    log.error(error.message, error)
  }, [error])

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  )
}
