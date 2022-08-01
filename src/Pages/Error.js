import React from 'react';
import styled from 'styled-components';

const Orale = styled.div`
align-text: center;
font-size: 100px;
color: red;
margin:300px;
`
function Error() {
  return (
    <Orale>ERROR! PAGE NOT FOUND! GO BACK.</Orale>
  )
};

export default Error;