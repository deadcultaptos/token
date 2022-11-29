import React, {useState} from 'react'
import Link from 'next/link'
import { BiFootball } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";



const nav = () => {
    const [nav, setNav] = useState(true)

    const handledNav = () => {
        setNav(!nav)
    
    }


    
    return (
    <div>
    <nav className='bg-black fixed top-0 right-0 left-0'>
        <div className='max-w-6x1 mx-auto py-5 px-8'>
            <div className='flex justify-between'>
                {/*-LOGO-*/}
                <Link href='/'><div className='flex items-center'>
                    <div><BiFootball size={40} color='#00df9a'/></div>
                    <div className='text-4xl font-bold ml-2 text-maincolor logo'>FWCI</div>
                </div>
                </Link>
                <div className='flex items-center'>
                {/*-MENU-*/}
                    <ul className='text-gray-200 hidden md:flex space-x-3 uppercase'>
                        <li className='hover:text-maincolor p-2'><Link href='/'>Home</Link></li>
                        <li className='hover:text-maincolor p-2'><Link href='#about'>About</Link></li>
                        <li className='hover:text-maincolor p-2'><Link href='#tokonomics'>Tokonomics</Link></li>
                        <li className='hover:text-maincolor p-2'><Link href='#news'>News</Link></li>
                    </ul>
                {/*-SOCIAL-*/}
                    <ul className='hidden md:flex items-center space-x-4 ml-8'>
                        <li><Link href='https://twitter.com/FIFAWCIToken22'><AiOutlineTwitter size={22} color={'#fff'} /></Link></li>
                        <li><Link href='https://t.me/FIFAWORLDCUPINUTOKEN'><FaTelegramPlane size={22} color={'#fff'} /></Link></li>
                    </ul>

                </div>
                {/*--Mobile-Menu-Symbol--*/}
                <div className='md:hidden flex items-center'>
                    <button onClick={handledNav}>{!nav ? <AiOutlineClose size={22} color={'white'} /> : <AiOutlineMenu size={22} color={'white'} />}</button>
                </div>
            </div>
        </div>
            {/*--Mobile-Menu-Symbol--*/}
            <div className={!nav ? 'md:hidden fixed mt-20 right-0 top-0 w-[40%] h-full border-l border-gray-500 bg-black ease-in-out duration-500' : 
            'fixed top-0 w-[40%] mt-20 h-full border-r border-gray-900 bg-black ease-in-out duration-500 right-[-100%]'}>

                <ul className='p-5 text-gray-500 space-y-4 text-xl text-right uppercase'>
                    <li className='hover:text-maincolor border-b pb-2'><Link href='/'>Home</Link></li>
                    <li className='hover:text-maincolor border-b pb-2'><Link href='#about'>About</Link></li>
                    <li className='hover:text-maincolor border-b pb-2'><Link href='#tokonomics'>Tokonomics</Link></li>
                    <li className='hover:text-maincolor'><Link href='#news'>News</Link></li>
                </ul>              
                <div className='flex mx-auto float-right pr-5 space-x-2'>
                    <Link href='https://twitter.com/FIFAWCIToken22'><AiOutlineTwitter size={30} color={'#fff'} /></Link>
                    <Link href='https://t.me/FIFAWORLDCUPINUTOKEN'><FaTelegramPlane size={30} color={'#fff'} /></Link>
                </div>
            </div>
    </nav>

    </div>
  );
};

export default nav;