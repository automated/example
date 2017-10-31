import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ padding: 50 }}>
        <Button label="Hello" />
      </div>
    );
  }
}

export default App;
