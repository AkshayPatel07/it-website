import React from 'react';
import styled from 'styled-components';

import HeroSection from '../Components/HeroSection';

const Wrapper = styled.div`
  width:100%;
  height:928px;s
`;

function ProductOverView() {
  return (
    <Wrapper>
      
      <HeroSection 
         heading="OFFICES" 
         subHeader="Kensite provides a robust range of portable site accommodation to local authorities and major construction companies as well as welfare units to key events."
         getQuote
      />
       
    </Wrapper>
  )
}

export default ProductOverView