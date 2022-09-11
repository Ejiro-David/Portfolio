import React from 'react'
import './Toggle.css';
import sunny from '../branding/sunny.png'
import moon from "../branding/moon.png";
import button from "../branding/radio-button.png";




function Toggle() {
  return (
    <div className='t'>
        <img alt='' src={sunny} className='t-icon'></img>
        <img alt='' src={moon} className='t-icon'></img>
        <div className='t-button'></div>


    </div>
  )
}

export default Toggle