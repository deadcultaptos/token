import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div id='about' className='bg-white w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 sm:space-y-5 justify-between items-center'>
            <div className='p-5'>
                <Image src="/about.jpg" alt="about us image" width={800} height={800} />
            </div>
            <div className='md:pl-5 space-y-2'>
                <p className='text-maincolor font-bold uppercase'>Join the revolution</p>
                <h2 className='text-3xl md:text-5xl pb-2'>About us</h2>
                <p>World Cup football matches allowing holders to bet on their favourite team and participate in the lottery poll. Depends on the poll results of each game; holders 
                will receive token airdrop or team will burn a percentage of token!</p>
            </div>
        </div>
    </div>
  )
}

export default About