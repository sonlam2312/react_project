import React from 'react';
import './App.css';
import{Switch,Route, BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Start from './components/Start';
import Home from './components/home';

export default class PersonList extends React.Component {
  render(){
    return(
      <BrowserRouter>
      <Switch>
          <Route exact path = "/" component = {Start}></Route>
          <Route path = "/login" component = {Login}></Route>
          <Route path = "/home" component = {Home}></Route>
      </Switch>
      </BrowserRouter>
    );
  }
}