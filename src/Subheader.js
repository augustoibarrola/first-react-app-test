import React from 'react'

function Subheader(props) { //!!always remember to pass in (props) if any are given to this function by it's parent

    return (
        <h3>{props.name}</h3>

    )
}

export default Subheader