import React,{useState} from 'react';
import styled from 'styled-components';
import _map from "lodash/map";

import ButtonStyle from './ButtonStyle';

const Wrapper = styled.div`
margin-top:50px;
 .header-div{
    color:#008743;
    font-size:50px;
    margin-bottom:16px;
 }
 .box-container{
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
 .box-container:last-child{
    margin-right:0px;
 }
 .product-desc{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:28px;
 }
 .active-box-container{
    
    background:blue;
    opacity:0.5;
 }
 .header-items{
    font-size:50px;
 }
 @media (min-width: 1400px) and (max-width: 1600px) {
    .box-container{
        width:500px;
        height:500px;
        
    }
`;

const OurProducts = ({data}) => {
    const[activeItems, setActiveItems] = useState(2);

    const onHandleClick = (id) =>{
        switch(id){
            case 1:
                setActiveItems(1);
                break;
            case 2:
                setActiveItems(2);
                break; 
            case 3:
                setActiveItems(3);
                break;        
        }
    }
  return (
    <Wrapper>
        <div className='header-div'>OURPRODUCTS</div>
        <div className='product-desc'> 
           {_map(data,(items,key)=>(<div className={activeItems == items.id ?"active-box-container box-container" :'box-container'}onClick={()=>onHandleClick(items.id)}>
            <div>
            <div className='header-items'>{items.name}</div>
            {activeItems == items.id && (<div><div>Kensite provides a robust range of portable site accommodation to local authorities and major construction companies as well as welfare units to key events.</div>
            <ButtonStyle btnName="GET A QUOTE"/>
            </div>)}
            </div>
            </div>))}
            </div> 
    </Wrapper>

  )
}

export default OurProducts