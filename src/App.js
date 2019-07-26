import React from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(responseData => this.setState({ monsters: responseData }));
  }

  handleSearchTextChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {

    const { monsters, searchField } = this.state;

    return (
      <div>
        <SearchBox placeholder='Search Monsters' searchTerm={this.state.searchField} handleChange={this.handleSearchTextChange} />
        <CardList cards={monsters.filter((monster) => monster.name.toLowerCase().includes(searchField))} />
      </div>
    );
  }
}

export default App;
