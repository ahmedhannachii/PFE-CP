import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import PersonAdd from '@material-ui/icons/PersonAdd';
import Home from '@material-ui/icons/Home'
import gql from 'graphql-tag';
import styled from "styled-components";
import AddCategory from '../addCategory';
import ImageAvatars from "../avatar";
import Modal from 'react-awesome-modal';

const updateNetworkStatus = gql`
mutation updateNetworkStatus($isConnected: bool){
  updateNetworkStatus(isConnected: $isConnected) @client{
    isConnected
  }
}
`

class ButtonAppBar extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
  }

  handleClose = () => {
    console.log('test');
    const { open } = this.state;
    this.setState({
      open: !open
    })
  }

render () {
  const { open } = this.state;
  return (
    <Wrapper>
      <header>
        <div className="filler one">
          <nav id="navbar">
            <h4 className="oyez">Oyez</h4>
            <ul>
              <li>
                <Home className="pa" fontSize="large"  onClick={() => this.props.history.push("/home")}/>
              </li>
              <li>
                <PersonAdd className="pa" fontSize="large"  onClick= {this.handleClose} />
              </li>
              <li>
                <ImageAvatars />
              </li>
            </ul>
          </nav>
        </div>
          <Modal visible={open} width="400" height="600" effect="fadeInUp" onClickAway={this.handleClose}>
            <h3 className="employe">Ajouter une catégorie </h3>
            <AddCategory close={this.handleClose} />
          </Modal>
        <div class="filler two" />
      </header>
    </Wrapper>
  );
}
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(ButtonAppBar);
const Wrapper = styled.div`
.employe{
  font-size: 15px;
font-family: 'Poppins', sans-serif;
padding: 3px;
text-align: center;
text-transform: capitalize;
}
.pa{
  display:block;
}
.logo2{
  animation-direction: alternate-reverse;
    animation-duration: initial;
    width: 80px;
    margin: 0 auto;
    display: block;
}
.logo {
width: 60px;
padding: 10px;
margin: 0 auto;
display: inline-block;
vertical-align: middle;
cursor : pointer;

}
h4{
  width: 50px;
padding: 20px;
margin: 0 auto;
display: inline-block;
vertical-align: middle;
font-family: 'Poppins',sans-serif;

}
@supports (position: sticky) {
  body {
    padding-top: 0;
  } */

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
cursor : pointer;


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
  ---------------------- */
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
