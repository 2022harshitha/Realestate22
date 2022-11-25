import React from 'react'
import './Formbox3.css'
import FormNav from '../formNav/FormNav'

function formbox() {
  return (
    <div className='form-container'>
      <div className='form-title'> ADD NEW PROPERTY </div>
      <FormNav/>
      <div className='form-fields-container rounded-4'>

        <div class="row">
          <div class="col">
              <label class="form-label">Email</label>
                <select class="form-select">
                  <option selected>Email</option>
                  <option>...</option>
                </select>
          </div>
          <div class="col">
              <label class="form-label">City</label>
                <select class="form-select">
                  <option selected>Select City</option>
               <option>...</option>
                </select>
          </div> 
        </div>


        <div class="row">
       
          <div class="col">
          <label class="form-label">Area</label>
            <input type="text" class="form-control" placeholder="Select Area" aria-label="Last name"/>
          </div>

          <div class="col">
              <label class="form-label">pincode</label>
                <select class="form-select">
                  <option selected>Select pincode</option>
                  <option>...</option>
                </select>
          </div>
        </div>


        <div class="row">
       
        <div class="col">
        <label class="form-label">Address</label>
          <input type="text" class="form-control" placeholder="address" aria-label="Last name"/>
        </div>

        <div class="col">
            <label class="form-label">Landmark</label>
              <select class="form-select">
                <option selected>Landmark</option>
                <option>...</option>
              </select>
        </div>
      </div>

      <div class="row">
       
        <div class="col">
        <label class="form-label">Latitude</label>
          <input type="text" class="form-control" placeholder="latitude" aria-label="Last name"/>
        </div>

        <div class="col">
            <label class="form-label">Longitude</label>
              <select class="form-select">
                <option selected>Longitude</option>
                <option>...</option>
              </select>
        </div>
      </div>

      












<div className='form-btn-container'>

          <div className='form-btn form-btn-cancel rounded-pill'>
            Previous
          </div>

          <div className='form-btn form-btn-save rounded-pill'>
            Add Property
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default formbox