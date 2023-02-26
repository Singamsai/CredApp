import React from 'react'
import './footer.css';
import credlogo from '../../images/credlogo.png'

const Footer = () => {
  return (
    <div className='footr'>
        <div style={{marginTop:"-50px"}}>
        <img src={credlogo} alt="cred"></img>
        <p><b>complete security. no asterisks.</b></p>
        <p>CRED encrypts all data and transactions to ensure a<br></br> completely secure experience for our members.</p>
        <p style={{marginTop:"100px",color:"whitesmoke"}}>copyright © 2020-22 Dreamplug Technologies Pvt Ltd.</p>
        </div>
        <div className='footer'>
        <div className='features'>
            <div>
                <h2>Products</h2>
                <ul>
                    <li>CRED pay</li>
                    <li>credit score check</li>
                </ul>
            </div>
            <div>
                <h2>CRED</h2>
                <ul>
                    <li>About</li>
                    <li>career</li>
                    <li>IPL</li>
                    <li>customer care</li>
                </ul>
            </div>
        </div>
        <div className='features'>
            <div>
                <h2>resources</h2>
                <ul>
                    <li>articles</li>
                    <li>blogs</li>
                    <li>calculators</li>
                    <li>credit card <br></br>payment guide</li>
                    <li>credit score guide</li>
                </ul>
            </div>
            <div>
                <h2>policy</h2>
                <ul>
                    <li>security</li>
                    <li>transaction & user<br></br> verification</li>
                    <li>google API disclosure</li>
                    <li>UPI faq & grievances</li>
                </ul>
            </div>
        </div>
        <p style={{marginLeft:"-120px"}}>privacy policy | terms and conditions | returns and refund</p>
    </div>
    </div>
  )
}

export default Footer
