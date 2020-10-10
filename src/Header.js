import React from 'react'
import Subheader from './Subheader'

function Header(props) { //!!functions take in props from their parents by taking them in as arguments. Henhce, `Header(props)`, where `props` represents the properties passed to Header from its parent. The argument in the parenthesis can be named anything – convention says 'props' but it can be named anything
    
    let philosophers = props.philList.map(function (philosopher) {return <Subheader name={philosopher} />})

    return (
        <div>
            <h1> Welcome to A Dorky React Practice Project </h1>
            <h2>List of Philosophers: </h2>
            {philosophers}
        </div>
    )
}

export default Header 

//!!functions do not that a `this` property, so props are called on on their own, and not appended to `this.`