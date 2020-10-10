import React from 'react'
import Subheader from '../Components/Subheader'
import '../Styling/Header.css'

class Header extends React.Component {
    
    

    philosophers = () => {
    return this.props.philList.map(function (philosopher) {return <Subheader name={philosopher} />} )
    } 

    render() {
        return(
            <div>
                <h1 className="dorky-header"> Welcome to A Dorky React Practice Project </h1>
                <h2 className="phil-list-header">List of Philosophers: </h2>
                {this.philosophers()}
             </div>
        )
    }
}

export default Header 

