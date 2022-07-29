import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
max-width: auto;
margin: 1em auto;
justify-self: center;
`

const Nopal = styled.img`
width:300px;
`

const StoreProduct = ({id, title, description, price, image}) => (

    <ProductContainer>
        <Nopal src={image}/>
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
    </ProductContainer>
)

export default StoreProduct;