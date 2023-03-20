import React from 'react';
import styled from 'styled-components';

import HeroSection from '../Components/HeroSection';
import MiddleContainer from '../Components/MiddleContainer';
import OurProducts from '../Components/OurProducts';
import WorkIn from 'Components/WorkIn';

const Wrapper = styled.div`
  width:100%;
  height:100%;
 text-align:center;
  font-weight:700;
  .hero-section{
    text-align:left !important;
  }
 
`;

const Home = () => {
  const data = [{id:1,name:'FACILITIES'}, {id:2,name:'OFFICES'}, {id:3,name:'CANTEENS'}];
  const workinData = [
    {id:1,name:'TRANSPORT', description:'The Construction Sector accounts for the largest proportion of Kensite’s customer base.'}, 
    {id:2,name:'CONSTRUCTIONOFFICES',description:'The Construction Sector accounts for the largest proportion of Kensite’s customer base.'},
     {id:3,name:'TRANSPOR',description:'The Construction Sector accounts for the largest proportion of Kensite’s customer base.'}];
  return (
    <Wrapper>
      
     <div className='hero-section'>
      <HeroSection 
        className="HeroSection"
        viewOurRange
         heading="COMPLETE SITE SOLUTIONS." 
         subHeader="Kensite provides a robust range of portable site accommodation to local authorities and major construction companies as well as welfare units to key events."
      />
      </div> 
      <MiddleContainer 
      heading="ON SITE. ON DEMAND." 
      subHeading="Kensite provides a robust range of portable site accommodation to local authorities and major construction companies as well as welfare units to key events."/>
      <OurProducts data={data}/>
      <WorkIn workinData={workinData}/> 
    </Wrapper>
  )
}

export default Home;