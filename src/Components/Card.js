import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
import styled from 'styled-components';
import _map from "lodash/map";
import ButtonStyle from './ButtonStyle';

const Wrapper = styled.div`
 .card{
    width:452px;
    height:698px;
    margin-right:24px;
    border:1px solid black;
    .card-body{
        .card-subtitle{
            margin-top:48px;
            font-size:40px;
            text-align:center;
            font-weight:700;
        }
       .card-text{
        color:#4B4F54;
        font-size:20px;
        display:flex;
        text-align:center;
        justify-content:center;
        padding:20px 83px;
       }
       .btn{
        display:flex;
        text-align:center;
        justify-content:center;
        margin-bth:20px;
       }
        .card-title{
            width:452px !important;
            height:244px;
            background:#008743;
         }
    }
 }
 .container-div{
    width:100%;
    padding:50px;
    background:#F4F4F4;
    display:flex;
    align-items:center;
    justify-content:center;

 }
 .header-div{
    text-align:center;
    font-size:50px;
    font-weight:700;
    color:#4B4F54;
    margin-bottom:28px;
 }
 .card-div-container{
    display:flex;
  
 }

 
`;

const card = ({cardData}) => {
  return (
    <Wrapper>
        <div className='container-div'>
            <div>
            <div className='header-div'>RECENT BLOGS</div>
            <div className='card-div-container'>
            {_map(cardData,(items,key)=>(<Card>
                <CardBody>
                <CardTitle></CardTitle>
                <CardSubtitle>
                    <div>{items.cardTitle}</div> 
                    <div>{items.cardTitle}</div> 
                    <div>{items.cardTitle}</div>
                </CardSubtitle>
                <CardText >{items.desc}</CardText>
                <div className='btn'>
                <ButtonStyle btnName="READ MORE" background="#ffffff" color="#4B4F54" border="3px solid #4B4F54" fontSize="14px"/>
                </div>
                </CardBody>
            </Card>))}
            </div>
            
            </div>
           </div>
           
    </Wrapper>
  )
}

export default card