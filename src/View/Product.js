import React,{useState} from 'react'
import styled from 'styled-components';
import _map from "lodash/map";

import HeroSection from '../Components/HeroSection';
import Card from '../Components/Card';



const Wrapper = styled.div`
  width:100%;
  height:100% !important;
  .box-container{
    font-size: 30px;
    font-weight:700;
    padding:0px 35px;
    color:white;
    cursor:pointer;
    width:628px;
    height:628px;
    background:#008743;
    opacity:0.5;
    margin-right:28px;
    display:flex;
    align-items: center;
    justify-content: center;
 }
 .active-box-container{
  opacity:1;
 }
 .container-box{
  margin-bottom:27px;
 }
 .steel-store{
  width:700px;
  height:314px;
  background:#008743;
  display:flex;
  align-items:center;
  justify-content:center;
}
.last-container{
  display:flex;
  display:flex;
  align-items:center;
  justify-content:center;
}
.card-div{
  width:100%;
  background:#F4F4F4;
  display:flex;
  align-items:center;
  justify-content:center;
}
 @media (min-width: 1400px) and (max-width: 1600px) {
  .box-container{
      width:300px;
      height:300px;
      
  }
  
  .container-box{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
  }
  .row{
    display:flex;
    margin-bottom:27px;
  }
`;

function Product() {
  const[active,setActive] = useState(1);
  const[activeEven,setActiveEven] = useState();
  const data = [{id:1,name:'FACILITIES', evenId:2, evenname:'OFFICES' },  {id:3,name:'ECO UNITS', evenId:4, evenname:'MEETING ROOMS'}, {id:5, name:'DRYING ROOMS', evenId:6, evenname:'CANTEENS'}];
  const cardData =[
      {id:1, cardTitle:"BLOG TITLE", desc:"Kensite provides a robust range of portable site accommodation to"},
      {id:1, cardTitle:"BLOG TITLE ", desc:"Kensite provides a robust range of portable site accommodation to"},
      {id:1, cardTitle:"BLOG TITLE", desc:"Kensite provides a robust range of portable site accommodation to"}
  ]

  const onClickHandel = (id) =>{
     switch(id){
      case 1:
        setActive(1);
        break;
      case 2:
        setActive(3);
        break;
      case 3:
        setActive(5);
        break;
     }
  }

  const onClickEventHandel = (id) =>{
    switch(id){
     case 2:
       setActiveEven(2);
       break;
     case 4:
       setActiveEven(4);
       break;
     case 6:
       setActiveEven(6);
       break;
    }
 }
  return (
    <Wrapper>
      
    <HeroSection 
       heading="PRODUCT RANGE" 
       subHeader="Kensite provides a robust range of portable site accommodation to local authorities and major construction companies as well as welfare units to key events."
       getQuote
    />
    <div>
     {_map(data,(items,  key)=>(<div className='container-box'>
     <div className={active == items.id ?'active-box-container box-container' :'box-container'} onClick={()=>onClickHandel(items.id)}>
      {items.name}
      </div>
      <div className={activeEven == items.id ?'active-box-container box-container' :'box-container'} onClick={()=>onClickEventHandel(items.evenId)}>
      {items.evenname}
      </div>
  </div>))}
  
     <Card cardData={cardData}/>
  </div>   
  </Wrapper>
  )
}

export default Product