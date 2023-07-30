import React from 'react'
import { AiOutlineShopping,AiOutlineHeart } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()
    const {items} = useSelector((state) => state.cart)
    


  return (
    <nav className='w-full bg-white px-2 shadow-sm sticky z-50 top-0'>
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
            <Link to='/about-us' className="text-black uppercase font-heebo md:text-xl hover:border-b pb-1 duration-700 hover:border-b-teal-600 tracking-[2px]">About</Link>
            </li>
            {/* <li>
            <Link to='/contact' className="text-black uppercase font-heebo md:text-xl hover:border-b pb-1 duration-700 hover:border-b-teal-600 tracking-[2px]">Contact</Link>
            </li> */}
            <li>
            <Link to='/collections' className="text-black uppercase font-heebo md:text-xl hover:border-b pb-1 duration-700 hover:border-b-teal-600 tracking-[2px]">Collections</Link>
            </li>
        </ul>
        {/*  */}

        <div className="flex items-center gap-4">
        <div className="fle relative">
            <AiOutlineShopping className='cursor-pointer' onClick={()=> navigate('/cart')} size={55} />
            <span className="rounded-full py-[2px] pl-[7px] pr-[8px] bg-yellow-400 text-white absolute -top-3 right-1">{items.length}</span>
        </div>
        {/* <div className="fle">
            <AiOutlineHeart className='cursor-pointer' onClick={()=> navigate('/wishlist')} size={25} />
        </div> */}
        {/* <div className="fle">
            <BsFillPersonFill className='cursor-pointer' onClick={()=> navigate('/login')} size={25} />
        </div> */}

        </div>

        </div>
    </nav>
  )
}

export default Navbar