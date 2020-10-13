import React from 'react'
import Philosopher from '../Components/Philosopher'
import CreateForm from '../Components/CreateForm.js'
import '../Styling/PhilosopherContainer.css'

class PhilosopherContainer extends React.Component {

    state = {
        philosophersApi: []
      }
      
      render() {
      // ??why do these methods have to be in render?
        let  philosophers = () => {
          return this.state.philosophersApi.map(philosopher => { return <Philosopher key={philosopher.id} philosopher={philosopher} deletePhilosopher={this.deletePhilosopher}/> } )
        } 
        
        let headerHandler = () => {
          console.log("clicked")
        }

        return(
          <div>
            <h1 className="dorky-header" onClick={headerHandler}> Welcome to A Dorky React Practice Project </h1>
            <h2 className="phil-list-header">List of Philosophers: </h2>
            <div className="phils-container">
              {philosophers()}
            </div>
            <CreateForm submitHandler={this.submitHandler} />
          </div>
        )
    }

    componentDidMount() {
      fetch('http://localhost:3000/philosophers/')
      .then(response => response.json())
      .then(philosophers => {
        this.setState({
          philosophersApi: philosophers
        })
      })
    }

  submitHandler = (event) => {{/*!!this gives a synthetic event from the submited Form container*/}
    event.preventDefault() 
    let target = event.target
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({
        name: target[0].value,
        movement: target[1].value,
        image: target[2].value
      })

    }
    fetch('http://localhost:3000/philosophers/', options)
    .then(response => response.json())
    .then(newPhilosopher => {
      let newPhilosophers = [...this.state.philosophersApi, newPhilosopher]
      this.setState({
        philosophersApi: newPhilosophers
      })
    })
  }

  deletePhilosopher = (event) => {
    event.preventDefault()
    let id = event.target[0].id
    let options = {
      method: "DELETE"
    }

    fetch('http://localhost:3000/philosophers/' + id, options)
    .then(response => response.json())
    .then(res => {
      let newList = this.state.philosophersApi.filter(philosophers => philosophers.id!=id)
      this.setState({philosophersApi: newList})
    })
    
  }

}

export default PhilosopherContainer 

