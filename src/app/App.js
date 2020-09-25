import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from '../modules/home'
function App(props) {
  return (
    <div className="App">
      <Switch>        
        <Route exact path="/home" component={Home} />        
      </Switch>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    
  }
}
export default connect(mapStateToProps, {})(App);
