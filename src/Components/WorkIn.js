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
 .product-desc{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:28px;
 }
 .header-items{
    font-size:40px;
 }
 .box-container{
    
    padding:0px 35px;
    color:#4B4F54;
    cursor:pointer;
    width:627px;
    height:215px;
    background:#ffffff;
    opacity:0.5;
    margin-right:28px;
    display:flex;
    align-items: center;
    justify-content: center;
 }
 .active-box-container{
    color:#4B4F54;
    opacity:1;
 }
 `;

function WorkIn({workinData,description}) {
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
        <div className='header-div'>SECTORS WE WORK IN</div>
        <div className='product-desc'> 
           {_map(workinData,(items,key)=>(<div className={activeItems == items.id ?"active-box-container box-container" :'box-container'} onClick={()=>onHandleClick(items.id)}>
            <div>
            <div className='header-items'>{items.name}</div>
            <div><div>{items.description}</div>
            <ButtonStyle btnName="FIND OUT MORE" background="#ffffff" border="3px solid #4B4F54" color="#4B4F54" marginTop="28px"/>
            </div>
            </div>
            </div>))}
            </div> 
    </Wrapper>
  )
}

export default WorkIn