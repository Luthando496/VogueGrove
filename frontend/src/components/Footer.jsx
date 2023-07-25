import React from 'react'
import {FaFacebook,FaYoutube,FaLinkedin,FaGithub} from 'react-icons/fa'


const Footer = () => {
  return (
    <section className='w-full py-8 bg-teal-100/30'>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-20 px-4 mb-20 ">
            {/*  */}
            <div className="w-full">
                <h1 className="text-xl text-gray-400 font-poppins font-semibold uppercase">Address</h1>
                <div className="mt-2 space-y-3">
                    <p className="text-gray-700 text-base tracking-[1px] leading-[1.7]">Rains HQ, Jens Olsens Vej 13 ,8200 Aarhus N, Denmark</p>
                    <p className="text-gray-700 text-base tracking-[1px]">Email:luthandodidiza197@gmail.com</p>
                    <p className="text-gray-700 text-base tracking-[1px]">Phone: (+27) 76 705 7533</p>
                </div>
                <div className="mt-4 flex gap-3">
                    <FaYoutube size={40}  className='hover:text-pink-300 text-sky-600 duration-700 cursor-pointer' />
                    <FaFacebook size={40}  className='hover:text-pink-300 text-sky-600 duration-700 cursor-pointer' />
                    <FaLinkedin size={40}  className='hover:text-pink-300 text-sky-600 duration-700 cursor-pointer' />
                    <FaGithub size={40}  className='hover:text-pink-300 text-sky-600 duration-700 cursor-pointer' />

                </div>
            </div>

            <div className="w-full">
            <h1 className="text-xl font-poppins font-semibold uppercase">Categories</h1>
            <div className="mt-2 space-y-3">
            <p className="text-gray-400 text-base font-semibold cursor-pointer hover:text-sky-900 duration-500">Tops</p>
            <p className="text-gray-400 text-base font-semibold cursor-pointer hover:text-sky-900 duration-500">Basics</p>
            <p className="text-gray-400 text-base font-semibold cursor-pointer hover:text-sky-900 duration-500">Shirts & Blouses</p>
            <p className="text-gray-400 text-base font-semibold cursor-pointer hover:text-sky-900 duration-500">Pants</p>
            <p className="text-gray-400 text-base font-semibold cursor-pointer hover:text-sky-900 duration-500">Blazers & Vents</p>
            <p className="text-gray-400 text-base font-semibold cursor-pointer hover:text-sky-900 duration-500">Shorts</p>
            <p className="text-gray-400 text-base font-semibold cursor-pointer hover:text-sky-900 duration-500">Mens</p>
            </div>
            </div>

            <div className="w-full">
            <h1 className="text-xl font-poppins font-semibold uppercase">Services</h1>
            <div className="mt-2 space-y-3">
            <p className="text-gray-400 text-base font-semibold cursor-pointer hover:text-sky-900 duration-500">Sale</p>
            <p className="text-gray-400 text-base font-semibold cursor-pointer hover:text-sky-900 duration-500">Quick Ship</p>
            <p className="text-gray-400 text-base font-semibold cursor-pointer hover:text-sky-900 duration-500">New Designs</p>
            <p className="text-gray-400 text-base font-semibold cursor-pointer hover:text-sky-900 duration-500">Accidental Fabric Protection</p>
            <p className="text-gray-400 text-base font-semibold cursor-pointer hover:text-sky-900 duration-500">Furniture Care</p>
            <p className="text-gray-400 text-base font-semibold cursor-pointer hover:text-sky-900 duration-500">Gift Cards</p>
            </div>
            </div>
            {/*  */}
            <div className="w-full">
            <h1 className="text-xl font-poppins font-semibold uppercase">Join Us</h1>
            <div className="mt-2 space-y-3">
            <p className="text-gray-400 text-base font-roboto font-normal cursor-pointer hover:text-sky-900 duration-500">New subscribers receive 10% off their first purchase</p>

            <div className="mt-4 w-full">
                <input className='border-b border-b-gray-400 px-7 py-4 focus:outline-none ' placeholder='Your Email' type="text" />
            </div>
            </div>
            </div>
        </div>

        <hr />
        <div className="w-full flex justify-between px-10 items-center my-6">
        <div className=" flex gap-5 items-center">
            <span className="text-gray-700 hover:text-amber-300 duration-700 cursor-pointer">Store Locator</span>
            <span className="text-gray-700 hover:text-amber-300 duration-700 cursor-pointer">Gift Cards</span>
            <span className="text-gray-700 hover:text-amber-300 duration-700 cursor-pointer">My Orders</span>
        </div>


        </div>

    </section>
  )
}

export default Footer