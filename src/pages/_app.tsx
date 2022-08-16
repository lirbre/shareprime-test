import '@fontsource/nunito-sans/600.css'
import '@fontsource/nunito-sans/700.css'
import '@fontsource/nunito-sans/800.css'
import '../styles/global.css'
import '../styles/typography.css'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { Navbar } from '@/components'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider forcedTheme={'light'}>
    <Navbar />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
