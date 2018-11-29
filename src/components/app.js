import React from 'react';
import {Route} from 'react-router-dom';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import About from './about';
import Hidden from './hidden';
import Home from './home';
import Nav from './nav';
import Public from './public';
import signIn from './sign_in';
import signUp from './sign_up';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route exact path = "/" component = {Home}/>
            <Route path = "/about" component = {About}/>
            <Route path = "/hidden" component = {Hidden}/>
            <Route path = "/public" component = {Public}/>
            <Route path = "/signIn" component = {signIn}/>
            <Route path = "/signUp" component = {signUp}/>
        </div>
    </div>
);

export default App;
