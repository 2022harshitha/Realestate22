import React from 'react'
import './Formbox2.css'
import FormNav from '../formNav/FormNav'

function formbox() {
  return (
    <div className='form-container'>
      <div className='form-title'> ADD NEW PROPERTY </div>
      <FormNav/>
      <div className='form-fields-container rounded-4'>

        <div class="row">
          <div class="col">
              <label class="form-label">Name</label>
                <select class="form-select">
                  <option selected>Owner</option>
                  <option>...</option>
                </select>
          </div>
          <div class="col">
              <label class="form-label">Mobile</label>
                <select class="form-select">
                  <option selected>Enter Mobile Number</option>
               <option>...</option>
                </select>
          </div> 
        </div>


        <div class="row">
       
          <div class="col">
          <label class="form-label">Posted By</label>
            <input type="text" class="form-control" placeholder="Posted By" aria-label="Last name"/>
          </div>

          <div class="col">
              <label class="form-label">Scale Type</label>
                <select class="form-select">
                  <option selected>Scale Type</option>
                  <option>...</option>
                </select>
          </div>
        </div>


        <div class="row">
       
        <div class="col">
        <label class="form-label">Featured Package</label>
          <input type="text" class="form-control" placeholder="Please select" aria-label="Last name"/>
        </div>

        <div class="col">
            <label class="form-label">PPD Package</label>
              <select class="form-select">
                <option selected>Please Select</option>
                <option>...</option>
              </select>
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