import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import UPDATE_USERR  from '../graphql/updateUser';
import ADD_USERR from '../graphql/addUser';

import users from "../graphql/users";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

class AddUserr extends Component {
  constructor(props){
    super(props);
    if(props)
    this.state = {
      id: '',
      userName : '',
      lastName : '',
      email : '',
      date: '',
      permission: '',
    }
  }

  componentWillReceiveProps(props){
    if (props.user){
        const { user } = props;
     this.setState({...user});
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
        window.alert('Votre modification a été effectuée avec succès');
        this.props.close();
      } catch (error) {
        window.alert('error');
      }
    }
  render() { 
  const { id, userName, lastName, email, date,permission } = this.state;
  const variables = { id, userName, lastName, email, date, permission };
  const action = id ? UPDATE_USERR : ADD_USERR ;
  return (
          <Wrapper>
              <Mutation mutation={UPDATE_USERR} variables={{Input : {...variables}}} refetchQueries={[{ query: users}]}>
                  {(updateUser)=>(
                      <div>
                          <TextField
                              label="Nom d'utilisateur"
                              value={userName}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="userName"
                          />
                          <TextField
                              label="Nom de famille"
                              value={lastName}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="lastName"
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
                             <TextField
                              label="Permission"
                              value={permission}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="permission"
                          />
                          <Fab  className="button" aria-label="Add" onClick={()=>{this.add(updateUser)}}>
                              <AddIcon />
                          </Fab>
                    </div>
              )}
                </Mutation>
            </Wrapper>
          )
          }
        }
        
export default AddUserr;

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