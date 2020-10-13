import React from 'react'

class CreateForm extends React.Component {

    render() {
        return (
            <div>
            <h3>This is a Create Form!</h3>
                <form onSubmit={(event) => {this.props.submitHandler(event)}}>
                    <input type="text" placeholder="name"/>
                    <input type="text" placeholder="movement"/>
                    <input type="text" placeholder="image url"/>
                    <input type="submit" value="submit button"/>
                </form>
            </div>
        )
    }

}

export default CreateForm