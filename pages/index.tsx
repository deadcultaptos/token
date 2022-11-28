import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import About from '../components/About'


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Fotboll Token</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
    </div>
  )
}

export default Home
