import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import { Link,useParams } from 'react-router-dom'
import {SlArrowRight} from 'react-icons/sl'
import {FaArrowRight} from 'react-icons/fa'
import {LuArrowUpDown} from 'react-icons/lu'
import {AiOutlineHeart,AiOutlineCheck,AiOutlineQuestionCircle,AiOutlineInbox} from 'react-icons/ai'
import {Carousel as Slider} from 'react-responsive-carousel'
import { useDispatch,useSelector } from 'react-redux'
import {singleProduct} from '../store/actions/productActions'
import Spinner from '../components/Spinner'
import { addCart } from '../store/actions/cartActions'


const ProductScreen = () => {
    const [qty, setQty] = useState(1)
    const {id} = useParams()
    const [toggle,setToggle]= useState(1)
    const dispatch = useDispatch()
    const {product,loading,error} = useSelector(state => state.prod)


    const changeCart=()=>{
        setQty(qty+1)
    }

    useEffect(()=>{
        dispatch(singleProduct(id))
    },[dispatch])


    const addCartHandler = (product) => {
        dispatch(addCart(product))
    }
    
  return (
    <>
    <Navbar />
    <hr />

    <section className='w-full mb-20 mt-3'>
    <div className="w-full px-5 flex items-center">
    <Link to='/' className='text-gray-500  text-sm flex gap-2 items-center' >
        Home <SlArrowRight className='text-gray-500 mt-[2px]' size={12} />
    </Link>
    <Link to={`/collection/${product && product.category}`} className='text-gray-500  text-sm flex gap-2 items-center' >
    {product && product.category} <SlArrowRight className='text-gray-500 mt-[2px]' size={12} />
    </Link>
    <Link to='/' className='text-gray-500  text-sm flex gap-2 items-center' >
    {product && product.name}
    </Link>
    </div>

    {loading ? <Spinner /> : error ? <>An error</> : product ?  (<div className="flex flex-wrap gap-4 mt-10 px-3">
    <article className="text-white lg:basis-[60%] text-[20px] col-span-1 w-full ">
            <Slider
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                {product.images?.map((img,index) => (
                    <img
                        key={index}
                        src={img?.url}
                        className='object-cover w-full h-full'
                        alt={'image-name'}
                    />
                ))}

            </Slider>
    </article>

    <article className="w-full lg:basis-[35%] col-span-1">
     <h1 className="font-poppins text-xl lg:text-2xl text-zinc-400">{product.name}</h1>

     <div className="flex my-4 gap-4">
        <span className="text-gray-700 font-bold text-base line-through">R 300</span>
        <span className="text-red-500 font-roboto text-xl font-semibold">R {product.price}</span>
     </div>
     <div className="flex my-1 gap-[8px]">
        <span className="text-black">By</span>
        <span className="text-sky-500 ">{product.brand}</span>
     </div>
     <hr />
                <p className="py-6 text-black uppercase text-xl">{product.category}</p>
                <div className="flex justify-between ">
                    <p className="text-xl text-gray-700">Price : ZAR {product.price}</p>
                    <span className="text-xl text-green-500">23% off</span>
                </div>
                <p className="text-black/70 pt-2 text-md">incl. of taxes</p>
                <p className="text-black/70 pb-8 text-md">(Also includes all applicable duties)</p>

                <div className="w-full grid grid-cols-5 gap-2 mt-10 items-center">
                    <div className="col-span-4 w-full">
                        <button onClick={()=> addCartHandler(product)} className="bg-black hover:bg-orange-400 rounded-md hover:shadow-2xl duration-700 hover:translate-y-2 w-full uppercase px-3 py-4  text-white text-sm font-heebo text-center">
                            Add To cart
                        </button>
                    </div>
                    <div className=" col-span-1 p-2 h-full">
                        <AiOutlineHeart size={25} />
                    </div>
                </div>

                <div className="my-4 w-full mt-10 flex justify-between items-center gap-2">
                <span className="font-roboto text-[11px] font-semibold flex items-center"><LuArrowUpDown className='mr-2'/>Compare</span>
                <span className="font-roboto text-[11px] font-semibold flex items-center"><AiOutlineQuestionCircle className='mr-2'/>Ask a question</span>
                <span className="font-roboto text-[11px] font-semibold flex items-center"><AiOutlineInbox className='mr-2'/>Delivery & Return</span>
                <span className="font-roboto text-[11px] font-semibold flex items-center"><LuArrowUpDown className='mr-2'/>Share</span>


                </div>

                <div className="w-full py-6 px-4 border border-zinc-500 my-6">
                    <p className="text-base text-gray-500 flex items-center gap-2"><AiOutlineCheck className='text-green-500 text-base' />Pickup available at <strong>New York</strong></p>
                    <p className="my-1 pl-[24px] text-[12px] text-gray-500">Usually ready in 4 hours</p>

                    <span className="text-sky-500 text-[12px]  mt-[20px] cursor-pointer  ml-[24px] font-semibold font-poppins pb-1 border-b hover:border-none duration-700">Check availability at other stores</span>
                </div>

                <div className="w-full p-2 border">
                    <img src="https://wpbingo-fashow.myshopify.com/cdn/shop/files/Variable-Color.png?crop=center&height=30&v=1656906716&width=432" alt="payment-logo" className="w-full h-[100px] object-contain" />
                </div>

    </article>        

    </div>):<>No Product</>}
    


    </section>
    <hr />
    <section className="w-full flex justify-center my-7 items-center px-4 md:px-10 lg:px-14">
        <p className="text-base text-black/80 leading-[1.9] tracking-[2px] font-jost font-semibold">{product && product.description}</p>
    </section>
    <hr />
    <div className="flex w-full justify-center gap-8 mb-12  mt-20 ">
        <ul className="flex gap-8">
            <li className={`${toggle === 1 ?  'border-t-[3px] border-teal-900' : '' }  text-xl cursor-pointer text-gray-600 font-semibold  -mt-[1.6rem] py-6 tracking-[2px]  `}  onClick={() => setToggle(1)}><span className="">Description</span>
            </li>
            <li className={`${toggle === 2 ?  'border-t-[3px] border-teal-900' : '' }  text-xl cursor-pointer text-gray-600 font-semibold  -mt-[1.6rem] py-6 tracking-[2px]  `}  onClick={() => setToggle(2)}><span className="">Shipping & Delivery</span>
            </li>
        </ul>
    </div>

    <div className={`w-full  ${toggle === 1 ? 'px-14 py-8 grid grid-cols-2 lg:grid-cols-3 gap-6 my-10 ' :'hidden'} `}>
        <div className="">
        <h1 className="text-black text-2xl font-semibold mb-6">MAECENAS IACULIS</h1>
        <p className="text-md text-gray-500">Nunc per mollis pot enti amet imperdiet blandit dis eu sociosqu accumsan dap ibus ultricies tristique montes a deros adipiscing a justo. Aliquet mus a aptent ullamcorper metus accumsan. Habitasse a purus nec ipsum a urna ac ullamcorper varius metus blandit posuere.</p>

        <p className="text-md mt-4 text-gray-500">Consectetur parturient ad imperdiet torquent dui dis eu sociosqu accumsan accumsan dapibus ultricies. Maecenas iaculis viverra tellus ridiculus a sed vestibulum dapibur.</p>
        </div>


        <div className="">
        <h1 className="text-black text-2xl font-semibold mb-6">MAECENAS IACULIS</h1>
        <p className="text-md text-gray-500">Venenatis duis tristique accumsan netus enim in posuere torquent ut ullamcorper integer aliquam a mi curae elementum. Maecenas iaculis viverra tellus ridiculus a sed vestibulum dapibus. Ante a mollis habitant duis urna cum iaculis ullamcorper luctus.</p>

        <ul className="text-md mt-4 text-gray-500 flex flex-col gap-4">
            <li className="flex items-center gap-6">
                <FaArrowRight /> <span className="text-sm font-semibold">65% Polyester, 23% Elastane</span>
            </li>
            <li className="flex items-center gap-6">
                <FaArrowRight /> <span className="text-sm font-semibold">Abitur parturient praesent ipsu</span>
            </li>
            <li className="flex items-center gap-6">
                <FaArrowRight /> <span className="text-sm font-semibold">Abitur parturient praesent ipsu</span>
            </li>
            <li className="flex items-center gap-6">
                <FaArrowRight /> <span className="text-sm font-semibold">Diam parturient dictumst nibh mu</span>
            </li>
        </ul>

        </div>

        <div className="">
        <h1 className="text-black text-2xl font-semibold mb-6">FEUGIAT PARTURIENT</h1>
        <p className="text-md font-semibold text-gray-500">Model’s height: 4’2.2”/184 cm</p>
        <p className="text-md font-semibold text-gray-500">Model is wearing: Size Large</p>


        <h1 className="text-black text-2xl font-semibold mb-6 my-6">ALIQUET</h1>
        <p className="text-md font-semibold text-gray-500">Quam suspendisse adipiscing quis pretium nostra cubilia tristique nam non ac placerat nascetur a vel.</p>
        <h1 className="text-black text-2xl font-semibold  my-4">CURABITUR VELIT</h1>
        <p className="text-md font-semibold text-gray-500">Main: 76% Polyester, 24% Elastane.</p>

        </div>

    </div>

    <div className={`w-full ${toggle === 2 ? 'grid  grid-cols-1 lg:grid-cols-2 gap-4 my-10 px-12': 'hidden' } `}>
        <div className="img w-full flex gap-2">
            <img src="https://cdn.shopify.com/s/files/1/0112/6468/8186/files/test3.jpg?v=1663906450" alt="shipping" className='w-full' />
            <img src="https://cdn.shopify.com/s/files/1/0112/6468/8186/files/test2.jpg?v=1663906450" alt="shipping-2" className='w-full' />
        </div>
        <div className="w-full px-4">
        <h1 className="text-black text-2xl font-semibold mb-6">MAECENAS IACULIS</h1>
        <p className="text-md text-gray-500">Vestibulum curae torquent diam diam commodo parturient penatibus nunc dui adipiscing convallis bulum parturient suspendisse parturient a.Parturient in parturient scelerisque nibh lectus quam a natoque adipiscing a vestibulum hendrerit et pharetra fames nunc natoque dui.</p>
        <h1 className="text-black text-xl font-semibold my-6">ADIPISCING CONVALLIS BULUM</h1>
        <ul className="text-md  text-gray-500 flex flex-col gap-4">
            <li className="flex items-center gap-6">
                <FaArrowRight /> <span className="text-sm font-semibold">65% Polyester, 23% Elastane</span>
            </li>
            <li className="flex items-center gap-6">
                <FaArrowRight /> <span className="text-sm font-semibold">Abitur parturient praesent ipsu</span>
            </li>
            <li className="flex items-center gap-6">
                <FaArrowRight /> <span className="text-sm font-semibold">Abitur parturient praesent ipsu</span>
            </li>
            <li className="flex items-center gap-6">
                <FaArrowRight /> <span className="text-sm font-semibold">Diam parturient dictumst nibh mu</span>
            </li>
        </ul>
        <p className="text-md my-4 text-gray-500">Scelerisque adipiscing bibendum sem vestibulum et in a a a purus lectus faucibus lobortis tincidunt purus lectus nisl class eros.Condimentum a et ullamcorper dictumst mus et tristique elementum nam inceptos hac parturient scelerisque vestibulum amet elit ut volutpat.</p>



        </div>
    </div>

    </>
  )
}

export default ProductScreen