import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Tokonomics from '../components/Tokonomics'
import News from '../components/News'


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>FWCI - Football World Cup Token</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Tokonomics />
      <News />
    </div>
  )
}

export default Home
