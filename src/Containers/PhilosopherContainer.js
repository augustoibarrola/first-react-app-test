import React from 'react'
import Philosopher from '../Components/Philosopher'
import '../Styling/Header.css'

class PhilosopherContainer extends React.Component {

    state = {
        philosophersApi: []
      }
    
    render() {

        let philosophers = () => {
            return this.state.philosophersApi.map(philosopher => { return <Philosopher key={philosopher.name} philosopher={philosopher} /> } )
        } 

        return(
            <div>
                <h1 className="dorky-header"> Welcome to A Dorky React Practice Project </h1>
                <h2 className="phil-list-header">List of Philosophers: </h2>
                <div className="phils-container"></div>
                {philosophers()}
             </div>
        )
    }

    componentDidMount() {
        fetch('http://localhost:3000/philosophers')
        .then(response => response.json())
        .then(philosophers => {
          this.setState({
            philosophersApi: philosophers
          })
        })
      }
}

export default PhilosopherContainer 

