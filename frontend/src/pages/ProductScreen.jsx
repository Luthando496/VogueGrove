import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import {SlArrowRight} from 'react-icons/sl'

const ProductScreen = () => {
  return (
    <>
    <Navbar />
    <hr />

    <section className='w-full my-3'>
    <div className="w-full px-5 flex items-center">
    <Link to='/' className='text-gray-500  text-sm flex gap-2 items-center' >
        Home <SlArrowRight className='text-gray-500 mt-[2px]' size={12} />
    </Link>
    <Link to='/' className='text-gray-500  text-sm flex gap-2 items-center' >
        Accessories <SlArrowRight className='text-gray-500 mt-[2px]' size={12} />
    </Link>
    <Link to='/' className='text-gray-500  text-sm flex gap-2 items-center' >
    Comfort mini denim skirt
    </Link>


    </div>        
    </section>
    </>
  )
}

export default ProductScreen