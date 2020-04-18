import React from 'react';
import Todo from './components/todo/todo';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    let state = this.props.store._state;
    return (
      <div className="App">
        <Todo state={state}/>
      </div>
    );
  }
}

export default App;
