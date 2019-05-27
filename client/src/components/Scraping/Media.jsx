import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  brand :{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  price: {
    fontWeight: 'bold'
  },
  mediaBrand:{
    width: '50%',
    height: 100,
    backgroundSize: 'contain',

  },
  media: {
    height: 10,
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'auto'
  },
});

export class Media extends Component {
  state={hovered: false}
  handleHover = () => {
    this.setState({
      hovered: true,
    })
  }

  handleMouseOut = () => {
    this.setState({
      hovered: false,
    })
  }
  render() {
    const { image, image1, image2, prix1, prix2, title, classes } = this.props;
    const { hovered } = this.state;
    return (
      <div onMouseOver={this.handleHover} onMouseOut={this.handleMouseOut}>
        {
          hovered ? (
            <>
              <div className={classes.brand}>
                <CardMedia
                  className={classes.mediaBrand}
                  image={image1}
                  title={title}
                />
                <span  className={classes.price}>
                {prix1}
                </span>
              </div>
              <div className={classes.brand}>
                <CardMedia
                  className={classes.mediaBrand}
                  image={image2}
                  title={title}
                />
                <span className={classes.price}>
                {prix2}
                </span>
              </div>
            </>
          ) : (
            <CardMedia
              className={classes.media}
              image={image}
              title={title}
            />
          )
        }
      </div>
      )
    }
}

export default withStyles(styles)(Media);