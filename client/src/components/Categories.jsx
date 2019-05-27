import React, { Component } from "react";
import styled from "styled-components";
import { Mutation, Query } from "react-apollo";
import GET_CATEGORIES from "../graphql/getCategories";
import REMOVE_CATEGORIES from '../graphql/removeCategories';
import CircularDeterminate from "./loading";
import Navprivate from "./privateNavbar/Navprivate";
import DeleteIcon from '@material-ui/icons/Delete';


const handleDelete = removeCategories => {
const confirmDelete = window.confirm("vous êtes sur le point de supprimer une catégorie ! ");
    if (confirmDelete) {
      removeCategories().then(({data}) => {
        console.log(data);
      }
      );
    }
  };


class Categories extends Component {
  constructor(props){
    super(props);
  } 
  render () {
    return (
      <Query query= {GET_CATEGORIES}>
      {
        ({loading, error, data})=> {
          if (loading) return(<CircularDeterminate/> );
          if (error) return (<h4> Error ... </h4>);
          
          const categoryView = data.categories.map(category => (
            <tr>
            
              <td><div className="info">{category.titre}</div></td>
              
              <Mutation mutation={REMOVE_CATEGORIES} variables={{id : category.id}} refetchQueries={[{ query: GET_CATEGORIES}]}>
                {
                  removeCategories => 
                  (
                    <td> 
                      <div className="button" aria-label="Add" onClick={()=>handleDelete(removeCategories)}  >
                        <DeleteIcon/>
                      </div>
                    </td>
                    
                  )
                }
              </Mutation>
          </tr>
          ))

          return (
            <Wrapper>
              <Navprivate />
                <br></br>
                <h2> Liste des Catégories </h2>
                  <table>
                    <thead>
                      <tr>
                        <th>Nom de la catégorie</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categoryView}
                    </tbody>
                  </table>
            </Wrapper>
          );
        }
      }
      </Query>
    );
  }
}

export default Categories;

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
    text-align: center;
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
