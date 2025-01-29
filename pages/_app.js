import '../css/globals.css'
import '../css/base.css'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
  weight: '400',
  subsets: ['latin'],
})


function MyApp({ Component, pageProps }) {

  return (
    <>
    <style jsx global>{`
        html {
          font-family: ${quicksand.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>)
}

export default MyApp
