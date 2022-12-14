import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="content">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>プリコネカレンダー</title>
      </Head>
      <Component {...pageProps} />
      <footer className="bg-secondary bg-opacity-10 text-center pt-3 pb-3">
        <a href="https://twitter.com/@JADENgygo" className="me-3 link-dark">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://priconne-portfolio.vercel.app" className="link-dark">
          闇プリン開発室
        </a>
				<div>画像 &copy; Cygames, Inc.</div>
      </footer>
    </div>
  )
}

export default MyApp
