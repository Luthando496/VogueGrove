import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";



const Spinner = ({load}) => {
  return (
    <section className='w-full flex justify-center items-center'>
    <ClipLoader
        color={"#222355"}
        loading={load}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        className='w-full flex justify-center items-center'
      />

    </section>
  )
}

export default Spinner