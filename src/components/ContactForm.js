import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: grid;
grid-template-columns: auto auto;
`

const Item = styled.div`
justify-self: center;
`

const Form = styled.div`
display: flex;
background: rgba(0, 0, 0, 0.7);
width: 800px;
height: auto;
margin: auto;
color: white;
border-radius: 15px;
`

function ContactForm() {
    return ( 
        <>
            <Container>
                <Item>
                    <img src='/Images/6.png'  alt='Fill Out Logo'/>
                </Item>

                <Form>
                <div className="details-area">
                    <label for="fname">First Name:</label>
                    <input type="text" id="fname" placeholder="Enter First name..." required/>
<br/>
                    <label for="lname">Last Name:</label>
                    <input type="text" id="lname" placeholder="Enter Last name..." required/>

                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter Email..." required/>

                    <label for="msg" required>Message:</label>
                    <textarea id="msg"></textarea>
                    

                    <button type="submit">Submit</button>
                </div>
                </Form>
            </Container>
        </>
     );
}

export default ContactForm;