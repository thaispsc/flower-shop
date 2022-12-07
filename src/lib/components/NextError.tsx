import React from 'react'

export default function NextError({ message }: { message?: string }) {
  return (
    <div>
      <p>Something bad happened.</p>
      {message && <p>{message}</p>}
    </div>
  )
}
