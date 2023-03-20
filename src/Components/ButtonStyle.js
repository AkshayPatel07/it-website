import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

const BtnStyled = styled.button`
  cursor: pointer;
  font-family: Poppins;
  width: ${(props) => props.width || "210px"};
  height: ${(props) => props.height || "50px"};
  color:${(props)=>props.color || "#ffffff"};
  background: ${(props) => props.background || "#008743"};
  boredr-color:${(props) => props.borderColor || "#ffffff"};
  border:${(props)=>props.border || "3px solid #ffffff"};
  font-size:${(props)=>props.fontSize || "20px"};
  font-weight:${(props)=>props.fontWight || "600"};
  margin-right:${(props)=>props.marginRight || ""};
  margin-top:${(props)=>props.marginTop || ""};
  @media (min-width: 1400px) and (max-width: 1600px) {
    .font-size:18px;
  }
`;

const ButtonStyle = ({
  width,
  height,
  background,
  border,
  borderColor,
  btnName,
  color,
  fontWeight,
  fontSize,
  marginRight,
  marginTop
}) => {
  return (
    <BtnStyled
      color={color}
      width={width}
      height={height}
      background={background}
      fontSize={fontSize}
      marginRight={marginRight}
      border={border}
      borderColor={borderColor}
      fontWeight={fontWeight}
      marginTop={marginTop}
    >
     <div>{btnName}</div>
    </BtnStyled>
  );
};

export default ButtonStyle;
