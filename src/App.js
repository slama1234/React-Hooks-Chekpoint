import './App.css';
import React from 'react';
import MovieList from './Components/MovieList';


function App() {

  
  
  return (
    <div className="App">
      { <header  className="App-header">
      <MovieList/>
      
      </header> }
    </div>
  );
}

export default App;