import React from 'react'
import CountUp from 'react-countup';

function Tokonomics() {
  return (
    <div id='tokonomics' className='max-w-[1240px] text-center text-white py-20'>
        <div className='sm:text-3xl md:text-5xl pb-12'><h2>Tokonomics</h2></div>
        <div className='grid md:grid-rows-2 sm:grid-rows-3 grid-flow-col gap-6'>
        <div className='p-5 border rounded-xl'>
            <div className='text-bold uppercase'><p>Chain</p></div>
            <div className='text-2xl text-maincolor'><p>ETH</p></div>
        </div>
        <div className='p-5 border rounded-xl'>
            <div className='text-bold uppercase'><p>Supply</p></div>
            <div className='text-2xl text-maincolor'><p>1,000,000</p></div>
        </div>
        <div className='p-5 border rounded-xl'>
            <div className='text-bold uppercase'><p>Initial Market Cap</p></div>
            <div className='text-2xl text-maincolor'><p><CountUp end={4} duration={2}/>k</p></div>
        </div>
        <div className='p-5 border rounded-xl'>
            <div className='text-bold uppercase'><p>Circulating Supply</p></div>
            <div className='text-2xl text-maincolor'><p><CountUp end={500} duration={2}/>k (50%)</p></div>
        </div>
        <div className='p-5 border rounded-xl'>
            <div className='text-bold uppercase'><p>To Burn</p></div>
            <div className='text-2xl text-maincolor'><p><CountUp end={450} duration={2}/>k (45%)</p></div>
        </div>
        <div className='p-5 border rounded-xl'>
            <div className='text-bold uppercase'><p>Team</p></div>
            <div className='text-2xl text-maincolor'><p><CountUp end={50} duration={2}/>k (5%)</p></div>
        </div>
        </div>
        <h3 className='sm:text-5xl md:text-7xl p-10'>ZERO <span className='text-maincolor'>TAX</span></h3>
        <p className='text-2xl font-bold'>How does it work?</p>
        <ul className='text-left pt-5 text-lg'>
            <li>👉 We run a poll within the commnuity for each footboll match</li>
            <li>👉 If poll result matches the community vote</li>
            <li>👉 We will burn 25k $FWCI Token 🤟</li>

        </ul>
    </div>

  )
}

export default Tokonomics