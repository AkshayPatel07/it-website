import React from 'react';
import styled from 'styled-components';
import ButtonStyle from './ButtonStyle';

import {WorkerImage} from "../design/icons";

const Wrapper = styled.div`
width:100%;
margin-bottom:50px;
.hero-section{
    display:flex;
  }
  .left-container{
    width:45%;
    background: #008743;
    padding:20px;
  }
  .img-div{
    width:100%;
    height:100%;
  }
  .right-container{
  background:#4B4F54;
  width:55%;
  padding:20%;
  }
  .heading-div{
    font-size:50px;
    font-weight:700;
    color:#ffffff;
    margin-top:16px;
  }
  .sub-header{
    font-size:20px;
    font-weight:400;
    color:#ffffff;
    margin-top:28px;
  }
  .btn-container{
    display:flex;
    margin-top:28px;
  }
`;

function HeroSection({heading,subHeader, getQuote, viewOurRange}) {
  return (
    <Wrapper>
    <div className='hero-section' >
        <div className='left-container'>
         
        </div>
        <div className='right-container'>
            <div className='heading-div'>{heading}</div>
            <div className="sub-header">{subHeader}</div>
            <div className='btn-container'>
                {getQuote? <ButtonStyle btnName="GET A QUOTE" width="210px" height="50px" border="3px solid #ffffff" />:viewOurRange?(<> <ButtonStyle btnName="VIEW OUR RANGE" width="210px" height="50px"  marginRight="28px" />
                 <ButtonStyle btnName="GET A QUOTE" width="210px" height="50px" background="#ffffff" color="#008743"/></>):''}
                
            </div>
           
        </div> 
   </div>
   </Wrapper>
  )
}

export default HeroSection