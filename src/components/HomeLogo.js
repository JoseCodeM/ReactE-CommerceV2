import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 50px 50px 50px;
  border: 2px solid black;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
    url("https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    margin-right: 90px;
    margin-left: 90px;
    border-radius: 10px;
`

function HomeLogo() {
    return ( 
        <Container>
            <img src="/Images/TogemonUpgraded.png" alt="logo" />
        </Container>
     );
}

export default HomeLogo;