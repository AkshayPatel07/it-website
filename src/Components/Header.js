import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import _map from "lodash/map";

const Wrappper = styled.div`
 padding: 29px 92px 28px 180px;
background:#fffff;
display:flex;
align-items: center;
justify-content: center;
overflow:hidden;
ul{
    list-style:none;
    display:flex;
    align-items: center;
    justify-content: center;
    
}
li{
    margin-left:48px;
    color:#4B4F54;
    font-size:20px;
    font-weight: 600;
    cursor: pointer;
}
l1:last-child{
  margin-left:0px;
}
.contact-div{
    color:#008743;
    font-size:24px;
}
a{
  text-decoration:none; 
  color:#4B4F54 !important;
}
@media (min-width: 320px) and (max-width: 996px) {
  padding:29px 0px 28px 0px !important;
    flex-direction: column !important;
  
  li{
      font-size:14px !important; 
      margin-left:8px !important;
  }
}
@media (min-width: 996px) and (max-width: 1200px) {
  padding: 29px 10px 28px 10px;
  li{
      font-size:13px !important; 
      margin-left:8px !important;
  }
}

@media (min-width: 320px) and (max-width: 1600px) {
    // padding: 29px 10px 28px 10px;
    li{
        font-size:16px; 
        margin-left:10px;
    }
  }
`;

const Header = () => {
    const header_item = [
        { id: 1, path: "/", title: "KENSITE" },
        { id: 2, path: "/product", title: "PRODUCTS" },
        {
          id: 3,
          path: "/productoverview", title: "CONSTRUCTION"
        },
        { id: 4, path: "/sector", title: "SECTORS" },
        { id: 5, path: "/product", title: "SERVICES" },
        {
          id: 6,
          path: "/aboutus", title: "ABOUT US"
        },
        {
            id: 7,
            path: "/productoverview", title: "NEWS"
          },
          {
            id: 8,
            path: "/productoverview", title: "CONTACT"
          },
          {
              id: 9,
              path: "/productoverview", title: "T: 01942 878747"
            },
      ];
  return (
    <Wrappper>
        {_map(header_item,(items,keys)=>(<ul><li><Link to={items.path}>{items.title}</Link></li></ul>))}
    </Wrappper>
  )
}

export default Header;