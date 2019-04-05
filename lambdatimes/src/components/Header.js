import React from 'react';
import styled from "styled-components"
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderDiv className="header">
      <HeaderSpan className="date">SMARCH 32, 2018</HeaderSpan>
      <HeaderH1>Lambda Times</HeaderH1>
      <TempSpan className="temp">98°</TempSpan>
    </HeaderDiv>
   
  )
}

export default Header