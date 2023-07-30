import React,{useEffect} from 'react'
import {BsArrowDown,BsArrowRight} from 'react-icons/bs'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import BottomHeader from '../components/BottomHeader'
import { FaArrowRight } from 'react-icons/fa'
import {useDispatch,useSelector} from 'react-redux'
import { getProducts } from '../store/actions/productActions'
import Card from '../components/Card'
import {Link} from 'react-router-dom'
import Spinner from '../components/Spinner'


const Home = () => {
  const dispatch = useDispatch()
  const {products,loading} = useSelector((state) => state.prod)

  useEffect(()=>{
    dispatch(getProducts())

  },[dispatch])
  return (
    <>
    <Navbar />
    <Header />
    <BottomHeader />
    


    <section className="w-full my-20">
      <div className="px-4 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/*  */}
        <div className="w-full h-[20rem] group  jk relative">
          <h1 className="font-poppins center-link text-xl md:text-2xl text-amber-600">New Collection</h1>
          <a href="#" className="center-link2 text-amber-600 font-bold font-roboto tracking-[2px] absolute bottom-10 left-[40%] group-hover:block group-hover:text-yellow-600 group-hover:bottom-24 duration-700">Shop now</a>
        </div>
        {/*  */}
        {/*  */}
        <div className="w-full h-[20rem] group  jk relative">
          <h1 className="font-poppins center-link text-xl md:text-2xl text-amber-600">New Collection</h1>
          <a href="#" className="center-link2 text-amber-600 font-bold font-roboto tracking-[2px] absolute bottom-10 left-[40%] group-hover:block group-hover:text-yellow-600 group-hover:bottom-24 duration-700">Shop now</a>
        </div>
        {/*  */}
        <div className="w-full h-[20rem] group  jkl relative">
          <h1 className="font-poppins center-link text-xl md:text-2xl text-amber-600">New Collection</h1>
          <a href="#" className="center-link2 text-amber-600 font-bold font-roboto tracking-[2px] absolute bottom-10 left-[40%] group-hover:block group-hover:text-yellow-600 group-hover:bottom-24 duration-700">Shop now</a>
        </div>
        {/*  */}
      </div>
    </section>

    <section className="w-full my-20">
          <h2 className="text-center tracking-[1px] font-poppins text-sm uppercase mb-16 font-semibold text-gray-700">Shop By Categories</h2>
      <div className="px-8 md:px-14 lg:px-20  text-center flex justify-evenly flex-wrap gap-14">
        <h1 className="text-xl md:text-2xl lg:text-5xl cursor-pointer hover:border-b pb-2 hover:text-sky-700 hover:border-b-amber-400 duration-700 font-roboto text-black/80">Knitwear</h1>
        <h1 className="text-xl md:text-2xl lg:text-5xl cursor-pointer hover:border-b pb-2 hover:text-sky-700 hover:border-b-amber-400 duration-700 font-roboto text-black/80">Men</h1>
        <h1 className="text-xl md:text-2xl lg:text-5xl cursor-pointer hover:border-b pb-2 hover:text-sky-700 hover:border-b-amber-400 duration-700 font-roboto text-black/80">Shoes</h1>
        <h1 className="text-xl md:text-2xl lg:text-5xl cursor-pointer hover:border-b pb-2 hover:text-sky-700 hover:border-b-amber-400 duration-700 font-roboto text-black/80">Sweatshirts</h1>
        <h1 className="text-xl md:text-2xl lg:text-5xl cursor-pointer hover:border-b pb-2 hover:text-sky-700 hover:border-b-amber-400 duration-700 font-roboto text-black/80">T-shirts</h1>
        <h1 className="text-xl md:text-2xl lg:text-5xl cursor-pointer hover:border-b pb-2 hover:text-sky-700 hover:border-b-amber-400 duration-700 font-roboto text-black/80">Women</h1>
        <h1 className="text-xl md:text-2xl lg:text-5xl cursor-pointer hover:border-b pb-2 hover:text-sky-700 hover:border-b-amber-400 duration-700 font-roboto text-black/80">Jeans</h1>
      </div>
    </section>

    <section className="w-full my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-1 md:px-6">
          <div className="w-full h-[25rem] relative overflow-hidden">
            <img src="/images/pexels-luis-zambrano-17570085-removebg-preview.png" alt="image" className="w-full h-full object-cover hover:scale-150 duration-700" />

          <div className="absolute bottom-0 group py-10 flex px-10 justify-between w-full">
            <span className="text-xl group-hover:text-amber-400 duration-300 font-poppins">Men</span>
            <span className="text-xl  font-poppins group-hover:bg-sky-600 duration-300 p-4 rounded-full bg-white "><FaArrowRight className='group-hover:text-white duration-300' /></span>


          </div>
          </div>
          <div className="w-full h-[25rem] relative overflow-hidden">
            <img src="/images/pexels-ozan-çulha-17140761-removebg-preview.png" alt="image" className="w-full h-full object-cover hover:scale-150 duration-700" />
            <div className="absolute group bottom-0 py-10 flex px-10 justify-between items-center w-full">
            <span className="text-xl group-hover:text-amber-400 duration-300 font-poppins">Women</span>
            <span className="text-xl  font-poppins group-hover:bg-sky-600 duration-300 p-4 rounded-full bg-white "><FaArrowRight className='group-hover:text-white duration-300' /></span>

          </div>
          </div>
      </div>
    </section>

    <section className="w-full">
      <div className="heading my-20 flex justify-between px-4 md:px-10 lg:px-20 items-center">
        <h1 className="text-xl lg:text-3xl text-gray-500 flex items-center">You are <strong className='text-black ml-2'> trending</strong><BsArrowDown className='ml-4 font-thin'/> </h1>

        <Link to="/collections/all" className="text-light text-base lg:text-xl text-gray-700">Shop All Products</Link>

      </div>

      
      {loading ? <Spinner load={loading} /> : products.length > 0 &&(
        <div className="grid mb-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 px-4 md:px-8">
        {products.slice(0,8).map((product,index) => (
      <Card key={product._id} product={product} height='200px' />

      ))}
      </div>
      )}
      



      <hr />

    </section>

    <section className="w-full mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-10 px-3 md:px-8">

      <div className="w-full">
      <div className="card w-full h-[10rem] md:h-[25rem] lg:h-[30rem]">
      <img src="https://wpbingo-fashow.myshopify.com/cdn/shop/files/banner-4.jpg?v=1663835385" alt="image" className="w-full h-full object-cover" />
      </div>
      <div className="space-y-6 text-center mt-8">
        <h2 className="text-heebo tracking-[2px] text-xl md:text-2xl lg:text-3xl">WEEKEND COLLECTIVE</h2>
        <p className="text-gray-500 uppercase text-sm">big on logos</p>
      </div>
      </div>
      {/*  */}
      <div className="w-full">
      <div className="card w-full h-[10rem] md:h-[25rem] lg:h-[30rem]">
      <img src="https://wpbingo-fashow.myshopify.com/cdn/shop/files/banner-5.jpg?v=1663835429" alt="image" className="w-full h-full object-cover" />
      </div>
      <div className="space-y-6 text-center mt-8">
        <h2 className="text-heebo tracking-[2px] text-xl md:text-2xl lg:text-3xl">New Topman</h2>
        <p className="text-gray-500 uppercase text-sm">Anti-cold classics</p>
      </div>
      </div>

      </div>
    </section>    

    <section className="w-full my-20">
      <h2 className="text-center text-gray-500 text-base font-poppins uppercase">New Collection</h2>
      <h1 className="text-center text-black my-6 font-roboto text-3xl">The Spring Collection </h1>

      <div className="w-full px-4 mx-auto gap-1 grid grid-cols-2 lg:grid-cols-12  ">

      <div className="col-span-1 lg:col-span-2 relative w-full h-[250px] lg:h-[500px]">
      <img src="/images/good-faces-blue-GiAaGUimWok-unsplash-removebg-preview.png" alt="music" className="w-full object-cover h-full" />
      <span className="absolute top-10 season left-0 text-white uppercase p-7">shop the look - ss23</span>
      </div>
      <div className="col-span-1 lg:col-span-2 relative w-full h-[250px] lg:h-[500px]">
      <img src="/images/nubelson-gray-fernandes-0xrZwitJJO8-unsplash-removebg-preview.png" alt="image" className="w-full h-full object-cover" />
      <span className="absolute top-10 season left-0 text-white uppercase p-7">shop the look - ss23</span>
      </div>
      <div className="col-span-1 lg:col-span-5 relative w-full h-[250px] lg:h-[500px]">
      <img src="/images/pexels-murat-esibatir-4355702.jpg" alt="image" className="w-full h-full object-cover" />

      <span className="absolute top-10 season left-0 text-white uppercase p-7">shop the look - ss23</span>

      </div>
      <div className="col-span-1 lg:col-span-3 relative w-full h-[250px] lg:h-[500px]">
      <img src="https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full h-full object-cover" />
      <span className="absolute top-10 season left-0 text-white uppercase p-7">shop the look - ss23</span>
      </div>


      </div>
    </section>

    <hr />

    <section className="w-full">
      <h2 className="text-center text-3xl mt-14 mb-4 font-poppins">Instagram shop</h2>
      <p className="text-center text-xl font-light">Shop your favourite styles from Instagram.</p>

      <div className="grid mt-10 grid-cols-2 lg:grid-cols-5">
        <div className="w-full h-[210px] group relative overflow-hidden">
         <img src="/images/pexels-marco-trinidad-2881785.jpg" alt="image" className="w-full h-full object-cover group-hover:scale-150 duration-700" />
         <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black/40 duration-700"></div>
        </div>
        <div className="w-full h-[210px] group relative overflow-hidden">
         <img src="/images/pexels-terje-sollie-298863.jpg" alt="image" className="w-full h-full object-cover group-hover:scale-150 duration-700" />
         <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black/40 duration-700"></div>
        </div>
        <div className="w-full h-[210px] group relative overflow-hidden">
         <img src="/images/pexels-alexandra-maria-318236.jpg" alt="image" className="w-full h-full object-cover group-hover:scale-150 duration-700" />
         <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black/40 duration-700"></div>
        </div>
        <div className="w-full h-[210px] group relative overflow-hidden">
         <img src="/images/pexels-alexandra-maria-336372.jpg" alt="image" className="w-full h-full object-cover group-hover:scale-150 duration-700" />
         <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black/40 duration-700"></div>
        </div>
        <div className="w-full h-[210px] group relative overflow-hidden">
         <img src="/images/pexels-marco-trinidad-2881785.jpg" alt="image" className="w-full h-full object-cover group-hover:scale-150 duration-700" />
         <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black/40 duration-700"></div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Home