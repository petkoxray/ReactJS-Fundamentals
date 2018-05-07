import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
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

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDeletePerson = this.handleDeletePerson.bind(this);
    this.togglePersons = this.togglePersons.bind(this);
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
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          changed={this.handleNameChange}
          deleted={this.handleDeletePerson}
         />
      )
    }

    return (
      <div className="App">
        <Cockpit toggle={this.togglePersons} showPersons={this.state.showPersons} />
        {persons}
      </div>
    );
  }
}

export default App;
