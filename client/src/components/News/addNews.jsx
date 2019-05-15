import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import {ADD_NEWS} from '../../graphql/NewsMutations';
import news from "../../graphql/NewsQueries";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

class AddNews extends Component {
  constructor(props){
    super(props);
    if(props)
    this.state = {
      titre : '',
      description : '',
      image : '',
      prix: '',
    }
  }

  componentWillReceiveProps(props){
    if (props.news){
        const { news } = props;
     this.setState({...news});
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
        window.alert('Votre article a été ajouté avec succès ');
        this.props.close();
      } catch (error) {
        window.alert('error');
      }
    }
  render() { 
  const { id, titre, description, image, prix } = this.state;
  const variables = id ? { id, titre, description, image, prix } : { titre, description, image, prix };
  const action = id ? ADD_NEWS : ADD_NEWS ;
  return (
          <Wrapper>
              <Mutation mutation={action} variables={{NewsInput : {...variables}}} refetchQueries={[{ query: news}]}>
                  {(addNews)=>(
                      <div>
                          <TextField
                              label="titre"
                              value={titre}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="titre"
                          />
                          <TextField
                              label="description"
                              value={description}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="description"
                          />
                          <TextField
                              label="image"
                              value={image}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="image"
                          />
                          <TextField
                              label="prix"
                              value={prix}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="prix"
                          />
                          <Fab  className="button" aria-label="Add" onClick={()=>{this.add(addNews)}}>
                              <AddIcon />
                          </Fab>
                    </div>
              )}
                </Mutation>
            </Wrapper>
          )
          }
        }
        
export default AddNews;

const Wrapper = styled.div`
button{
  top: 100px;
    left: 170px;
    align-content: center;
    align-self: auto;
    color: #fff;
    background-color: black;
}

`