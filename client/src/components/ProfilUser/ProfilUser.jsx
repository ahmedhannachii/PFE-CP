import { graphql, Query } from "react-apollo";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import ProfilUserInterface from './ProfilUserInterface';
import me from "../../graphql/user";
import styled from "styled-components";
import Modal from 'react-awesome-modal';
import ProfilUserUpdate from './ProfilUserUpdate';
import Create from '@material-ui/icons/Create';
import user from '../../graphql/user';
const styles = theme => ({
  card: {
    maxWidth: 400,
    minWidth:350,
    padding: 20,
    border: "1px solid #000; border-width: 1px 0px 0px",
    minHeight:605,
    maxHeight: 600,
    position: 'fixed'
  },
  media: {
    margin: "0 auto",
    height: 300,
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: blue[500],
    fontSize: 3,
  },
  allitems: {
    textAlign: "left",
    display: "align-block",
    marginRight: 15,
    paddingTop: 20,
  },
  text: {
    fontSize: 20,
    textDecorationStyle: "solid"
  }
});


class ProfilUser extends Component {


  constructor(props){
    super(props);
    this.state = {open: false, selectedUser: null} 
  } 
  handleClose = () => {
    console.log('tyest');
    const { open } = this.state;
    this.setState({
      open: !open
    })
  }
  updateUser =  async (user)=>{ console.log('emp', user);
    await this.setState({ selectedUser: user}); 
    this.setState({ open : true});
  }

  render() {

    return (
      <div>
        <Wrapper>
        <header>
        <ProfilUserInterface/>
        </header>
          <br></br>
        <br></br>
        <Query query={me}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading</h4>;
          if (error) return <h4>Error</h4>;
          const {open} = this.state;
          return (
            
            <div>
              <h2> Welcome {data.me.userName}  </h2>
      <table>
      <p>Editer le profil</p>

        <tbody>
         <td> <Create className="update" onClick={()=> this.updateUser(user)}> Update</Create></td>
         <tr> <th>Nom d'utilisateur</th> <td><div className="info">{data.me.userName}</div></td></tr> 
         <tr> <th>Nom de famille</th> <td><div className="info">{data.me.lastName}</div></td> </tr>
         <tr> <th>Email</th> <td><div className="info">{data.me.email}</div></td></tr>
         <tr> <th>Date de naissance</th>  <td> <div className="info">{data.me.date}</div></td></tr>

       </tbody>  
      </table>
      
      <Modal visible={open} width="400" height="600" effect="fadeInUp" onClickAway={this.handleClose}>
      <h3 className="employe">Modifier Profil </h3>
        <ProfilUserUpdate close={this.handleClose} user={data.me}/> 
      </Modal>
      </div> 
     )
        }}
      </Query>
  </Wrapper>
      </div>
     

    );
  }
}
ProfilUser.propTypes = {
  classes: PropTypes.object.isRequired
};

export default graphql(me)(withStyles(styles)(ProfilUser));

const Wrapper = styled.div`
.update{
  display: inline-block;
}
  height: auto;
  width:100%;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
  

    tr {
      border: 1px solid #ccc;
    }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    /*
	Label the data
	*/
    td:nth-of-type(1):before {
      content: "First Name";
    }
    td:nth-of-type(2):before {
      content: "Last Name";
    }
    td:nth-of-type(3):before {
      content: "Job Title";
    }
    td:nth-of-type(4):before {
      content: "Favorite Color";
    }
    td:nth-of-type(5):before {
      content: "Wars of Trek?";
    }
    td:nth-of-type(6):before {
      content: "Secret Alias";
    }
    td:nth-of-type(7):before {
      content: "Date of Birth";
    }
    td:nth-of-type(8):before {
      content: "Dream Vacation City";
    }
    td:nth-of-type(9):before {
      content: "GPA";
    }
    td:nth-of-type(10):before {
      content: "Arbitrary Data";
    }
  }
  table {
    width: 1000px;
    margin: 0 auto;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    padding: 20px;
    text-align: center;
    text-transform: capitalize;
    cursor : pointer;
  }
  /* Zebra striping */
  tr:nth-of-type(odd) {
    background: #eee;
  }
  th {
    background: #333;
    color: white;
    font-weight: 200;
    font-size: 18px;
    
  }
  td,
  th {
    padding: 0;
    border: 1px solid #ccc;
    text-align: center;
  }
  h2 {
    font-family: "Poppins",sans-serif;
    text-align: left;
  }
  h3 {
    text-align: center;
  }
  .info {
    padding: 10px;
    text-align: center;
    &:nth-child(even) {
      background: #d8d8d8;
    }
  }
  table {
    tr {
      th {
        padding: 10px;
      }
    }
  }
`;
