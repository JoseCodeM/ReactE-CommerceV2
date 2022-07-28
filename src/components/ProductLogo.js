import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
margin-right: 90px;
margin-left: 90px;
border-radius: 10px;
padding: 50px 50px 50px 50px;
border: 2px solid black;
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.0)),
 url("https://images.unsplash.com/photo-1590172272056-bce4543eac1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1784&q=80");
`

function ProductLogo() {
    return ( 
        <>
        <Container>
            <img src='/Images/3.png' alt="productLogo" />
        </Container>
        </>
     );
}

export default ProductLogo;