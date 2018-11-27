import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';


class App extends Component {

  state = {
    tasks: [
      { taskName: 'Sprzątanie', completed: false },
      { taskName: 'Odkurzanie', completed: false }
    ],
    taskName: ''
  }

  handleChange = (event) => {
    this.setState({ taskName: event.target.value })
  }


  handleClick = () => {
    let tasks = this.state.tasks
    tasks.push({ taskName: this.state.taskName, completed: false })
    this.setState({tasks})
  }

  render() {
    return (
      <div className="App">
        <div>
          <TextField hintText="Zadanie"
            onChange={this.handleChange}
          />
          <RaisedButton label="Dodaj" primary={true}
            onClick={this.handleClick}
          />
        </div>
        {this.state.tasks.map((task, index) => (
          <div>{task.taskName} </div>
        )
        )}



      </div>
    )
  }
}
export default App