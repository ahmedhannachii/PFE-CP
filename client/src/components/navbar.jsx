import React from "react";
import { withRouter } from "react-router-dom";
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styled from "styled-components";
import ImageAvatars from "./avatar";
import logout from "../img/logout.png";

const updateNetworkStatus = gql`
mutation updateNetworkStatus($isConnected: bool){
  updateNetworkStatus(isConnected: $isConnected) @client{
    isConnected
  }
}
`

function Navbar(props) {
  return (
    <Wrapper>
      <header>
        <div className="filler one">
          <nav id="navbar">
            <h4 className="oyez">Oyez</h4>
            <ul>
              <li onClick={() => props.history.push("/MyProfile")}>
                Liste des utilisateurs
              </li>
              <li onClick={() => props.history.push("/News")}>
                Liste des articles
              </li>
              <li>
                <ImageAvatars />
              </li>
              <li>

              <Mutation mutation={updateNetworkStatus} variables={{isConnected : false}} >
              {
                (updateNetworkStatus) => (
                  <img style={{width:'35px', height:'30px', display:'block'}}src={logout} alt="logout" onClick={()=> updateNetworkStatus() }></img>
                )
              }
              </Mutation>
              </li>
            </ul>
          </nav>
        </div>

        <div class="filler two" />
      </header>
    </Wrapper>
  );
}

export default withRouter(Navbar);

const Wrapper = styled.div`

.logo {
width: 80px;
padding: 20px;
margin: 0 auto;
display: inline-block;
vertical-align: middle;
}
h4{
  width: 50px;
padding: 20px;
margin: 0 auto;
display: inline-block;
vertical-align: middle;
font-family: 'Poppins',sans-serif

}
*{
  box-sizing: border-box;
}
body {
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  padding-top: 80px;
  height: 1900px;
  /* cursor:pointer; */
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  /* cursor:pointer; */
}

@supports (position: sticky) {
  body {
    padding-top: 0;
  }

  header {
    position: sticky;
  }

}

.navbar-fixed {
  position: fixed;
  top: -3em;
}
nav {
  width: 100%;
  display: flow-root;
  color: black;
  background: #c3bfbf33;
  font-weight: bold;
  letter-spacing: 0.025em;
}

nav ul {
  text-align: center;
margin: 0;
font-size: 15px;
height: 100%;
display: inline-block;
vertical-align: middle;
float: right;
padding: 8px;

}
}

nav ul li {
  display: inline-block;
  padding: 0 3em;
  line-height: 3em;
  font-family: 'Poppins',sans-serif;
  vertical-align: middle;
}

nav ul li:hover {
  background: #D3D3D3	;
}

body {
  background: #0B6AD4;

.filler {
  box-sizing: border-box;
background: whitesmoke;

}

.two {
  height: 3000px;
}
.navbar-fixed {
  position: fixed;
  top: -3em;
}

/*----------------------
  $NAVBAR
    basic navbar styling
  ----------------------*/
nav {
  width: 100%;
  color: #bbb;
  background: #2e2e2e;
  font-weight: bold;
  letter-spacing: 0.025em;
}

nav ul {
  text-align: center;
  margin: 0;
}

nav ul li {
  display: inline-block;
  padding: 0 3em;
  line-height: 3em;
  font-family: 'Poppins',sans-serif
}

nav ul li:hover {
  background: #00939C;
  font-family: 'Poppins',sans-serif
}

body {
  background: #0B6AD4;
  font-family: 'Poppins',sans-serif
}


.filler {
  width: 1px;
  height: 200px;
}

.two {
  height: 3000px;
}
`;
