import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import avatar from '../img/avatar.png';
import me from '../graphql/user';
import Modal from 'react-awesome-modal';

class imageAvatars extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
  }

  handleClose = () => {
    console.log('tyest');
    const { open } = this.state;
    this.setState({
      open: !open
    })
  }

  render(){
    const { open } = this.state;
    if (this.props.data.loading) return <p>loading...</p>
  const { userName } = this.props.data.me;
  const {lastName} = this.props.data.me;
  const {email} = this.props.data.me;
  const {date}= this.props.data.me;
    return (
      <div>
      <Grid container justify="center" alignItems="center" onClick={this.handleClose}>
        <Avatar alt="Remy Sharp" src={avatar}/>
         { userName }
      </Grid>
      
      <Modal visible={open} width="450" height="500" effect="fadeInUp" onClickAway={this.handleClose}>
                    <div className="poup">
                    <ul>
                        <p>Mes coordonnées : </p> <hr/>
                        <li>
                        <p>{userName}</p> 
                        </li>
                        <li>
                        <p>Email : {email}</p>
                        </li>
                        <li>
                        <p>LastName : {lastName}</p>
                        </li>
                        <li>
                        <p>Date de naissance  : {date}</p>
                        </li>
                        <p onClick={this.handleClose}>Close X </p>
                    </ul>
                    </div>
      </Modal>
      </div>
    );
  }
}



export default graphql(me)(imageAvatars);
