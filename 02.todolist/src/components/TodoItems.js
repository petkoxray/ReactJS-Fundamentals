import React, { Component } from "react";

class TodoItems extends Component {
    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map((todo) => {
            return <li onClick={() => this.props.removeTodo(todo)}
                key={todo.date}>{todo.body}</li>
        });

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};

export default TodoItems;