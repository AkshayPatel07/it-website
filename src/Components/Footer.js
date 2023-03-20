import React from 'react';
import styled from 'styled-components';
import _map from "lodash/map";

import InputField from './InputField';
import {Checkbox , SocialMedia, CommunicationActive} from '../design/icons';
import ButtonStyle from './ButtonStyle';

const Wrapper = styled.div`
    width:100%;
    overflow:hidden;
   .first-footer-area{
    background:#4B4F54;
    height:170px;
    display:flex;
    align-items: center;
    justify-content: center;
   }
   .bottom-footer{ 
    background:#4B4F54;
    padding:50px 318px ;
   }
   .heade-div{
    font-size:14px;
    font-weight: 700;
   }
   ul{
    list-style:none; 
    padding-inline-start:0px;
   }
 li{
     margin-right:91px;
     color:#F4F4F4;
     font-size:14px;
     font-weight: 400;
     margin-bottom:10px;
   }
   .email-div{
     max-width:628px;
   }
   .bottom-footer{
    display:flex;
   }
   .middle-footer-area{
    background:#008743;
    height:251px;
    display:flex;
    padding:50px 318px 50px 318px;
   }
   .news-header{
    color:#FFFFFF;
    font-size:50px;
    font-weight:700;
   }
  
  .agreement-div{
    display:flex;
    color:#ffffff;
    font-size:14px;
    margin-right:68px;
  }
  .agremeent-div-container{
    display:flex;
    margin-top:28px;
    align-items: center;
    justify-content: space-between;
  }
  .check-box{
    margin-right:14px;
  }
  .desc-div{
  
  }
  .social-media-img{
    width:230px;
    height:46px;
  }
  @media (320) and (max-width: 767px){
    .first-footer-area {
      flex-direction: column !important;
    }
  }
  @media (min-width: 320px) and (max-width: 996px) {
    
    li{
      margin-right:0px !important;
    }
    .bottom-footer{
      flex-direction: column;
       align-items: center;
      padding:50px 0px 50px 30px !important;
  }
  .middle-footer-area{
   flex-direction:column;
  }
  .news-header{
    font-size:30px !important;
  }
}
  @media (min-width: 996px) and (max-width: 1200px) {
    li{
      margin-right:60px;
    }
    .bottom-footer{
      padding:50px 0px 50px 30px !important;
  }
  .agreement-div{
    font-size:10px !important;
  }
  .middle-footer-area{
    padding:50px 10px !important;
  }
  .email-div{
    max-width:300px !important;
  }
  .news-header{
    font-size:30px;
       margin-right: 135px;
  }
}
  @media (min-width: 1200px) and (max-width: 1400px) {
    .middle-footer-area{
      padding:50px 20px !important;
    }
    .news-header{
      font-size:40px;
    }
    li{
      margin-right:80px;
    }
    .bottom-footer{
      padding:50px 0px 50px 30px !important;
  }
  .agreement-div{
    font-size:12px !important;
  }
  .news-header{
    font-size:40px;
    margin-right:177px;
  }
  .email-div{
    max-width:500px !important;
  }
  .news-header{
    margin-right:57px;
  }
}
 

  @media (min-width: 1400px) and (max-width: 1600px) {
    .middle-footer-area{
      padding:50px 87px !important;
    }
    .news-header{
      font-size:40px;
      margin-right:177px;
    }
    .bottom-footer{
        padding:50px 87px 50px 87px !important;
    }
    .middle-footer-area{
        // padding:50px 87px 50px 87px !important;
    }
    .social-media-img{
        width:165px;
        height:46px;
      }
  }
`;

const Footer = () => {
    const data = [
     {heading:'PRODUCTS', product1:'Canteens', product2:'Toilets', product3:'Offices', product4:'Washrooms', product5:'Dryrooms', product6:'EcoUnits'},
     {heading:'SECTORS', product1:'Construction', product2:'Transport', product3:'Events', product4:'Public Lettings', product5:'House building'},
     {heading:'SITE SERVICES', product1:'Electrical installation', product2:'Plumbing services', product3:'Water retainment', product4:'Waste management'},
     {heading:'ABOUT', product1:'FAQs'},
     {heading:'NEWS', product1:'Blog'},
     {heading:'CONTACT', product1:'Order process', product2:'Terms & conditions', product3:'Privacy policy'},
     {heading:'FOLLOW US', product1:'Order process',product6:SocialMedia, product2:'Copyright @ 2022 kensite Designed by K2L', product7:"product7"},
    ];
  return (
    <Wrapper>
        <div className='first-footer-area'>    
            <img src={CommunicationActive} alt="socialmedia" className='social-media-img'/>
            <img src={CommunicationActive} alt="socialmedia" className='social-media-img'/>
            <img src={CommunicationActive} alt="socialmedia" className='social-media-img'/>
            <img src={CommunicationActive} alt="socialmedia" className='social-media-img'/>
            <img src={CommunicationActive} alt="socialmedia" className='social-media-img'/>
        </div>
        <div className='middle-footer-area'>
           <div className='news-header'>SUBSCRIBE TO OUR NEWSLETTER</div>
           <div className='email-div'>
           <InputField minWidth="100%" height="73px" placeholder="ENTER EMAIL ADDRESS*"/>
           <div className='agremeent-div-container'>
                <div className='agreement-div'>
                    <div className='check-box'>
                        <img src={Checkbox} alt="checkbox"/>
                    </div>
                    <div className='desc-div'>
                        I agree that Kensite may use my contact information to provide updates about products and services. You can unsubscribe at anytime.
                        </div>
                </div>
                <div>
                    <ButtonStyle btnName="SUBSCRIBE"/>
                </div>
           </div>
           </div>
           ``
        </div>
      <div className='bottom-footer'>
        {_map(data,(items, keys)=>( 
        <ul>
            <li className='heade-div'>{items.heading}</li>
            <li>{items.product1}</li>
            <li>{items.product7 == "product7"? <img src={items.product6} alt="socialmedia" className='social-media-img'/>:''}</li>
            <li>{items.product2}</li>
            <li>{items.product3}</li>
            <li>{items.product4}</li>
            <li>{items.product5}</li>
            
        </ul>
        ))}
      </div>
    </Wrapper>
  )
}

export default Footer