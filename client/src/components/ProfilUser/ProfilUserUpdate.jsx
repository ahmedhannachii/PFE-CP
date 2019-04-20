import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import {ADD_USER}  from '../../graphql/usermutation';

import me from "../../graphql/user";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

class ProfilUserUpdate extends Component {
  constructor(props){
    super(props);
    if(props)
    this.state = {
      userName : '',
      lastName : '',
      password: '',
      email : '',
      date: '',
      
    }
  }

  componentWillReceiveProps(props){
    if (props.me){
        const { me } = props;
     this.setState({...me});
    }
  }
  handleChange = (event) =>{
  const { target: {  name, value} } = event;
  this.setState({[name]: value});
  }

  add = async (ajout) =>{
      try {
        const result = await ajout();
        console.log('result', result);
        window.alert('ok');
        this.props.close();
      } catch (error) {
        window.alert('error');
      }
    }
  render() { 
  const { userName, lastName, password ,email, date } = this.state;
  const variables = email ? { userName, lastName, password ,email, date } : { userName, lastName, password ,email, date };
  const action = email ? ADD_USER : ADD_USER ;
  return (
          <Wrapper>
              <Mutation mutation={action} variables={{UserLogged : {...variables}}} refetchQueries={[{ query: me}]}>
                  {(register)=>(
                      <div>
                          <TextField
                              label="UserName"
                              value={userName}
                              onChange={this.handleChange}
                              margin="normal" 
                              name ="userName"
                          />
                          <TextField
                              label="LastName"
                              value={lastName}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="lastName"
                          />  
                           <TextField
                              label="Password"
                              value={password}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="password"
                          />
                          <TextField
                              label="Email"
                              value={email}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="email"
                          />
                          <TextField
                              label="Date de naissance"
                              value={date}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="date"
                          />
                          
                          <Fab  className="button" aria-label="Add" onClick={()=>{this.add(register)}}>
                              <AddIcon /> 
                          </Fab>
                    </div>
              )}
                </Mutation>
            </Wrapper>
          )
          }
        }
        
export default ProfilUserUpdate;

const Wrapper = styled.div`
button{
  top: 200px;
    left: -30px;
    align-content: center;
    align-self: auto;
    color: #fff;
    background-color: black;
}

`