import React, { useEffect, useState } from 'react'
import ProductLogo from '../components/ProductLogo';
import styled from 'styled-components';
import StoreProduct from '../components/StoreProduct';
import axios from 'axios';

const Container = styled.div`
display:flex;
text-align: center;
flex-flow:row wrap;
width:100%;
margin-top:40px
`

function Products() {
  const [product, setProduct] = useState([])

  const fetchProducts = async () => {
    const responseBack = await axios.get("https://dbecomm.herokuapp.com/api/products")

    // console.log(responseBack.data)
    setProduct(responseBack.data)
  }

  useEffect(() => {

    fetchProducts();

  }, [])

  return (
    <>
    <ProductLogo />
    <Container>
      {product.map((item) => (
        <StoreProduct 
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
        />

      ))}
    </Container>
    </>
  )
}

export default Products