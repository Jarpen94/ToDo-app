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
    if (this.state.taskName !== '') {
      let tasks = this.state.tasks
      const newTask ={taskName: this.state.taskName, completed:false}
      fetch('https://poniedzialek-e01cf.firebaseio.com/tasks.json', {
        method: 'POST',
        body: JSON.stringify(newTask)
      }).then(() => {
        tasks.push(newTask)
        this.setState({tasks, taskName: ''})
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <TextField hintText="Zadanie"
            value={this.state.taskName}
            onChange={this.handleChange}
          />
          <RaisedButton label="Dodaj"
            primary={true}
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