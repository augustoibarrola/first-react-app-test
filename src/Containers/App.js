import React from 'react';
import '../Styling/App.css';
import Header from './Header.js'


function App() {
  const philosophersList = ["Sartre", "Plato", "Socrates", "Simone Weil"]
  return (
    <div>
         <Header philList={philosophersList}/>
    </div>
  );
}

export default App;
