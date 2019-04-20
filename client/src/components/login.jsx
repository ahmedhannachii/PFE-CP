import React from "react";
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Mutation, compose, graphql } from "react-apollo";
import gql from "graphql-tag";

const loginMutation = gql`
  mutation Login($input: UserInput) {
    login(input: $input) {
      token
      email
      permission
    }
  }
`;
const updateNetworkStatus = gql`
mutation updateNetworkStatus($isConnected: bool){
  updateNetworkStatus(isConnected: $isConnected) @client{
    isConnected
  }
}
`

class Login extends React.Component {
  state = { login: "", password: "" };
  handleChange = e => {
    // console.log("e.target.name", e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = fn => async (e) => {

    e.preventDefault(); // enlever le comportement par defaut du navigateur
    // console.log("this.state", this.state);
    const config = {variables:{"input": {"email": this.state.login,"password": this.state.password}}}
    const data = await fn(config);
     console.log("****",data);
    const jwToken = data.data.login.token ;
    const permission = data.data.login.permission;
    if(jwToken && permission ==='USER'){
       window.alert("Bienvenue sur le comparateur oyez");
      await this.props.updateNetworkStatus(true);
      this.props.history.push('/Accueil')
      localStorage.setItem("jwToken", jwToken);
    } else {
      window.alert("Admin Logged");
      await this.props.updateNetworkStatus(true);
      this.props.history.push('/Home')
      localStorage.setItem("jwToken", jwToken);
    }
  };
  render() {
    const { login, password } = this.state;
    return (
      <Wrapper>
      <Mutation mutation={loginMutation}>
        {(loginfunction, { error, loading }) =>
         ( <form onSubmit={this.handleSubmit(loginfunction)}>
            <h6> Oyez </h6>
            <div>
              <input
                name="login"
                type="text"
                value={login}
                onChange={this.handleChange}
                placeholder="Email"
              />
            </div>
            <div>
        
              <input
                name="password"
                type="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Password"
              />
              
            </div>
            
           
            <button  type="submit" Link to="/">
            <span> Connection </span>
            </button>
            <div className="forgot">
              <a  href="/register"> Register </a>
            </div>
          </form>
          
          )
        }
        
      </Mutation>
      </Wrapper>
    );
  }
}


export default compose (withRouter, graphql(updateNetworkStatus, {
  props: ({ mutate }) => ({
    updateNetworkStatus: (input) => mutate({
      variables: {
        isConnected: input,
      },
    }),
  }),
}),)(Login);
const Wrapper = styled.div`
height: 100%;
  width:100%;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

form {
  width: 435px;
    height: 500px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    background: #e0e0e0ad;
    transform: translate(-50%,-50%);
    font-size: 22px;
    font-family: 'Poppins',sans-serif;
    padding: 10px;
    text-align: center;
    text-transform: capitalize;
    box-shadow: 0px 0px 6px 2px #0006;
}
.nom {
width:130px;
}
h6 {
  margin: 0px;
}

input {
padding: 20px;
width: 300px;
border: 1px solid #0003;
border-radius: 3px;
margin: 10px 0px;
}
::-moz-placeholder { 
  color: grey;
  font-family: 'Poppins', sans-serif;

}
button {
  font-family: 'Poppins',sans-serif;
font-size: 15px;
margin-top: 80px;
line-height: 10px;
color: white;
-webkit-letter-spacing: 0.025em;
-moz-letter-spacing: 0.025em;
-ms-letter-spacing: 0.025em;
letter-spacing: 0.025em;
background: black;
padding: 19px 0;
cursor: pointer;
border: 0;
border-radius: 2px;
min-width: 220px;
overflow: hidden;
position: absolute;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%,-50%);
-ms-transform: translate(-50%,-50%);
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
  background: black;
  color:white;
  transition: left 0.8s cubic-bezier(0.86, 0, 0.07, 1) 0.2s;
  z-index: 0;
}

button:before {
  background: white;
  color:black;
  z-index: 5;
  transition: left 1s cubic-bezier(0.86, 0, 0.07, 1);
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
  color:black
}
button span {
  display: block;
  position: relative;
  z-index: 10;
}

.forgot{
  font-size: 12px;
    position: absolute;
    bottom: 102px;
    text-align: center;
    margin: 0px -14px;
    width: 100%;

}`