import React, { Component } from 'react'
import uuid from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";
import Todolist from './components/Todolist';
import Todoinput from './components/Todoinput';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <Todoinput />
            <Todolist />
          </div>

        </div>
        
      </div>
    )
  }
}


export default App;
