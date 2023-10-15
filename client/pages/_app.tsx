import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Layout from '@/components/Layout/Layout'
import store from '@/redux/store/store';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
