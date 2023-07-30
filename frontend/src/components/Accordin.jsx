import React from 'react'

const Accordin = ({getCollapseProps,children}) => {
  return (
    <section {...getCollapseProps()}>
        {children}
    </section>
  )
}

export default Accordin