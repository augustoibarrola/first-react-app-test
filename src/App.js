import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'

const philosophersList = ["Sartre", "Plato", "Socrates", "Simone Weil"]


function App() {
  return (
    <div>
         <Header philList={philosophersList}/>
    </div>
  );
}

export default App;

//!! components are functions that return JSX elements. 