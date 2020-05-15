import React, { Component } from 'react'
import Todolist from './components/Todolist';
import Todoinput from './components/Todoinput';

class App extends Component {
  render() {
    return (
      <div>
        <Todoinput />
        <Todolist />
      </div>
    )
  }
}


export default App;
