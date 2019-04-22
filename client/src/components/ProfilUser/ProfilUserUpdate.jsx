import React, { Component } from 'react';
import { Mutation } from 'react-apollo';


import {USER_UPDATE}  from '../../graphql/usermutation';
import me from "../../graphql/user";

import UserForm from './UserForm';

class ProfilUserUpdate extends Component {
  render() { 
  const { user } = this.props;
  
  return (
    <>
      <Mutation mutation={USER_UPDATE} refetchQueries={[{ query: me}]}>
        {
          (register, {data})=> (
            <UserForm user={user} onSubmit={register} />
          )
        }
      </Mutation>
    </>
  )
  }
}
        
export default ProfilUserUpdate;