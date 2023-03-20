import React from 'react';
import styled from 'styled-components';

import HeroSection from '../Components/HeroSection';

const Wrapper = styled.div`
  width:100%;
  height:928px;
`;

const Sector = () => {
  return (
    <Wrapper>
      
    <HeroSection 
       getQuote
       heading="SECTORS WE WORK IN." 
       subHeader="Kensite provides a robust range of portable site accommodation to local authorities and major construction companies as well as welfare units to key events."
    />
     
  </Wrapper>
  )
}

export default Sector