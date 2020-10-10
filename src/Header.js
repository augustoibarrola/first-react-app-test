import React from 'react'
import Subheader from './Subheader'

class Header extends React.Component {

    philosophers = () => {
    return this.props.philList.map(function (philosopher) {return <Subheader name={philosopher} />} )
    } 

    render() {
        return(
            <div>
                <h1> Welcome to A Dorky React Practice Project </h1>
                <h2>List of Philosophers: </h2>
                {this.philosophers()}
             </div>
        )
    }
}

export default Header 

