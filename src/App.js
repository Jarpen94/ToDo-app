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

  render() {
    return (
      <div className="App">
        <div>
          <TextField hintText="Dodaj" />
          <RaisedButton label="Dodaj" primary={true} />
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