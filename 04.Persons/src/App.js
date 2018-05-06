import React, { Component } from 'react';
import Person from './components/Person/Person';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { id: 1, name: 'Pesho', age: 28 },
        { id: 2, name: 'Gosho', age: 20 },
        { id: 3, name: 'Misho', age: 31 },
        { id: 4, name: 'Sasho', age: 42 }
      ],
      showPersons: true
    }
  }

  togglePersons() {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  handleDeletePerson(personId) {
    let persons = this.state.persons.filter(p => p.id !== personId);

    this.setState({
      persons: persons
    });
  }

  handleNameChange(event, personId) {
    let personIndex = this.state.persons.findIndex((p) => p.id === personId);
    let person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  render() {
    const btnStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p) => {
            return <Person
              name={p.name}
              age={p.age}
              key={p.id}
              changed={(event) => this.handleNameChange(event, p.id)}
              deleted={() => this.handleDeletePerson(p.id)} />
          })}
        </div>
      )

      btnStyle.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <button style={btnStyle} onClick={this.togglePersons.bind(this)}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
