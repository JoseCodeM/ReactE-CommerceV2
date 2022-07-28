import React from 'react';
import styled from 'styled-components';
import '../'

const Grid = styled.div`
display: grid;
grid-template-columns: auto 800px;
`

const Logo = styled.div`
display: flex;
justify-content: center;
margin-left: 10px;
`

const BioCont = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
color: rgb(255, 255, 255);
text-align: center;
margin-left: -100px;
margin-right: 90px;
border: 2px solid black;
border-radius: 10px;
background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
  url("https://images.unsplash.com/photo-1519289776718-d7becf12a9f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
`
const Description = styled.div`
font-size: 25px;
`

function AboutUs() {
    return ( 
        <Grid>
        <Logo>
          <img src="Images/2.png" alt="aboutus" />
        </Logo>

        <BioCont>
          <Description>
          Family owned online wholesale/retail nursery that's based in Richmond
          VA, we are dedicated to growing a wide variety of cacti and succulents
          and are constantly adding, developing and creating more products. We
          offer the best quality plants at the best prices possible. After all,
          we've been in the business for years!
          </Description>
        </BioCont>
      </Grid>
     );
}

export default AboutUs;