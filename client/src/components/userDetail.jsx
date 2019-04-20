    
import React from 'react';
import { Query} from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GET_USERR_BY_ID from '../graphql/userr';
import Table from '@material-ui/core/Table';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Navbar from './navbar';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const UserDetail = ({ match }) => (

  <div className="app">

    <header>
      <Navbar/>

    </header>

    <Query

      query={GET_USERR_BY_ID}

      variables={{

        id: match.params.id,

      }}

    >

      {({ data, loading }) => {

        if (loading) {

          return 'Loading...';

        }

        const { user } = data;
console.log(user)
        return (

<Wrapper>
          <h2 className="section-title"> Informations relatives à : {user.userName} {user.lastName}</h2>

          <div>
            
<Paper >
      <Table >
        <TableHead>
          <TableRow>
            <CustomTableCell>Nom d'utilisateur</CustomTableCell>
            <CustomTableCell align="right">Nom de famille</CustomTableCell>
            <CustomTableCell align="right">Email</CustomTableCell>
            <CustomTableCell align="right">Date de naissance</CustomTableCell>
            <CustomTableCell align="right">Authorisation</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
 
              <TableRow className={user.userName} >
                <CustomTableCell component="th" scope="row">{user.userName}</CustomTableCell>
                <CustomTableCell align="right">{user.lastName}</CustomTableCell>
                <CustomTableCell align="right">{user.email}</CustomTableCell>
                <CustomTableCell align="right">{user.date}</CustomTableCell>
                <CustomTableCell align="right">{user.permission}</CustomTableCell>

              </TableRow>
    
        </TableBody>
      </Table>
    </Paper>


          </div>
          </Wrapper>

        );

      }}

    </Query>

  </div>
);

UserDetail.propTypes = {

  match: PropTypes.object.isRequired,

};

export default UserDetail;
const Wrapper = styled.div`
h2{
  text-align: center;
    font-size: -webkit-xxx-large;
    display: block;
    padding: 30px;}
`;