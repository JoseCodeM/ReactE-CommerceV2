import React, { useEffect, useState } from 'react'
import ProductLogo from '../components/ProductLogo';
import styled from 'styled-components';
import StoreProduct from '../components/StoreProduct';
import axios from 'axios';

const Container = styled.div`
display:flex;
border: 2px solid black;
text-align: center;
flex-wrap:wrap;
`

function Products() {
  const [product, setProduct] = useState([])

  const fetchProducts = async () => {
    const responseBack = await axios.get("http://localhost:3001/api/products")

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