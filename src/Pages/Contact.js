import React from 'react'
import "./Styling/Contact.css";

function Contact() {
  return (
    <>
     <div className="Contactlogo">
        <img src="/Images/4.png" alt="logo" />
    </div>


    <div className="contact-container">

      <div className='contact-item1'>
        <img src='/Images/6.png'  alt='fillLogo'/>
      </div>
            
            <div className="Form-area">

                <div className="details-area">
                    <label for="fname">First Name:</label>
                    <input type="text" id="fname" placeholder="Enter First name..."/>
<br/>
                    <label for="lname">Last Name:</label>
                    <input type="text" id="lname" placeholder="Enter Last name..."/>

                    <label for="email">Email:</label>
                    <input type="text" id="email" placeholder="Enter Email..."/>

                    <label for="msg">Message:</label>
                    <textarea id="msg"></textarea>
                    

                    <button type="submit">Submit</button>
                </div>

            </div>
    </div>
    </>
  )
}

export default Contact