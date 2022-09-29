import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient()

export default function Root({ children }) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
