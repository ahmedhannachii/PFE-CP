import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import ADD_CATEGORIES from '../graphql/addCategories';
import GET_CATEGORIES from "../graphql/getCategories";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

export class addCategory extends Component {
  constructor(props){
    super(props);
    if(props)
    this.state = {
      titre: ''
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  add = async (addCategories) =>{
    try {
      const result = await addCategories();
      console.log('result', result);
      window.alert('Catégorie ajoutée avec succès');
      this.props.close();
    } catch (error) {
      window.alert('error');
    }
  }
  render() {
    const { titre } = this.state;
    return (
      <Wrapper>
      <Mutation mutation={ADD_CATEGORIES} variables={{CategoriesInput : {titre}}} refetchQueries={[{ query: GET_CATEGORIES}]}>
          {(addCategories)=>(
              <div>
                  <TextField
                      label="Nom de la catégorie"
                      value={titre}
                      onChange={this.handleChange}
                      margin="normal"
                      name ="titre"
                  />
                  <Fab className="button" aria-label="Add" onClick={()=>{this.add(addCategories)}}>
                      <AddIcon />
                  </Fab>
              </div>
          )}
      </Mutation>
    </Wrapper>
    )
  }
}

export default addCategory;


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