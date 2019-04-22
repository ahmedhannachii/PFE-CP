import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import Login from './components/login';
import Home from './components/home';
import Profile from './components/profile';
import UserDetail from './components/userDetail';
import PrivateRoute from '../src/components/privateRoute';
import AddUser from './components/addUser';
import Landing from './components/landing';
import Search from './components/Search';
import News from './components/News/News';
import Accueil from './components/Accueil';
import ProfilUser from './components/ProfilUser/ProfilUser';
import NewsUser from './components/NewsUser/NewsUser';
import Recherche from './components/Recherche';
import About from './components/About';
import Contact from './components/Contact';


const connectedQuery = gql`
query connectQuery{
isConnected @client

}
`;

function Routers() {
return (
    <Query query={connectedQuery} >
{
    ({loading,error,data}) => {
        if(loading) return (<h4>loading...</h4>);
        if(error) return (`${error}`);
        const {isConnected} = data;
        console.log('aaa',data)
        return(
<Router>
 <div>
    <Route exact path="/" component={Landing} />
    <Route exact path="/Login" component={Login}/>
    <Route path="/register" component={AddUser}/>
    <Route exact path="/Search" component={Search}/>

    <PrivateRoute exact path="/Home" component={Home} isConnected={isConnected}/>
    <PrivateRoute  path="/MyProfile" component={Profile} isConnected={isConnected}/>
    <PrivateRoute  path="/News" component={News}isConnected={isConnected}/>

    <PrivateRoute exact path="/Accueil" component={Accueil}isConnected={isConnected}/> 
    <PrivateRoute exact path="/Profil" component={ProfilUser}isConnected={isConnected}/> 
    <PrivateRoute exact path="/NouveauProduit" component={NewsUser}isConnected={isConnected}/>
    <PrivateRoute exact path="/Recherche" component={Recherche}isConnected={isConnected}/>
    <PrivateRoute exact path="/About" component={About}isConnected={isConnected}/>
    <PrivateRoute exact path="/Contact" component={Contact}isConnected={isConnected}/>

    <Route exact path="/gallery/:id" render={({match})=> <UserDetail match={match} /> }/>
    
    </div>
</Router>
        )
    }
}
</Query>
);
}
export default Routers;
