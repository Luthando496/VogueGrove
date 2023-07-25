import React from 'react'
import { AiOutlineShopping,AiOutlineHeart } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='w-full bg-white/70 px-2 shadow-sm '>
        <div className="flex justify-between items-center">
        {/*  */}
        <Link to='/' className="text-2xl font-bold text-white">
        <img src="/images/style1.png" alt="logo" className="w-[150px] h-[90px]" />
        </Link>
        {/*  */}

        <ul className="hidden md:flex items-center gap-10">
            <li>
            <Link to='/' className="text-black uppercase font-heebo md:text-xl hover:border-b pb-1 duration-700 hover:border-b-teal-600 tracking-[2px]">Home</Link>
            </li>
            <li>
            <Link to='/about' className="text-black uppercase font-heebo md:text-xl hover:border-b pb-1 duration-700 hover:border-b-teal-600 tracking-[2px]">About</Link>
            </li>
            <li>
            <Link to='/contact' className="text-black uppercase font-heebo md:text-xl hover:border-b pb-1 duration-700 hover:border-b-teal-600 tracking-[2px]">Contact</Link>
            </li>
            <li>
            <Link to='/collections' className="text-black uppercase font-heebo md:text-xl hover:border-b pb-1 duration-700 hover:border-b-teal-600 tracking-[2px]">Collections</Link>
            </li>
        </ul>
        {/*  */}

        <div className="flex items-center gap-4">
        <div className="fle">
            <AiOutlineShopping size={25} />
        </div>
        <div className="fle">
            <AiOutlineHeart size={25} />
        </div>
        <div className="fle">
            <BsFillPersonFill size={25} />
        </div>

        </div>

        </div>
    </nav>
  )
}

export default Navbar