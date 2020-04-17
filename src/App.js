import React from 'react';
import store from './BLL/redux'

class App extends React.Component {
  constructor() {
    super();
    this.store._state = state;
  }
  render() {
    return (
      <div className="App">
        Тут какая-то разметка!
      </div>
    );
  }
}

export default App;
