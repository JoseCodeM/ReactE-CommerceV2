import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
width:33%;
`

const Nopal = styled.img`
width:350px;
height:400px;
border-radius: 10px;
border: 2px solid black;
`
const Title = styled.div`
font-size:25px;
`
const Description = styled.div`
margin: 1em;
`
const Price = styled.div`
color: green;
`
const Button = styled.button`
background: #ff451b;
    font-family: inherit;
    padding: 0.5em 1.0em;
    font-weight: 900;
    font-size: 15px;
    border: 3px solid black;
    border-radius: 0.5em;
    box-shadow: 0.1em 0.1em;
    margin-bottom: 10px;
    margin-top:10px;
`

const StoreProduct = ({id, title, description, price, image}) => (

    <ProductContainer>
        <Nopal src={image}/>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{price}</Price>
        <Button>Add to Cart</Button>
    </ProductContainer>
)

export default StoreProduct;