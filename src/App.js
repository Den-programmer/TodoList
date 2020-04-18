import React from 'react';
import TodoContainer from './components/todo/todoContainer';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <TodoContainer store={this.props.store}/>
      </div>
    );
  }
}

export default App;
