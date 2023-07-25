import React from 'react'
import Navbar from '../components/Navbar'


const About = () => {
  return (
        <>
            <Navbar />
            <hr />
            
            <section className="h-full px-4 lg:h-[90vh] my-10">
                <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=19" alt="header-image" className="w-full h-full object-cover" />
            </section>

            <section className="w-full px-4 my-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8">
                {/*  */}
                <div className="w-full col-span-2">
                <h2 className="text-4xl pt-16 font-poppins font-light text-gray-800">About Us</h2>
                <div className="w-[10%] my-5 bg-slate-400 h-[1px]"></div>

                <p className="text-sm text-gray-600 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolores mollitia accusamus facere aperiam repudiandae laudantium sapiente provident debitis molestias quos, saepe, error eaque quo earum quidem nesciunt placeat animi! Saepe sapiente at obcaecati illo?</p>

                <h3 className="text-[14px] font-semibold text-sky-500 font-poppins mt-5 mb-2">Store Hours</h3>
                
                <p className="text-[12px] text-gray-500 my-2 font-semibold font-heebo">Monday-Saturday : 11am–7pm ET</p>
                <p className="text-[12px] text-gray-500 my-2 font-semibold font-heebo">Sunday : 11am–6pm ET</p>
                    
                </div>

                <div className="w-full col-span-">
                    <img src="https://images.pexels.com/photos/10915427/pexels-photo-10915427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="header-logo" className="w-full rounded-sm shadow-xl shadow-slate-200 h-full object-cover" />
                </div>

                </div>
            </section>
        </> 
  )
}

export default About