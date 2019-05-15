import React, { Component } from 'react';
import { TextField, Fab } from '@material-ui/core';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';


class UserForm extends Component {
  constructor(props){
    super(props);
    if(props)
    this.state = {
      id: this.props.user.id || '',
      userName : this.props.user.userName || '',
      lastName : this.props.user.lastName || '',
      email : this.props.user.email || '',
      date: this.props.user.date || '',
    }
  }

  handleChange = (event) =>{
    const { target: {  name, value} } = event;
    this.setState({[name]: value});
    }

  render() {
    const { id, userName, lastName ,email, date } = this.state;
    const { onSubmit } = this.props;
    return (
        <Wrapper>
              <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit({
                  variables: {
                    input: {
                      id,
                      userName,
                      lastName,
                      email,
                      date,
                    },
                  },
                });
              }}>
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
                  
                  <Fab className="button" aria-label="Add" type="submit">
                      <AddIcon /> 
                  </Fab>
            </form>
          </Wrapper>
    )
  }
}

export default UserForm;

const Wrapper = styled.div`
button{
  top: 200px;
    left: 175px;
    align-content: center;
    align-self: auto;
    color: #fff;
    background-color: black;
}
`


