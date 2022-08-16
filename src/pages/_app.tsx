import '@fontsource/nunito-sans/600.css'
import '@fontsource/nunito-sans/700.css'
import '@fontsource/nunito-sans/800.css'
import '../styles/global.css'
import '../styles/typography.css'
import 'react-toastify/dist/ReactToastify.css'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'

import { Navbar } from '@/components'
import { InfoProvider } from '@/context/info-context'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider forcedTheme={'light'}>
    <Navbar />
    <InfoProvider>
      <Component {...pageProps} />
    </InfoProvider>
    <ToastContainer toastClassName="text-sm" />
  </ThemeProvider>
)

export default MyApp
