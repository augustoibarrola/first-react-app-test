import React from 'react'
import '../Styling/Subheader.css'

class Philosopher extends React.Component { 


   render() {
        return (
        <div>
            <h3>{this.props.philosopher.name}</h3>
        </div>

    )}
}

export default Philosopher