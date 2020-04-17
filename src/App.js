import React from 'react';
import Todo from './components/todo/todo';

class App extends React.Component {
  constructor(props) {
    super();
    props.store = this.store;
  }
  render() {
    return (
      <div className="App">
        <Todo store={this.store}/>
      </div>
    );
  }
}

export default App;
