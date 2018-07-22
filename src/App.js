import React, { Component } from 'react';
import { BrowserRouter, Route/*, Redirect*/ } from 'react-router-dom';
import Cities from './components/Cities';
import City from './components/City';
import PageOne from './components/pages/PageOne';
import PageTwo from './components/pages/PageTwo';
import PageThree from './components/pages/PageThree';
import Pages from './components/pages/';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Cities} />
          <Route path='/city_*' component={City} />
          <Route path='/pages' component={Pages} />
          <Route path='/pageone' component={PageOne} />
          <Route path='/pagetwo' component={PageTwo} />
          <Route path='/pagethree' component={PageThree}/>
          {/* <Redirect from='/*' to='/' /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
