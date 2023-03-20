import React from 'react';
import styled from 'styled-components';
import ButtonStyle from './ButtonStyle';

const Wrapper = styled.div`
background:#F4F4F4;
margin-bottom:50px;
  width:100%;
  height:325px;
  text-align:center;
  display: flex;
    align-items: center;
    justify-content: center;
//   padding:50px 0px;
  
  .heading-div{
    color:#4B4F54;
    font-weight:700;
    font-size:50px;
    padding:0px 458px;
    margin-bottom:16px;
  }
  .sub-heading{
    padding:0px 646px;
    margin-bottom:28px;
  }
  @media (min-width: 1400px) and (max-width: 1600px) {
    .sub-heading{
        padding:0px 519px;
      }
  }
`;

const MiddleContainer = ({heading, subHeading}) => {
  return (
    <Wrapper>
        <div>
        <div className='heading-div'>{heading}</div>
        <div className='sub-heading'>{subHeading}</div>
        <ButtonStyle btnName = "FIND OUT MORE" border="3px solid #4B4F54" color="#4B4F54" background="#ffffff"/>
        </div>
    </Wrapper>
  )
}

export default MiddleContainer