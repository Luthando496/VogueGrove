import React from 'react'
import {Link} from 'react-router-dom'
import {AiFillHeart} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addCart } from '../store/actions/cartActions'

let ZAR = new Intl.NumberFormat('en-za', {
  style: 'currency',
  currency: 'ZAR',
});


const Card = ({product,height}) => {
  const {image,name,price,_id} = product
  const dispatch = useDispatch()
  
  const addToCartHandler=(ro)=>{
      dispatch(addCart(ro))
  }

  return (
        <div className="w-full ">
        <div className={`card-image group  h-[${height}] relative overflow-hidden`}>
        <Link to={`/product/${_id}`}>
          <img src={image} alt="image" className="w-full max-h-full h-full  hover:scale-150 duration-[700ms]" />
        </Link>
          {/* <span className="absolute top-4 left-4 p-2 bg-sky-700 text-white font-thin">- 20% off</span> */}
          <div className="absolute group-hover:translate-y-[0%] duration-700 translate-y-[100%] text-center bottom-0 w-full h-[50px] bg-black/40 ">
            <button onClick={()=>addToCartHandler(product)} className="text-center w-full h-full mb-2 text-base font-jost text-amber-500 bg)-black/60  tracking-[3px] font-thin px-1">Add to Cart</button>
          </div>
        </div>
        <div className="card-body text-center mt-4 space-y-3">
          <h3 className="text-xl font-light text-light-700">{name}</h3>
          <p className="text-sky-900 font-semibold text-xl">R{ZAR.format(price)}</p>
        </div>
      </div>
  )
}

export default Card