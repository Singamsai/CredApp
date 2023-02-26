import React from 'react'
import credlogo from '../../images/credlogo.png'
import './header.css';
const Header = () => {
  return (
    <div className='header'>
      <img src={credlogo} alt="logo"></img>
      <ul>
        <li>credit score check</li>
        <li>CRED pay</li>
      </ul>
    </div>
  )
}

export default Header
