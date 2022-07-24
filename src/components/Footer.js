import React from 'react';
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'
import '../Pages/Styling/App.css'

function Footer() {
    return ( 
    <>
        <footer>
            <nav>
                <ul className='flex-container'>
                    <li><FaInstagramSquare size={42}/></li>
                    <li><FaTwitterSquare size={42}/></li>
                    <li><FaFacebookSquare size={42}/></li>
                </ul>
            </nav>
        </footer>
    </>
    );
}

export default Footer;