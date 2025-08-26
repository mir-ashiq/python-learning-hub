import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Load Prism.js for code syntax highlighting
    if (typeof window !== 'undefined') {
      import('prismjs').then(() => {
        import('prismjs/components/prism-python')
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Component {...pageProps} />
    </div>
  )
}