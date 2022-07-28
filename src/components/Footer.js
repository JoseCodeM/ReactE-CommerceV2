import React from 'react';
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'
import '../Pages/Styling/App.css'

function Footer() {
    return ( 
    <>
        <footer>
            <nav>
                <ul className='footer'>
                    <li><a href='https://instagram.com'><FaInstagramSquare size={42}/></a></li>
                    <li><a href='https://twitter.com'><FaTwitterSquare size={42}/></a></li>
                    <li><a href='https://facebook.com'><FaFacebookSquare size={42}/></a></li>
                </ul>
            </nav>
        </footer>
    </>
    );
}

export default Footer;