import React, { Component } from 'react';
import Cities from './components/Cities';
import City from './components/City';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Cities}/>
          <Route path='/city_*' component={City} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
