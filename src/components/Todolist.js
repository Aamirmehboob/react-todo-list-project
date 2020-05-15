import React, { Component } from 'react'
import Todoitem from './Todoitem';
export default class Todolist extends Component {
    render() {
        return (
            <section>
                <h1>Hello to our Todo List</h1>
                <Todoitem />
            </section>
        )
    }
}
