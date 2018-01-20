import React, { Component } from 'react';
import TodoItems from './TodoItems';
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(event) {
    event.preventDefault();

    const todos = this.state.todos.slice(0);
    todos.unshift({
      body: this.inputElement.value,
      date: new Date()
    });

    this.setState({
      todos: todos
    });
  }

  removeTodo(todo) {
    const todos = this.state.todos.filter(el => el !== todo);

    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addTodo}>
            <input ref={(input) => this.inputElement = input}
              placeholder="enter task">
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default TodoList;