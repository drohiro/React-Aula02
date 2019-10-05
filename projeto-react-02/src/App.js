import React from 'react';
import './App.css';
import Comp1 from './components/Component1'
import State from './components/ComponentState'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path='/state' component={State}></Route>
          <Route path='*' component={Comp1} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
