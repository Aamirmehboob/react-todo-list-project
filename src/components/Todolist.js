import React, { Component } from 'react'
import Todoitem from './Todoitem';
export default class Todolist extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-center text-capitalize">Todo List</h3>
                {items.map(item => { return(
                    <Todoitem key={item.id} title={item.title}
                        handleDelete ={() => handleDelete(item.id)}
                        handleEdit = {() => handleEdit(item.id)} />
                );})}
                <button className="btn btn-block bg-danger text-uppercase text-white mt-5"
                    onClick={clearList}>Clear List</button>
            </ul>
            
        )
    }
}
