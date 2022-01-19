import React from 'react';
import styled from "styled-components";

const ButtonElement = styled.button`
background-color: ${(props)=>props.bgColor};
border: none;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
border-radius:${(props)=>props.borderRadius}px
`

function Button(props) {
    return (
        <div style={{textAlign:"center"}}>
          <a target="_blank" href={props.buttonLink}>
           <ButtonElement bgColor={props.backGroundColor} borderRadius={props.borderRadius}>{props.buttonText}</ButtonElement>
          </a>  
        </div>
    );
}

export default Button;