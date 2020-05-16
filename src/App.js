import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";
import Todolist from './components/Todolist';
import Todoinput from './components/Todoinput';

class App extends Component {
  state ={
    items : [{id:1, title: "Wake up"}, {id:2, title: "make breakfast"}],
    id: uuidv4(),
    item : '',
    editItem : false
  };

  handleChange = (e) => {
    console.log('handle change');
  }
  handleSubmit = (e) => {
    console.log('handleSubmit');
  }
  clearList = () => {
    console.log('clear list');
  }
  handleDelete = (id) => {
    console.log (`handle delete ${id}`);
  }
  handleEdit = (id) => {
    console.log (`handle edit ${id}`);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto mt-5">
            <h1 className="text-center">Todo List</h1>
            <Todoinput item={this.state.item} handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
            <Todolist items={this.state.items} clearList={this.clearList} 
            handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
          </div>        
        </div>  
      </div>
    )
  }
}


export default App;
