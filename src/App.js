import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    input: 'Hello'
  }

  updateInput = (e) => {
    this.setState({
      input: e.target.value,
    })
  }
  submit = () => {
    console.log(this.text.value)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          {/* pass toggle as a prop to Welcom component */}
          <Welcome text='Welcome to React Props' />

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/* controlled input */}
        <input type='text' onChange={this.updateInput} value={this.state.input} />

        {/* uncontrolled input */}
        <input type='text' ref={(input) => this.text = input} />

        <button onClick={this.submit}>Show Value</button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {

    // object destructuring
    const { text } = this.props

    // toggle value changes 
    return (
      <h1 className="App-title">{text}</h1>
    )
  }
}

export default App;
