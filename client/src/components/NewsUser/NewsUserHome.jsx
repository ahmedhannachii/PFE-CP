import { graphql, Query, Mutation } from "react-apollo";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import gql from 'graphql-tag';

import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { blue } from "@material-ui/core/colors";
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from "@material-ui/core/colors";

import news from '../../graphql/NewsQueries';





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





class NewsUserHome extends Component {

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
        <CardContent>
          <Typography > <h3>Oyez vous propose ce nouveau produit:</h3> {news.titre} </Typography>
          <br></br>
          <Typography > <h3>Description: </h3> {news.description} </Typography>
        </CardContent>
      </Card>


    );
  }
}
NewsUserHome.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(NewsUserHome);