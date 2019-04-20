import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import React from 'react';

import NavbarLanding from './NavbarLanding';


function Landing(props) {
  return (

    <Wrapper>
      <header>
        <NavbarLanding />
      </header>
    </Wrapper>
  );
}
export default withRouter(Landing);
const Wrapper = styled.div`
height: 100%;
  width:100%;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  button {
    font-family: 'Poppins',sans-serif;
    font-size: 15px;
    margin-top: 80px;
    line-height: 10px;
    color: white;
    letter-spacing: 0.025em;
    background: #080955;
    padding: 19px 0;
    cursor: pointer;
    border: 0;
    border-radius: 2px;
    min-width: 220px;
    overflow: hidden;
    position: absolute;
    top: 60%;
    left: 34%;
    transform: translate(-50%,-50%);
    text-transform: uppercase;
}

button:after,
button:before {
  padding: 18px 0 11px;
    content: '';
    position: absolute;
    top: 0;
    left: calc(-100% - 30px);
    height: calc(100% - 29px);
    width: calc(100% + 20px);
    color: #fff;
    border-radius: 2px;
    transform: skew(-25deg);
}
button:after {
  background: #fcd869;
    color: #f91360;
    transition: left 0.8s cubic-bezier(0.86,0,0.07,1) 0.2s;
    z-index: 0;
}

button:before {
  background: #f91360;
    color: white;
    z-index: 5;
    transition: left 1s cubic-bezier(0.86,0,0.07,1);
}
button:hover:after {
  left: calc(0% - 10px);
  transition: left 0.8s cubic-bezier(0.86, 0, 0.07, 1);
}
button:hover:before {
  left: calc(0% - 10px);
  transition: left 1s cubic-bezier(0.86, 0, 0.07, 1);
}
button:hover{
  color: white;
}
button span {
  display: block;
  position: relative;
  z-index: 10;
}
`
