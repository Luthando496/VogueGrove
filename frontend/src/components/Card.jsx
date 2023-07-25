import React from 'react'

const Card = ({image,name,price,height}) => {
  return (
        <div className="w-full">
        <div className={`card-image group max-h-[${height}] h-[${height}] relative overflow-hidden`}>
          <img src={image} alt="image" className="w-full max-h-full h-full object-cover hover:scale-150 duration-[700ms]" />
          <span className="absolute top-4 left-4 p-2 bg-sky-700 text-white font-thin">- 20% off</span>
          <div className="absolute group-hover:translate-y-[0%] duration-700 translate-y-[100%] text-center bottom-0 w-full py-4 px-2 bg-black/40">
            <a href='#' className="text-center text-amber-500   tracking-[3px] font-semibold">Add to Cart</a>
          </div>
        </div>
        <div className="card-body text-center mt-4 space-y-3">
          <h3 className="text-xl font-light text-light-700">{name}</h3>
          <p className="text-sky-900 font-semibold text-xl">R{price}</p>
        </div>
      </div>
  )
}

export default Card