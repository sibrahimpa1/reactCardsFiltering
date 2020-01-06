import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list';
import {Search} from './components/search/search';

class App extends Component{
  constructor(){
    super();
    this.state = {
      searchString: '',
      monsters: [
        {
          name: 'Senka',
          id: '1',
          email: 'test@gmail.com'
        },
        {
          name: 'Najla',
          id: '2',
          email: 'test2@gmail.com'
        },
        {
          name: 'Nejra',
          id: '3',
          email: 'test3@gmail.com'
        },
        {
          name: 'Senkic',
          id: '4',
          email: 'test3@gmail.com'
        }
      ]
    }
  }

  _filterMonsters = (searchValue) => {
    this.setState({searchString: searchValue})
  }
  render(){
    // destructuring monsters array
    const { monsters, searchString } = this.state;
    var filteredMonsters = monsters.filter(monster => {
       return monster.name.toLowerCase().includes(searchString.toLowerCase())
     }
    );

    return (
      <div className="App">
        <h1>Monsters</h1>
        <Search filterMonsters={(e) => this._filterMonsters(e)}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
