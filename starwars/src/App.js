import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList'
import PageButton from './components/PageButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: '',
      prevPage: '',
      id: Date.now()
    };
  }

  
  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  nextPageToggle = () => {
    console.log("nextPageToggle fired");
    console.log(this.state.nextPage);
    this.getCharacters(this.state.nextPage);
  }

  prevPageToggle = () => {
    if(this.state.prevPage != null){
    this.getCharacters(this.state.prevPage);
    } else{
      alert("There are no more previous pages.");
    }
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data);
        this.setState({prevPage: data.previous})
        this.setState({nextPage: data.next});
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };



  render() {
    // (this.state.starwarsChars.forEach(item => console.log(item.name)));
    // console.log(this.state.starwarsChars);
    console.log(this.state.nextPage);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <PageButton 
        nextPageToggle={this.nextPageToggle} 
        prevPageToggle={this.prevPageToggle}
        />
        <CharacterList key = {this.state.id} starwarsChars = {this.state.starwarsChars} />
      </div>
      
    );
  }
}

export default App;
