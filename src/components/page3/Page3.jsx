import React from 'react'
import './page3.css'

const Page3 = ({back,h11,h12,p,btn}) => {
  return (
    <div className='page3' style={{backgroundImage:`url(${back})`}} >
      <h1>{h11} <br></br>{h12}</h1>
      <h3>{p}</h3>
      <p>every time you pay your credit card bills on CRED, you receive CRED coins.<br></br> you can use these to win exclusive rewards or get special access to curated<br></br> products and experiences. on CRED, good begets good.</p>
      <button>{btn}</button>
    </div>
  )
}

export default Page3
