import React from 'react';
import Todo from './components/todo/todo';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Todo store={this.props.store}/>
      </div>
    );
  }
}

export default App;
