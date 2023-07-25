import React from 'react'


const BottomHeader = () => {
  


  return (
    <>
     <section className="w-full mt-1 mb-20">
      <div className="grid grid-cols-1  lg:grid-cols-3 "> 
       <div className="col-span-1 h-full flex flex-col">

        <div className="w-full relative">
          <img src="/images/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg" alt="ladies" className="w-full h-full" />
          <a href="#" className="center-link bg-white px-8 py-2 text-stone-700 uppercase tracking-[2px]">Shoes</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="img relative">
            <img src="/images/dom-hill-nimElTcTNyY-unsplash-removebg-preview.png" alt="ladies" className="w-full h-full" />
            <a href="#" className="center-link bg-white px-8 py-2 text-stone-700 uppercase tracking-[2px]">Women</a>
          </div>
          <div className="img relative">
            <img src="/images/nubelson-gray-fernandes-0xrZwitJJO8-unsplash-removebg-preview.png" alt="ladies" className="w-full h-full" />
            <a href="#" className="center-link bg-white px-8 py-2 text-stone-700 uppercase tracking-[2px]">Accessories</a>
          </div>
        </div>
        </div> 

         <div className="w-full col-span-2 h-full relative">
          <img src="https://plus.unsplash.com/premium_photo-1689327920656-bcfe8a9709fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" alt="mens-category" className="w-full h-full object-cover" />
          <a href="#" className="center-link bg-white px-8 py-2 text-stone-700 uppercase tracking-[2px]">Mens</a>
        </div>
      </div>
    </section>  
    

    </>
  )
}

export default BottomHeader