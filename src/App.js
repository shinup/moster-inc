import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-box';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    };    
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }
  handleChange =(e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const { monsters, searchField }=this.state; 
    const fitlered = monsters.filter((monster)=> 
        monster.name.toLowerCase().includes(searchField)
      );
    return (
      <div className="App">
      <h1>Monster inc</h1>
      <SearchBox 
        placeholder='search' 
        handleChange={this.handleChange} 
      />
        <CardList name="Shinu" monsters={fitlered}></CardList>
      </div>
    );
  }
}

export default App;
