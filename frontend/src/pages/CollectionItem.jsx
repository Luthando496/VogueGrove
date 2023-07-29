import {useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import {SlArrowRight} from 'react-icons/sl'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';    
import Card from '../components/Card'
import {useDispatch,useSelector} from 'react-redux'
import {getCollection,getProducts} from '../store/actions/productActions'
import {useParams} from 'react-router-dom'
import {FcFilledFilter} from 'react-icons/fc'
import {BiFilter} from 'react-icons/bi'
import {AiOutlineMinus} from 'react-icons/ai'



const CollectionItem = () => {
    const [age, setAge] = useState('');
    const {products} = useSelector(state => state.prod)
    const dispatch = useDispatch()
    const {id} = useParams()

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(()=>{
    if(id == 'all'){
      dispatch(getProducts())
    }
    dispatch(getCollection(id))

  },[dispatch])



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
            <div className="py-10 w-full hidden md:block md:col-span-1">
            <div className='flex items-center gap-8 border-b pb-4' >
            <FcFilledFilter size={29} />
            <h3 className='text-xl font-semibold font-heebo tracking-[6px]'>Filter By</h3>
            </div>
            <div className="mt-8 w-full flex items-center justify-between">
              <div className="flex gap-5">
                <BiFilter size={20} /><span className='text-base font-semibold font-poppins uppercase'>Availability</span>
              </div>
                <AiOutlineMinus size={20} />
            </div>
            <div>
            
            </div>
            </div>
            {/*  */}
            <div className="py-10 w-full col-span-3 md:col-span-2">
            <div className="w-full">
            <Box className='w-full lg:w-[50%]' >
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort Items</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                >
                <MenuItem value={10}>Low To High</MenuItem>
                <MenuItem value={20}>High To Low</MenuItem>
                <MenuItem value={30}>A to Z</MenuItem>
                <MenuItem value={30}>Z to A</MenuItem>
                </Select>
            </FormControl>
            </Box>
            </div>
            {/*  */}

            <div className="w-full grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-y-[4rem] gap-x-10 mt-10">
            {products?.map((product,index)=>(
                <Card key={index} product={product}  height='20rem' />

            ))}
            </div>
            </div>
            {/*  */}


            </div>
        </section>
    </>
  )
}

export default CollectionItem