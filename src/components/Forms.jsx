import React from 'react'
import './Forms.css'

 

function Forms() {
  

  return (
    <>
      <div className='contact-heading'>
    <h1>Contact</h1>
  </div>


    <div className="parent" id='contact'>
<div className="child1">
  <img src="https://i.postimg.cc/rF1CMLXG/5754850-2975414.jpg" alt="" />
</div>
<div className="child2">
<div class="form">



     <h1>Fill out the form</h1>

      <div class="input-container">
        <input id="name" class="input" type="text" placeholder="Name" />
      
      </div>

      <div class="input-container">
        <input id="email" class="input" type="mail" placeholder="Email" />
      </div>

      <div class="input-container">
          
        <input class="input" type="phone" placeholder="Number" />
  
      </div>

      <div className='message-box'>
        <textarea name="" id="" cols="30" rows="4" placeholder='Message'></textarea>
      </div>

      <div className='dropdown'>
      <select>
        <option value="">Select the service you want !</option>
        <option value="A">DOCTOR'S PLACEMENT SERVICE</option>
        <option value="B">PLACEMENT SERVICE</option>
        <option value="C">DIGITAL MARKETING</option>
        <option value="D">WEB DEVELOPMENT</option>

      </select>
      </div>
    



      
      {/* <div className="input-container">
      <input type="file" name="myfile"/>
      </div> */}

      <button type="submit" class="submit">Send</button>


    </div>
</div>
    </div>

    </>
    
  )
}

export default Forms