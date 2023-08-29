import '@/styles/globals.css'
import NavbarLogin from '@/components/Header/NavbarLogin'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
      <NavbarLogin/>
    <Component {...pageProps} />
  </>
}
