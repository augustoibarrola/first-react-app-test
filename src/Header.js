import React from 'react'

function Header(props) { //!!functions take in props from their parents by taking them in as arguments. Henhce, `Header(props)`, where `props` represents the properties passed to Header from its parent. The argument in the parenthesis can be named anything – convention says 'props' but it can be named anything
    return (
    <h1> Welcome to Your First App {props.name}! </h1>
    )
}

export default Header 

//!!functions do not that a `this` property, so props are called on on their own, and not appended to `this.`