import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
display: flex;
justify-content: center;
margin-right: 90px;
margin-left: 90px;
border-radius: 10px;
padding: 50px 50px 50px 50px;
border: 2px solid black;
margin-bottom: 40px;
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.0)),
 url("https://images.unsplash.com/photo-1616829412338-b4dce88dfc54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
`

function ContactLogo() {
    return (
        <>
            <Logo>
                <img src='/Images/4.png' alt='Contact Logo' />
            </Logo>
        </>
      );
}

export default ContactLogo;