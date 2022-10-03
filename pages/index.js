import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />

<p><a href="https://thefreerobux.com/">Get Free Robux!</a></p>

      </Head>

      <main>
        <Header title="Welcome to thefreerobux.com!" />
        <p className="description">
          Get Free Robux by playing mobile game in www.thefreerobux.com
        </p>
      </main>

      <Footer />
    </div>
  )
}
