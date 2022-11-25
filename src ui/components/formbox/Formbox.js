import React from 'react'
import './Formbox.css'
import FormNav from '../formNav/FormNav'

function formbox() {
  return (
    <div className='form-container'>
      <div className='form-title'> ADD NEW PROPERTY </div>
      <FormNav/>
      <div className='form-fields-container rounded-4'>

        <div class="row">
          <div class="col">
              <label class="form-label">Property Type</label>
                <select class="form-select">
                  <option selected>Select Property Type</option>
                  <option>...</option>
                </select>
          </div>
          <div class="col">
              <label class="form-label">Negotable</label>
                <select class="form-select">
                  <option selected>Select Negotable</option>
                  <option>...</option>
                </select>
          </div> 
        </div>


        <div class="row">
       
          <div class="col">
          <label class="form-label">Price</label>
            <input type="text" class="form-control" placeholder="Eample: 10000" aria-label="Last name"/>
          </div>

          <div class="col">
              <label class="form-label">Property Type</label>
                <select class="form-select">
                  <option selected>Select Property Type</option>
                  <option>...</option>
                </select>
          </div>
        </div>

        <div className='form-btn-container'>

          <div className='form-btn form-btn-cancel rounded-pill'>
            Cancel
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