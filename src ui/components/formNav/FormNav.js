import React from 'react'
import './FormNav.css'
//import * as FaIcons from 'react-icons/fa';

function FormNav() {
  return (
    <div>
      <div className='form-nav-container rounded-pill'>
        <div className='form-nav-item rounded-pill clicked' >
            <div className='item-number rounded-circle'>1</div>Basic Info
        </div>
        <div className='form-nav-item rounded-pill'>
            <div className='item-number rounded-circle'>2</div>Property Detail
        </div>
        <div className='form-nav-item rounded-pill'>
            <div className='item-number rounded-circle'>3</div>General Info
        </div>
        <div className='form-nav-item rounded-pill'>
            <div className='item-number rounded-circle'>4</div>Location Info
        </div>
      </div>
    </div>
  )
}

export default FormNav