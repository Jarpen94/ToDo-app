import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';
const API_URL = 'https://poniedzialek-e01cf.firebaseio.com/'

class App extends Component {

  state = {
    tasks: [],
    taskName: ''
  }

  handleChange = (event) => {
    this.setState({ taskName: event.target.value })
  }

  componentDidMount() {
    fetch(`${API_URL}/tasks.json`)
      .then(response => response.json())
      .then(data => {
        const array = Object.entries(data);
        const tasksList = array.map(task => task[1])
        
        this.setState({tasks: tasksList})
      })
  }


  handleClick = () => {
    if (this.state.taskName !== '') {
      let tasks = this.state.tasks
      const newTask = { taskName: this.state.taskName, completed: false }
      fetch(`${API_URL}/tasks.json`, {
        method: 'POST',
        body: JSON.stringify(newTask)
      }).then(() => {
        tasks.push(newTask)
        this.setState({ tasks, taskName: '' })
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