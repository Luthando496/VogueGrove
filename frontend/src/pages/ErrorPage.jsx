import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
    <Navbar />
    <section className='py-20 w-full bg-slate-50'>
        <div className="px-10 text-center mt-20 space-y-7">
            <h1 className="text-7xl md:text-[7rem] lg:text-[10rem] font-semibold text-black font-heebo">404</h1>
            <h2 className="text-black semibold text-[3rem] md:text-[4rem] lg:text-[6rem]">Oops! That page can't be found.</h2>
            <p className="text-xl text-gray-600">We're really sorry but we can't seem<br/> to find the page you were looking for.</p>
            <div className="flex justify-center items-center">
                <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Go Home</Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default ErrorPage