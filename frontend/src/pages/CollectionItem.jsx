import {useState} from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import {SlArrowRight} from 'react-icons/sl'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';    
import Card from '../components/Card'


const CollectionItem = () => {
    const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <>
        <Navbar />
        <hr />

        <div className="mx-auto text-center w-full my-14">
            <h1 className='font-roboto text-black/90 text-xl md:text-3xl font-semibold lg:text-4xl'>Women</h1>
            <div className="w-full px-5 flex justify-center items-center my-4">
            <Link to='/' className='text-gray-500  text-sm flex gap-2 mr-2 items-center' >
                Home <SlArrowRight className='text-gray-500 mt-[2px]' size={12} />
            </Link>
            <Link to='/collections' className='text-gray-500  text-sm flex gap-2 items-center mr-2' >
                Collections <SlArrowRight className='text-gray-500 mt-[2px]' size={12} />
            </Link>
            <Link to='/' className='text-gray-500  text-sm flex gap-2 items-center' >
            Comfort mini denim skirt
            </Link>
            </div>
        </div>

        <section className="my-20 w-full relative">
            <div className="px-2 md:px-3 relative lg:px-5 grid grid-cols-3 gap-5">
            {/*  */}
            <div className="py-10 w-full hidden md:block md:col-span-1">
            <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Collections</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='flex justify-between mb-10'>
            <h4 className='text-sm text-gray-400'> All Products</h4>
            <span className="rounded-full px-[10px] py-[3px] bg-zinc-300 text-gray-600">2</span>
          </Typography>
    </AccordionDetails>
    <AccordionDetails>
          <Typography className='flex justify-between mb-10'>
          <h4 className='text-sm text-gray-400'>Women</h4>
            <span className="rounded-full px-[10px] py-[3px] bg-zinc-300 text-gray-600">2</span>
          </Typography>
    </AccordionDetails>
        <AccordionDetails>
          <Typography className='flex justify-between mb-10'>
            <h4 className='text-sm text-gray-400'>Men</h4>
            <span className="rounded-full px-[10px] py-[3px] bg-zinc-300 text-gray-600">2</span>
          </Typography>
    </AccordionDetails>
    <AccordionDetails>
          <Typography className='flex justify-between mb-10'>
          <h4 className='text-sm text-gray-400'>Hoodies</h4>
            <span className="rounded-full px-[10px] py-[3px] bg-zinc-300 text-gray-600">2</span>
          </Typography>
    </AccordionDetails>
        <AccordionDetails>
          <Typography className='flex justify-between mb-10'>
            <h4 className='text-sm text-gray-400'>T-shirts</h4>
            <span className="rounded-full px-[10px] py-[3px] bg-zinc-300 text-gray-600">2</span>
          </Typography>
    </AccordionDetails>
    <AccordionDetails>
          <Typography className='flex justify-between mb-10'>
          <h4 className='text-sm text-gray-400'>Accessories</h4>
            <span className="rounded-full px-[10px] py-[3px] bg-zinc-300 text-gray-600">2</span>
          </Typography>
    </AccordionDetails>
      </Accordion>
      
      
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

            <div className="w-full grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 mt-10">
                <Card image={'https://cdn.shopify.com/s/files/1/0112/6468/8186/products/9_360x.jpg?v=1665019404'} name='Playstation 5' price={'123.00'} height='20rem' />
                <Card image={'https://cdn.shopify.com/s/files/1/0112/6468/8186/products/57_aae90e2b-1403-40ca-9004-fcdbf2b14ceb_360x.jpg?v=1665549687'} name='Playstation 5' price={'123.00'} height='20rem' />
                <Card image={'https://cdn.shopify.com/s/files/1/0112/6468/8186/products/15_4bf71efc-7b2e-4f6a-ba05-e543385926c9_360x.jpg?v=1665549630'} name='Playstation 5' price={'123.00'} height='20rem' />
                <Card image={'https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} name='Playstation 5' price={'123.00'} height='20rem' />
                <Card image={'https://images.pexels.com/photos/1858488/pexels-photo-1858488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} name='Playstation 5' price={'123.00'} height='20rem' />
                <Card image={'https://images.pexels.com/photos/2866119/pexels-photo-2866119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} name='Playstation 5' price={'123.00'} height='20rem' />

                <Card image={'https://images.pexels.com/photos/2821106/pexels-photo-2821106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} name='Playstation 5' price={'123.00'} height='20rem' />
                <Card image={'https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} name='Playstation 5' price={'123.00'} height='20rem' />
                <Card image={'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} name='Playstation 5' price={'123.00'} height='20rem' />
            </div>
            </div>
            {/*  */}


            </div>
        </section>
    </>
  )
}

export default CollectionItem