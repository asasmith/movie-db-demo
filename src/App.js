import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie'

const movies = [
  {
    id: 1,
    title: 'Avengers',
  },
  {
    id: 2,
    title: 'Avengers Age of Ulton',
  },
  {
    id: 3,
    title: 'Avengers: Infinity War',
  },
]

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}

      </div>
    );
  }
}

export default App;
