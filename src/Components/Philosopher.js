import React from 'react'
import '../Styling/Philosopher.css'

class Philosopher extends React.Component { 


   render() {
        return (
        <div>
            <h3>{this.props.philosopher.name}</h3>
            <img src={this.props.philosopher.image} className="philosopher-portrait" alt="philosopher portrait"></img>
        </div>

    )}
}

export default Philosopher