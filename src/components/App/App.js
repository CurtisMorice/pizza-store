import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import Select from '../Select/Select';
// import Customer from '../Customer/Customer';

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})
class App extends Component {
  render() {
    return (
      <div className="App">
      <pre>{JSON.stringify(this.props.reduxStore)}</pre>
        {/* The value of the reducer will be what state is */}
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img src="images/pizza_photo.png" alt=""/>
        <p>Pizza is great.</p>
        <Select />
     
        
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
   
        {/* <Router>
        <div>
          <Route exact path='/customer' component={Customer} />
          <Link to ='/customer'> Customer Page </Link>
          </div>
        </Router> */}