import React from 'react'
import './Formbox1.css'
import FormNav from '../formNav/FormNav'

function formbox() {
  return (
    <div className='form-container'>
      <div className='form-title'> ADD NEW PROPERTY </div>
      <FormNav/>
      <div className='form-fields-container rounded-4'>

        <div class="row">
          <div class="col">
              <label class="form-label">Length</label>
                <select class="form-select">
                  <option selected>Example:1000</option>
                  <option>...</option>
                </select>
          </div>
          <div class="col">
              <label class="form-label">Breadth</label>
                <select class="form-select">
                  <option selected>Example:1000</option>
                  <option>...</option>
                </select>
          </div> 
        </div>


        <div class="row">
       
          <div class="col">
          <label class="form-label">Total Area</label>
            <input type="text" class="form-control" placeholder="Eample: 7500" aria-label="Last name"/>
          </div>

          <div class="col">
              <label class="form-label">Area Unit</label>
                <select class="form-select">
                  <option selected>Area Unit</option>
                  <option>...</option>
                </select>
          </div>
        </div>


        <div class="row">
       
        <div class="col">
        <label class="form-label">No of BHK</label>
          <input type="text" class="form-control" placeholder="Select no of BHK" aria-label="Last name"/>
        </div>

        <div class="col">
            <label class="form-label">No of Floor</label>
              <select class="form-select">
                <option selected>Select no of Floor</option>
                <option>...</option>
              </select>
        </div>
      </div>



      <div class="row">
       
          <div class="col">
          <label class="form-label">Attached</label>
            <input type="text" class="form-control" placeholder="Select Attached" aria-label="Last name"/>
          </div>

          <div class="col">
              <label class="form-label">Western Toilet</label>
                <select class="form-select">
                  <option selected>Select Western Toilet</option>
                  <option>...</option>
                </select>
          </div>
        </div>


        <div class="row">
       
          <div class="col">
          <label class="form-label">Furnished</label>
            <input type="text" class="form-control" placeholder="Select Furnished" aria-label="Last name"/>
          </div>

          <div class="col">
              <label class="form-label">Car Parking</label>
                <select class="form-select">
                  <option selected>Select Car parking</option>
                  <option>...</option>
                </select>
          </div>
        </div>


        <div class="row">
       
          <div class="col">
          <label class="form-label">Lift</label>
            <input type="text" class="form-control" placeholder="Select Lift" aria-label="Last name"/>
          </div>

          <div class="col">
              <label class="form-label">Electricity</label>
                <select class="form-select">
                  <option selected>Example:3 phase</option>
                  <option>...</option>
                </select>
          </div>
        </div>


        <div class="row">
       
          <div class="col">
          <label class="form-label">Facing</label>
            <input type="text" class="form-control" placeholder="Select Facing" aria-label="Last name"/>
          </div>

          
        </div>

<div className='form-btn-container'>

          <div className='form-btn form-btn-cancel rounded-pill'>
            Previous
          </div>

          <div className='form-btn form-btn-save rounded-pill'>
            Save & Continue
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default formbox