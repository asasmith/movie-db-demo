import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // set state
  state = {
    toggle: true,
  }

  // function to toggle state
  // used in onClick
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          {/* pass toggle as a prop to Welcom component */}
          <Welcome text='Welcome to React Props' toggle= {this.state.toggle} />

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        { this.state.toggle && 
          <p>this should show/hide</p>
        }

        <button onClick={this.toggle}>toggle</button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {

    // object destructuring
    const { text, toggle } = this.props

    // toggle value changes 
    console.log(toggle)
    return (
      <h1 className="App-title">{text}</h1>
    )
  }
}

export default App;
