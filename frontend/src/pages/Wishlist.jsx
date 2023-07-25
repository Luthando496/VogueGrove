import React from 'react'
import Navbar from '../components/Navbar'
import {SlArrowRight} from 'react-icons/sl'
import {Link} from 'react-router-dom'

const Wishlist = () => {
  return (
        <>
            <Navbar />
            <hr />

        <div className="mx-auto text-center w-full my-14">
            <h1 className='font-roboto text-black/70 text-xl md:text-3xl font-thin tracking-[4px] lg:text-4xl'>Wishlist</h1>
            <div className="w-full px-5 flex justify-center items-center my-4">
            <Link to='/' className='text-gray-500  text-sm flex gap-2 mr-2 items-center' >
                Home <SlArrowRight className='text-gray-500 mt-[2px]' size={12} />
            </Link>
            <Link to='/wishlist' className='text-black font-semibold text-sm flex gap-2 items-center mr-2' >
                Wishlist 
            </Link>
            </div>
        </div>


        </>
  )
}

export default Wishlist