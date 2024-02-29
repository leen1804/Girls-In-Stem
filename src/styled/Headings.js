import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h2`
  
  span {
    height: 2px;
    width: 40px;
    background-color: #06bcd5;
    display: inline-block;
    align-items: center;
    margin: 10px 20px;
  }
`

function Headings({children}) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default Headings