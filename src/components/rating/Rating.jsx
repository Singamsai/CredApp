import React from 'react'
import './rating.css'

const Rating = () => {
  return (
    <div className='rating'>
        <div className='ratingbox'>
            <h1>4.8 <span>app store</span></h1>
            <h2>*****</h2>
            <button>Download the app</button>
        </div>
        <div className='ratingbox'>
            <h1>4.7 <span>play store</span></h1>
            <h2>*****</h2>
            <button>Download the app</button>
        </div>
    </div>
  )
}

export default Rating
