import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../app/GlobalRedux/store'
import NavbarLogin from '@/components/Header/NavbarLogin'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Provider store={store}>
      <NavbarLogin />
      <Component {...pageProps} />
    </Provider>
  </>
}
