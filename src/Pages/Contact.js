import React from 'react'
import "./Styling/Contact.css";

function Contact() {
  return (
    <>
     <div className="logo">
        <img src="/Images/TogemonUpgraded.png" alt="logo" />
        <h1>Contact us below for all your needs!</h1>
    </div>


    <div className="contact-image">
            
            <div className="Form-area">


                <div className="msg-area">
                <label for="msg">Message:</label>
                <textarea id="msg"></textarea>
                </div>

                <div className="details-area">
                    <label for="fname">First Name:</label>
                    <input type="text" id="fname" placeholder="Enter First name..."/>

                    <label for="lname">Last Name:</label>
                    <input type="text" id="lname" placeholder="Enter Last name..."/>

                    <label for="email">Email:</label>
                    <input type="text" id="email" placeholder="Enter Email..."/>

                    <button type="submit">Submit</button>
                </div>

            </div>
    </div>
    </>
  )
}

export default Contact