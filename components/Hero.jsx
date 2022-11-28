import React from 'react'
import Typed from 'react-typed';
import Link from 'next/link';

function Hero() {
  return (
    <div className='text-gray-200 text-center w-full mx-auto h-screen mt-96px max-w-[800px] flex flex-col justify-center space-y-2'>
            <p className='text-maincolor text-2xl uppercase font-bold p-2'>Football World Cup</p>
            <h1 className='md:text-7xl sm:text-5xl font-bold'>Themed token on ETH</h1>
          <div className='flex text-center justify-center text-gray-400'>
            <p className='md:text-3xl sm:text-2xl'>Experience the joy</p>
            <Typed 
            className='md:text-3xl sm:text-2xl pl-2'
            strings={['winning', 'bet on favourite team', 'participate', 'lottery poll']} typeSpeed={40} backSpeed={50} loop />
          </div>
          <div className='space-x-5 pt-10 font-bold'>
            <Link href=""><button className='border text-bold py-3 px-5 rounded-md bg-maincolor border-maincolor text-gray-900'>BUY $WCUP</button></Link>
            <Link href=""><button className='border text-bold py-3 px-5 rounded-md text-maincolor hover:text-white'>$WCUP CHART</button></Link>
          </div>
    </div>
  )
}

export default Hero