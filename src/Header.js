import React from 'react'
import Subheader from './Subheader'

class Header extends React.Component {
    // !!class components also always are instantiated with a 'props' object. `this.props` is always posssible 

    philosophers = () => {
    return this.props.philList.map(function (philosopher) {return <Subheader name={philosopher} />} )
    } 
    // !!always remember to RETURN inside a function block

    render() { //!!render() is REQUIRED in class components. everytime this component is run, render shoots off. It is one of the first fucntions to fire in the components lifecycle. 
        // const philosophers = this.props.philList.map(function (philosopher) {return <Subheader name={philosopher} />})
        // !! the proper place to put this is outside as a class-notation function
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

