import React from 'react'
import brands from '../../images/brands.PNG'
import './brands.css'

const Brands = () => {
  return (
    <div className='brands'>
      <h2>rewards from brands you love.</h2>
        <img src={brands} alt="brands"></img>
    </div>
  )
}

export default Brands
