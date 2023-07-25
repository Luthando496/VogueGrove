import React from 'react'
import logo2 from '/images/good-faces-yellow-GiAaGUimWok-unsplash-removebg-preview.png'
import Swiper from 'react-id-swiper';
import logo from '/images/dom-hill-nimElTcTNyY-unsplash-removebg-preview.png'
import logo3 from '/images/alexi-romano-CCx6Fz_CmOI-unsplash-PhotoRoom.png-PhotoRoom.png'


const Header = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // }
  }
  return (
    <>
    <div className='overflow-hidden'>
    <Swiper {...params}>
    <header className='w-full max-w-[100%] h-[90vh] relative yellow'>
      <img src={logo2} alt="logo" className='absolute h-full right-24' />

      <div className="absolute left-2 fade-right text-white top-16 p-10">
      <h3 className="uppercase text-2xl  font-thin">30% of everything</h3>

      <h1 className="my-10 uppercase text-4xl font-light leading-[1.8]">
        Spring <br />Collection
      </h1>

      <button className="px-6 tracking-[4px] font-semibold rounded-md mybtn py-4 bg-red-200  text-center uppercase text-sm">Shop Now</button>
      </div>

    </header>

    <header className='w-full h-[90vh] relative bg-black'>
      <img src={logo} alt="logo" className='absolute h-full right-24' />

      <div className="absolute left-2 fade-right text-white top-16 p-10">
      <h3 className="uppercase text-2xl  font-thin">30% of everything</h3>

      <h1 className="my-10 uppercase text-4xl font-light leading-[1.8]">
        Spring <br />Collection
      </h1>

      <button className="px-6 tracking-[4px] font-semibold rounded-md mybtn py-4 bg-zinc-200 text-black text-center uppercase text-sm">Shop Now</button>
      </div>

    </header> 

    <header className='w-full h-[90vh] green relative '>
      <img src={logo3} alt="logo" className='absolute object-contain right-0 h-full lg:right-24' />

      <div className="absolute left-2 fade-right text-gray-900 tracking-[4px] top-16 p-10">
      <h1 className="my-5 uppercase text-xl lg:text-4xl font-[400] leading-[1.8]">
        Essentials <br />Starting At R400,90
      </h1>

      <h3 className="capitalize my-6 text-xl lg:text-2xl text-gray-900 tracking-[4px] font-[500]">Our Stores are only located in Cape Town</h3>

      <button className="px-6 tracking-[4px] font-semibold rounded-md mybtn py-4 bg-white text-black text-center uppercase text-sm">Shop Now</button>
      </div>

    </header> 
    </Swiper>
      </div>
    
    </>
  )
}

export default Header