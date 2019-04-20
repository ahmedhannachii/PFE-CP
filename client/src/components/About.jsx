import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import Home from '@material-ui/icons/Home'
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styled from "styled-components";
import logout from '../img/logout.png';
import oyez from '../img/oyez.gif'


const updateNetworkStatus = gql`
mutation updateNetworkStatus($isConnected: bool){
  updateNetworkStatus(isConnected: $isConnected) @client{
    isConnected
  }
}
`
class About extends Component {
  render() {
    return (
      <Wrapper>
        <header>
          <div className="filler one">
            <nav className="nav">
              <h4 className="oyez">Oyez</h4>
              <ul>
                <li>
                  <Home className="pa" fontSize="large" onClick={() => this.props.history.push("/Accueil")} />
                </li>
                <li>

                  <Mutation mutation={updateNetworkStatus} variables={{ isConnected: false }} >
                    {
                      (updateNetworkStatus) => (
                        <img style={{ width: '35px', height: '30px', display: 'block' }} src={logout} alt="logout" onClick={() => updateNetworkStatus()}></img>
                      )
                    }
                  </Mutation>
                </li>

              </ul>
            </nav>
          </div>
          <div class="filler two" />
        </header>
        <div>

        <h2>Qui Sommes Nous ?</h2>
        <p>Oyez est une plateforme de comparateur de prix en ligne à travers les sites e-commerce en tunisie, dans plusieurs catégories
          et plusieurs articles référencés par nos soins.</p> <br/>
        <p>Pour acheter moins cher et acheter pas cher, comparer les prix en utilisant ce comparateur
        pour trouver le meilleur rapport qualité prix sur le marché tunisien et pour vous faire gagner du temps et de l'argent.</p>
        <p> S'il y a autre chose, nous pouvons faire mieux. </p>
        <h2>About Oyez :</h2>
        <p>Oyez est une agence technologique experte en commerce connecté.
         Nous mettons en œuvre les solutions innovantes et créatives dont les marques 
         et distributeurs ont besoin pour accélérer la transformation digitale de 
         leurs modèles de business sur le mobile, le web et dans les magasins.</p>
         <h2>Logo :</h2>
         <center><img style={{width:'255px', height:'260px' }} src={oyez} title='Oyez' alt="oyez" /></center>
        </div>
      </Wrapper>
     

    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(About);
const Wrapper = styled.div`
p{
text-align: left;
margin: 0 auto;
display: inline-block;
vertical-align: middle;
font-weight: bold;
letter-spacing: 0.025em;
color: #504444;
font-size: 16px;
line-height: 28px
  
}
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
