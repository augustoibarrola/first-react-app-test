import React from 'react';
import './App.css';
import Header from './Header.js'

// const philosophersList = ["Sartre", "Plato", "Socrates", "Simone Weil"]
// !! instead of being outside, philosophersList should be defined INSIDE the App() function

function App() {
  const philosophersList = ["Sartre", "Plato", "Socrates", "Simone Weil"]
  return (
    <div>
         <Header philList={philosophersList}/>
    </div>
  );
}

export default App;

//!!MOST COMPONENTS SHOULD BE WRITTEN AS FUNCTIONS
//!!it's hard on an application for most of it's components to be class-based
//!! Often, the amount of information that setting a class-based function
//!!affords one is overkill for what the function actually DOES. 
//!!Refactor a function into a class-based component only when necssary 