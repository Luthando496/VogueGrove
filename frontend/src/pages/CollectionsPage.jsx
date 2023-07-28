import React from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'

const CollectionsPage = () => {
  return (
    <>
        <Navbar />

        <section className="w-full mt-24 mb-32">
          <div className="px-4 md:px-6 lg:px-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-[90px]">
          {/*  */}
            
            <div className="card h-[25rem] relative">
            <div className="img h-full">
              <img src="https://images.unsplash.com/photo-1502790321135-31874fc22684?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="text-center mt-6 flex flex-col">
            <Link className="text-xl text-sky-800 font-bold tracking-[2px] font-jost" to='/collections/Accessories'>
            Accessories
            </Link>
            
            </div>
            </div>
              
            {/*  */}
            <div className="card h-[25rem] relative">
            <div className="img h-full">
              <img src="https://minion-vinovatheme.myshopify.com/cdn/shop/products/5_9a809f52-f7fb-48cc-a44c-46dd624f7c69_1120x.jpg?v=1614067794" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="text-center mt-6 flex flex-col">
            <Link className="text-xl text-sky-800 font-bold tracking-[2px] font-jost" to='/collections/Men'>
            Men
            </Link>
            
            </div>
            </div>
            {/*  */}
            <div className="card h-[25rem] relative">
            <div className="img h-full">
              <img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="text-center mt-6">
            <Link className="text-xl text-sky-800 font-bold tracking-[2px] font-jost" to='/collections/all'>
            All Products
            </Link>
            
            </div>
            </div>
            {/*  */}

            {/*  */}
            <div className="card h-[25rem] relative">
            <div className="img h-full">
              <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="text-center mt-6">
            <Link className="text-xl text-sky-800 font-bold tracking-[2px] font-jost" to='/collections/Shoes'>
            Shoes
            </Link>
            
            </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="card h-[25rem] relative">
            <div className="img h-full">
              <img src="https://wpbingo-fashow.myshopify.com/cdn/shop/collections/cate-3_857d1695-6cc1-41b1-86b9-16e7fe25e4bc.jpg?v=1663828854" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="text-center mt-6">
            <Link className="text-xl text-sky-800 font-bold tracking-[2px] font-jost" to='/collections/Women'>
            Women
            </Link>
            
            </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="card h-[25rem] relative">
            <div className="img h-full">
              <img src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="text-center mt-6">
            <Link className="text-xl text-sky-800 font-bold tracking-[2px] font-jost" to='/collections/T-shirt'>
            T-shirts
            </Link>
            
            </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="card h-[25rem] relative">
            <div className="img h-full">
              <img src="https://images.unsplash.com/photo-1609873814058-a8928924184a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="text-center mt-6">
            <Link className="text-xl text-sky-800 font-bold tracking-[2px] font-jost" to='/collections/Hoodie'>
            Hoodie
            </Link>
            
            </div>
            </div>
            {/*  */}
          </div>
        </section>
    </>
  )
}

export default CollectionsPage