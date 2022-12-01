import React from 'react'

export default function Error({ message }: { message?: string }) {
  return (
    <div>
      <p>Something bad happened.</p>
      {message && <p>{message}</p>}
    </div>
  )
}
