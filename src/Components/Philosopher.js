import React from 'react'
import '../Styling/Philosopher.css'

class Philosopher extends React.Component { 


   render() {
        return (
        <div>
            <h3>{this.props.philosopher.name}</h3>
            <img className="philosopher-portrait" src={this.props.philosopher.image} alt="philosopher portrait"></img>
        </div>

    )}
}

export default Philosopher