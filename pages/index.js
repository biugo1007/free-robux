import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to thefreerobux.com!" />
<p><a href="https://thefreerobux.com/">Get Free Robux!</a></p>

        <p className="description">
          Get Free Robux by playing mobile game in www.thefreerobux.com
       Earn Real Robux now
 </p>
      </main>

      <Footer />
    </div>
  )
}
