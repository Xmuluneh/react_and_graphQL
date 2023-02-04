import './App.css';
import React from 'react';
import { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  onSearchChange = (event) => {
    const searchFiled = event.target.value.toLowerCase;

    this.setState(() => {
      return { searchFiled };
    });
  };

  render() {
    const filterMonster = this.state.monsters.filter((monster) => {
      return monster.name.toLocalLowerCase.includes(this.state.searchFiled);
    });
    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monster'
          onChange={this.onSearchChange}
        />
        <div>
          {filterMonster.map((monster) => {
            return <div key={monster.name}></div>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
