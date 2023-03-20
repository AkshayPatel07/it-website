import React from 'react';
import styled from 'styled-components';

import {  Input } from 'reactstrap';

const InputStyled = styled(Input)`
  border-radius: 4px;
  position: relative;
  /* border: none; */
  font: 400 14px Poppins;
  color: #000000;
width: 100%;
  max-width: ${({ width }) => width || ""};
  min-width: ${({ minWidth }) => minWidth || ""};
  border: ${({ border }) => border || "none"};
  height: ${({ height }) => height || "48px"};
  margin-bottom: ${({ marginbutton }) => marginbutton || ""};
  background: ${({ background }) => background || "#fffff"};
  outline: none;
  padding-left:20px;

  ::placeholder {
    font-size: ${({ placeHolderFontSize }) => placeHolderFontSize || "16px"};
    color: ${({ placeHolderColor }) => placeHolderColor || "#a5a5a5"};
  }

  :focus {
    outline: none !important;
    box-shadow: none !important;
    border-color: #c2c2c2 !important;
  }
  &.error {
    border: 1px solid #fc2424 !important;
    color: #fc2424;
  }

  &:focus-visible {
    outline: none !important;
    border-color: none !important;
  }

  &:hover {
    border: ${(props) => props.borderOnHover || ""} !important;
  }
  .success {
    color: #000000;
    background: #f1f6f6;
    height: 48px;
    box-shadow: 0px 5px 10px #0000001a;
    border-radius: 4px;
  }

  @media (min-width: 320px) and (max-width: 991px) {
    min-width: 100% !important;
    ::placeholder {
      font-size: 14px;
    }
  }
`;

const InputField = ({type, name, placeholder, onChange, border, background, height, id, onMouseOver, autoFocus, width, borderonhover, placeHolderFontSize, placeHolderColor, minWidth}) => {
  return (
    <InputStyled
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    border={border}
    background={background}
    height={height}
    id={id}
    onMouseOver={onMouseOver}
    autoFocus={autoFocus}
    width={width}
    borderonhover={borderonhover}
    placeHolderFontSize={placeHolderFontSize}
    placeHolderColor={placeHolderColor}
    minWidth={minWidth}
  />
  )
}

export default InputField