import {useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'
import {Link} from 'react-router-dom'
import {SlArrowRight} from 'react-icons/sl'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';    
import Card from '../components/Card'
import {useDispatch,useSelector} from 'react-redux'
import {LowName, getCollection,getProducts} from '../store/actions/productActions'
import {useParams} from 'react-router-dom'
import {FcFilledFilter} from 'react-icons/fc'
import {BiFilter} from 'react-icons/bi'
import {AiOutlineMinus} from 'react-icons/ai'
import { useCollapse } from 'react-collapsed'
import Pagination from '@mui/material/Pagination'




const CollectionItem = () => {
    const [search, setSearch] = useState('')
    const [age, setAge] = useState('');
    const {products,totalPages,loading,error,page} = useSelector(state => state.prod)
    const [pageNumer, setPage] = useState(page || 1)
    const dispatch = useDispatch()
    const [isExpanded, setExpanded] = useState(true)
    const [isBrand, setIsBrand] = useState(true)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded,duration:200 })
    const {id} = useParams()


    // const bbh = products && products.filter((item)=> item.brand === 'Nike')

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  useEffect(()=>{
    if(id == 'all'){
      dispatch(getProducts())
    }else{
      dispatch(getCollection(id))

    }

  },[dispatch])

  const handleChange=(e,page)=>{
    setPage(page)
    dispatch(getProducts(page))
  }

  const changeSorting =(e)=>{
    console.log(e.target.value)
    const name = e.target.value
    if(name == 'a'){
       dispatch(LowName())
    }

  }

  return (
    <>
        <Navbar />
        <hr />

        <div className="mx-auto text-center w-full my-14">
            <h1 className='font-roboto text-black/90 text-xl md:text-3xl font-semibold lg:text-4xl'>{id}</h1>
            <div className="w-full px-5 flex justify-center items-center my-4">
            <Link to='/' className='text-gray-500  text-sm flex gap-2 mr-2 items-center' >
                Home <SlArrowRight className='text-gray-500 mt-[2px]' size={12} />
            </Link>
            <Link to='/collections' className='text-gray-500  text-sm flex gap-2 items-center mr-2' >
                Collections <SlArrowRight className='text-gray-500 mt-[2px]' size={12} />
            </Link>
            <span  className='text-gray-500  text-sm flex gap-2 items-center' >
            {id}
            </span>
            </div>
        </div>

        <section className="my-20 w-full relative">
            <div className="px-2 md:px-3 relative lg:px-5 grid grid-cols-3 gap-5">
            {/*  */}
            <div className="py-10 w-full hidden lg:block md:col-span-1">
            <div className='flex items-center gap-8 border-b pb-4' >
            <FcFilledFilter size={29} />
            <h3 className='text-xl font-semibold font-heebo tracking-[6px]'>Filter By</h3>
            </div>
            <div className="mt-8 w-full flex items-center justify-between">
              <div className="flex gap-5">
                <BiFilter size={20} /><span className='text-base font-semibold font-poppins uppercase'>Availability</span>
              </div>
                <AiOutlineMinus {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => (!prevExpanded)),
                })} size={20} />
            </div>
            <section {...getCollapseProps()} >
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-7">
                  <input type="checkbox" name="checkbox" id="" />
                  <span className="text-sm text-black/70">In stock</span>
                </div>
                <span className='font-poppins'>24</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-7">
                  <input type="checkbox" name="checkbox" id="" />
                  <span className="text-sm text-black/70">Out of stock</span>
                </div>
                <span className='font-poppins'>3</span>
              </div>
            </section>
            <div>
            {/* 2nd */}
            {/* 3rd */}
            <div className="mt-8 w-full flex items-center justify-between">
              <div className="flex gap-5">
                <BiFilter size={20} /><span className='text-base font-semibold font-poppins uppercase'>brand</span>
              </div>
                <AiOutlineMinus {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })} size={20} />
            </div>
            <section {...getCollapseProps()}>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-7">
                  <input type="checkbox" name="checkbox" id="" />
                  <span className="text-sm text-black/70">Armani</span>
                </div>
                <span className='font-poppins'>{products && products.filter(i=> i.brand === 'Armani').length}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-7">
                  <input type="checkbox" name="checkbox" id="" />
                  <span className="text-sm text-black/70">Nike</span>
                </div>
                <span className='font-poppins'>{products && products.filter(i=> i.brand === 'Nike').length}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-7">
                  <input type="checkbox" name="checkbox" id="" />
                  <span className="text-sm text-black/70">Adidas</span>
                </div>
                <span className='font-poppins'>{products && products.filter(i=> i.brand === 'Adidas').length}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-7">
                  <input type="checkbox" name="checkbox" id="" />
                  <span className="text-sm text-black/70">Supreme</span>
                </div>
                <span className='font-poppins'>{products && (products.filter(i=> i.brand === 'Supreme')).length}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-7">
                  <input type="checkbox" name="checkbox" id="" />
                  <span className="text-sm text-black/70">Essentials</span>
                </div>
                <span className='font-poppins'>{products && (products.filter(i=> i.brand === 'Essentials')).length}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-7">
                  <input type="checkbox" name="checkbox" id="" />
                  <span className="text-sm text-black/70">OFF-WHITE</span>
                </div>
                <span className='font-poppins'>{products && (products.filter(i=> i.brand === 'OFF-WHITE')).length}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-7">
                  <input type="checkbox" name="checkbox" id="" />
                  <span className="text-sm text-black/70">Louis Vuitton</span>
                </div>
                <span className='font-poppins'>{products && (products.filter(i=> i.brand === 'Louis Vuitton')).length}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-7">
                  <input type="checkbox" name="checkbox" id="" />
                  <span className="text-sm text-black/70">Bape</span>
                </div>
                <span className='font-poppins'>{products && (products.filter(i=> i.brand === 'Bape')).length}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-7">
                  <input type="checkbox" name="checkbox" id="" />
                  <span className="text-sm text-black/70">Burberry</span>
                </div>
                <span className='font-poppins'>{products && (products.filter(i=> i.brand === 'Burberry')).length}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-7">
                  <input type="checkbox" name="checkbox" id="" />
                  <span className="text-sm text-black/70">Mulberry</span>
                </div>
                <span className='font-poppins'>{products && (products.filter(i=> i.brand === 'Mulberry')).length}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-7">
                  <input type="checkbox" name="checkbox" id="" />
                  <span className="text-sm text-black/70">Michael Kors</span>
                </div>
                <span className='font-poppins'>{products && (products.filter(i=> i.brand === 'Michael Kors')).length}</span>
              </div>
            </section>


            
            
            </div>
            </div>
            {/*  */}
            <div className="py-10 w-full col-span-3 lg:col-span-2">
            <div className="w-full">
            <Box className='w-full lg:w-[50%]' >
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort Items</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={changeSorting}
                >
                <MenuItem value={10}>Low To High</MenuItem>
                <MenuItem value={20}>High To Low</MenuItem>
                <MenuItem value={'a'}>A to Z</MenuItem>
                <MenuItem value={30}>Z to A</MenuItem>
                </Select>
            </FormControl>
            </Box>
            </div>
            {/*  */}
            {loading ? <div className='w-full mx-auto mt-20'>
              <Spinner  />
            </div> : products.length > 0 ? <>
            <div className="w-full grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-y-[4rem] gap-x-10 mt-10">
            {products?.map((product,index)=>(
                <Card key={index} product={product}  height='20rem' />

            ))}
            </div>
            </> : <></>}
            
            </div>
            {/*  */}


            </div>
        </section>
        {id == 'all' && <Pagination count={totalPages} onChange={handleChange} page={pageNumer} variant="outlined" color="primary" className='w-[80%] mx-auto py-[1rem] bg-rose-600'   />}
    </>
  )
}

export default CollectionItem