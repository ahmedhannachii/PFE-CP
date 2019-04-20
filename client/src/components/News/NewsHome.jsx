import { graphql, Query, Mutation } from "react-apollo";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import gql from 'graphql-tag';
import DELETE_NEWS from '../../graphql/NewsMutations';
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { blue } from "@material-ui/core/colors";
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from "@material-ui/core/colors";
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import news from '../../graphql/NewsQueries';
import AddCircle from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import NewsQueries from "../../graphql/NewsQueries";



const styles = theme => ({
  card: { 
    maxWidth: 350,
    minWidth: 350,
    padding: 20,
    border: "1px solid #000; border-width: 1px 0px 0px",
    marginBottom: 20,
    marginLeft: 43,
    width: 'calc(100% / 6)',
    display: 'inline-block',
    minHeight: 800,



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
    display: "block",
    marginRight: 15,
    padding: 30,
  },
  text: {
    fontSize: 20,
    textDecorationStyle: "solid"
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 30,
    color: 'grey',
  },
});


const muiTheme = createMuiTheme({
  palette:
  {
    secondary: red,
  },
});


const handleDelete = removeNews => {
  const confirmDelete = window.confirm("vous êtes sur le point de supprimer un article ! ");
  if (confirmDelete) {
    removeNews().then(({ data }) => {
      console.log(data);
    }
    );
  }
};



class NewsHome extends Component {

  render() {
    const { classes, news } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {news.titre}
            </Avatar>
          }
          action={
            <IconButton aria-label="Share">

            </IconButton>
          }
          title={news.titre}
        />

        <CardMedia
          className={classes.media}
          image={news.image}
          title={news.titre}
        />
        <CardContent>
          <Typography component="p" className={classes.text}>
            Prix: {news.prix}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>

          <IconButton aria-label="Delete">
          {
            console.log(news)
          }
            <Mutation mutation={DELETE_NEWS} variables={{ id: news.id }} refetchQueries={[{ query: NewsQueries}]}>
              {removeNews =>
                (
                  <td> <div className="button" aria-label="Add" onClick={() => handleDelete(removeNews)}  >
                    <DeleteIcon />
                  </div>
                  </td>
                )
              }
            </Mutation>
          </IconButton>
{/* 
          <IconButton>
            <AddCircle className={classes.icon} onClick={this.onAdd}>
            </AddCircle>
          </IconButton> */}

          <ExpandMoreIcon />
        </CardActions>
        <CardContent>
          <Typography > Oyez vous propose ce nouveau produit : {news.titre} </Typography>
          <br></br>
          <Typography > Description:  {news.description} </Typography>
        </CardContent>
      </Card>


    );
  }
}
NewsHome.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(NewsHome);