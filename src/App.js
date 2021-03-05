import { Component } from 'react';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
      
  }

  handleChange = (e) => (
    this.setState({searchField: e.target.value})
  )
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredFields = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      <div className="App">
        <h1> Monsters Roledex</h1>
        <SearchBox placeholder='search box' handleChange={this.handleChange}/>
        <CardList monsters={filteredFields}/> 
      </div>
    )
  }
}

export default App;
