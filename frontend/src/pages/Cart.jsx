import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import {SlArrowRight} from 'react-icons/sl'
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'
import {BsTrash} from 'react-icons/bs'
import { useSelector} from 'react-redux'
// import 'checkout.styles.scss'


const Cart = () => {
    const {items}  = useSelector(state => state.cart)
    const total = items.reduce((acc, item) => acc + item.price * item.quantity,0 )
  return (
    <>
        <Navbar />
        <div className="w-full h-[40vh]  carth">
                <div className="w-full h-full px-5 flex  flex-col justify-center items-center my-4">
                <h1 className="text-4xl text-white text-center font-poppins font-semibold tracking-[4px] uppercase">Shopping Cart</h1>
            <div className="flex gap-2 items-center">
            <Link to='/' className='text-sky-500  text-xl font-semibold flex gap-2 mr-2 items-center' >
                Home <SlArrowRight className='text-gray-500 font-semibold mt-[2px]' size={12} />
            </Link>
            <span  className='text-sky-500 text-xl font-semibold flex gap-2 items-center mr-2' >
              Cart  <SlArrowRight className='text-gray-500 font-semibold mt-[2px]' size={12} />
            </span>

            </div>
            </div>
        </div>

        <section className="my-[8rem] w-full">
            <div className="px-4">
            {/*  */}
            <div className="lg:col-span-2 w-full">
            <table className='w-full border shadow-2xl rounded-2xl'>
            <thead>
                <tr className=' bg-teal-400'>
                    <td className='text-sm lg:text-base font-semibold tracking-[2px] text-center uppercase py-4'>Product</td>
                    <td className='text-sm lg:text-base font-semibold tracking-[2px] text-center uppercase py-4'>Price</td>
                    <td className='text-sm lg:text-base font-semibold tracking-[2px] text-center uppercase py-4'>QTY</td>
                    <td className='text-sm lg:text-base font-semibold tracking-[2px] text-center uppercase py-4'>Total</td>
                </tr>
            </thead>
            {items.map((item, index) => (
            <tbody>
                <tr>
                    <td className='md:w-[45%]'>
                        <div className="flex items-center px-4 py-5 gap-4 w-full">
                            <BsTrash size={20} className="text-red-500 text-xl font-semibold" />
                            <img src={item.image} className="w-20 h-20 object-cover hidden lg:block" alt={item._id} />
                            <div className="ml-4">
                                <p className="text-sm font-semibold tracking-[2px] text-gray-500">{item.name}</p>
                            </div>
                        </div>
                    </td>
                    <td className='text-center'>
                       R {item.price}
                    </td>
                    <td className='flex justify-center mt-4 text-center gap-2 items-center'>
                       <IoIosArrowBack /> 3 <IoIosArrowForward />
                    </td>
                    <td className='text-center'>
                        $56.00
                    </td>
                </tr>
            </tbody>
            ))}
            </table>
            </div>
            <h4 className="mt-20">Total Price :R 579</h4>

            </div>

        </section>
    </>
  )
}

export default Cart