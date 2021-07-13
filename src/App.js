import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField:''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }))
  }

  onSearchChange = event => {
    this.setState({searchField: event.target.value});
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1> Monster </h1>
        <div class='box'>
        <SearchBox onSearchChange={this.onSearchChange}/>
        </div>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App
