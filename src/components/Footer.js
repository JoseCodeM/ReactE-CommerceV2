import React from 'react';
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'
// import '../Pages/Styling/App.css'
import styled from 'styled-components';

const Container = styled.footer`
display:flex;
display: flex;
justify-content: space-evenly;
list-style-type: none;
margin-top: 20px;
`

function Footer() {
    return ( 
    <>
        <Container>
            <li><a href='https://instagram.com'><FaInstagramSquare size={42}/></a></li>
            <li><a href='https://twitter.com'><FaTwitterSquare size={42}/></a></li>
            <li><a href='https://facebook.com'><FaFacebookSquare size={42}/></a></li>
        </Container>
    </>
    );
}

export default Footer;