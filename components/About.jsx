import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function About() {
  return (
    <div id='about' className='bg-white w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 sm:space-y-5 justify-between items-center'>
            <div className='p-5'>
                <Image src="/about.jpg" alt="about us image" width={800} height={800} />
            </div>
            <div className='md:pl-5 space-y-2'>
                <strong className='text-maincolor font-bold uppercase'>Join the revolution</strong>
                <h2 className='text-bold text-3xl md:text-5xl pb-2'>About us</h2>
                <p>World Cup football matches allowing holders to bet on their favourite team and participate in the poll. Depends on the poll results of each game; holders 
                will receive token airdrop or team will burn a percentage of token!</p>
                <p className='pt-4'>Contract Address: <strong>0x7fe7C4163DdfFb928e5B89D64959d0a06040641a</strong></p>
            </div>
            <div className='md:pl-5 max-w-[1240px] flex mx-auto md:flex-col-3 justify-center items-center'>
              <a target='_blank' href='https://coinmarketcap.com/'><img src="cmc.png" width='200px'></img></a>
              <a target='_blank' href='https://www.coingecko.com/'><img src="cg.png" width='200px'></img></a>
              <a target='_blank' href='https://etherscan.io/token/0x7fe7C4163DdfFb928e5B89D64959d0a06040641a#code'><img src="es.png" width='200px'></img></a>
            </div>
        </div>
    </div>
  )
}

export default About