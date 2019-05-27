import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import pc from '../Scraper/Pc portable';
import Media from './Media';

const styles = theme => ({
  card: {
      maxWidth: 400,
    minWidth: 400,
    //padding: 15,
    border: "1px solid #000; border-width: 1px 1px 1px",
    marginBottom: 20,
    marginLeft: 31,
    width: 'calc(100% / 6)',
    display: 'inline-block', 
    verticalAlign: 'top',
    minHeight: 425
  
  },
  media: {
    height: 10,
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'auto'
  },
  actions: {
    display: 'flex',
    zIndex: 999999
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});


class PC extends Component {
  state = { expanded: 0 , toggle : false };

  handleExpandClick = (index) => {
    this.setState(state => ({ expanded: index, toggle : !state.toggle }));
  };

  render() {
    const { classes } = this.props;
    
    return (
      <div >
      <h1  style={{textAlign:'center'}} > Vous pouvez trouver les prix les moins chers en tunisie en 1 click </h1>
      {pc.map((beinX, index) => (
        <Card className={classes.card} >
        
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
              {/*{beinX.$title}*/}
              </Avatar>
            }
  
            title={beinX.$title}
            subheader= {beinX.$prix1}
          />
         <Media image={beinX.$image} image1={beinX.$image1} image2={beinX.$image2} prix1={beinX.$prix1} prix2={beinX.$prix2} title={beinX.$title}/>
  
          <CardActions className={classes.actions} disableActionSpacing>
            <Typography component="p">
              <h3>Voir la description: </h3> 
            </Typography>
  
          <CardContent
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded === index && this.state.toggle,
              })}
              onClick={() => this.handleExpandClick(index)}
              aria-expanded={this.state.expanded === index && this.state.toggle}
              aria-label="Show more"
            >
            <ExpandMoreIcon />
          </CardContent>
          </CardActions>
  
          <Collapse in={this.state.expanded === index && this.state.toggle} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph><h3>Description: </h3> {beinX.$description}</Typography>
            </CardContent>
          </Collapse>
  
        </Card>
      ))}
      </div>
    );
  }
}

PC.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PC);
