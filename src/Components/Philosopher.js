import React from 'react'
import '../Styling/Philosopher.css'

class Philosopher extends React.Component { 

  

   render() {
        return (
        <div className="philosopher-individual-div">
            <form onSubmit={this.props.deletePhilosopher}>
            <h3 id={this.props.philosopher.id}>{this.props.philosopher.name}</h3>
            <img src={this.props.philosopher.image} className="philosopher-portrait" alt="portrait of philosopher" ></img>
            <button id={this.props.philosopher.id} type="submit">x</button>
            </form>
                
        </div>
    )}
}

export default Philosopher

