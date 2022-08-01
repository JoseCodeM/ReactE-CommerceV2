import React, { useEffect, useState } from 'react'
import ProductLogo from '../components/ProductLogo';
import styled from 'styled-components';
import StoreProduct from '../components/StoreProduct';
//axios is responsible for pulling information from DB and displaying as JSON
import axios from 'axios';

const Container = styled.div`
display:flex;
text-align: center;
flex-flow:row wrap;
width:100%;
margin-top:40px
`

function Products() {
//setting our default state to an empty array
  const [product, setProduct] = useState([])

  //async function waiting for our response from our back end
  const fetchProducts = async () => {
    const responseBack = await axios.get("https://dbecomm.herokuapp.com/api/products")

    // we only want the specific data, no mumbo jumbo
    setProduct(responseBack.data)
  }

  // useEffect hook tells our component to do something after our componenet is rendered
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