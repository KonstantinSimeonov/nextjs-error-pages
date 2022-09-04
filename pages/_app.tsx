import '../styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from "react"
import * as defaultErrorComponents from "../components/errors"
import { Layout } from "../components/layout"
import { isPageError } from "../util"

type CustomErrorsComponent = Partial<typeof defaultErrorComponents>

function appOrError({ Component, pageProps }: AppProps<Error>) {
  if (!isPageError(pageProps))
    return <Component {...pageProps} />

  const { name } = pageProps
  const CustoErrorComponent = (Component as CustomErrorsComponent)[name]
  const ErrorComponent = CustoErrorComponent || defaultErrorComponents[name]
  return <ErrorComponent {...pageProps} />
}

function App(props: AppProps<Error>) {
  const app = appOrError(props)
  return (
    <Layout>
      {app}
    </Layout>
  )
}

export default App
