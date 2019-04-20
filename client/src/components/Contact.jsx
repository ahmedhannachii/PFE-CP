import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import Home from '@material-ui/icons/Home'
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styled from "styled-components";
import logout from '../img/logout.png';
import Button from '@material-ui/core/Button';
import oyez from '../img/oyez.gif'

const updateNetworkStatus = gql`
mutation updateNetworkStatus($isConnected: bool){
  updateNetworkStatus(isConnected: $isConnected) @client{
    isConnected
  }
}
`
class Contact extends Component {
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
  <h2> Contactez Nous !</h2> <hr/>
   <h3> Les meilleures façons de communiquer avec nous sont:</h3>
   <h4> *Email: <a href="contact@oyez.tn ">contact@oyez.tn</a> </h4> <br/>
   <h4> *Numéro: 53963161 </h4>
   <div>
<form  action='hannachiahmed77@gmail.com' method='post' className='form'>
<h6> *Formulaire </h6>
<div>
<input label="nom" margin="normal" name="userName" placeholder="Nom" />
</div> <br/>
<div>
<input label="email" margin="normal" name="email" placeholder="Email" type="email" />
</div> <br/>
<div>
<input label="Sujet" margin="normal" name="Sujet" placeholder="Sujet"/>
</div> <br/>
<div>
<textarea  label="message" type='text' placeholder='votre message' ></textarea>
</div> <br/>
<Button type="submit"  color="primary"  className="button" > Envoyer Message </Button>
</form>
</div>
</div>
<center><img style={{width:'300px', height:'150px' }} src={oyez} title='Oyez' alt="oyez" /></center>
      </Wrapper>
    );
  }
}
Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(Contact);
const Wrapper = styled.div`
button{
  top: 5px;
    left: -20px;
    align-content: center;
    align-self: auto;
    color: #fff;
    background-color: black;
}

form {
width: 1111px;
height: 650px;
margin: 0 auto;
position: absolute;
top: 128%;
left: 50%;
background : white;
transform: translate(-50%,-50%);
font-size: 22px;
font-family: 'Poppins', sans-serif;
padding: 10px;
text-align: center;
text-transform: capitalize;
box-shadow: 0px 0px 6px 2px #0006;
}
textarea{
  padding: 20px;
  width: 300px;
  border: 1px solid #0003;
  border-radius: 3px;
  margin: 10px 0px;
}
input {
  padding: 20px;
  width: 300px;
  border: 1px solid #0003;
  border-radius: 3px;
  margin: 10px 0px;
  }

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
