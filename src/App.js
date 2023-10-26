import React, { Component } from 'react';
import LogRocket from 'logrocket';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    LogRocket.init('tsp2pu/med_appoint');


    LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
      name: 'Joahan Gutierrez Alvaro',
      email: 'joahan.alvaro8@gmail.com',
    
      subscriptionType: 'pro'
    });


    LogRocket.identify('HOLA', {
      name: 'Joahan Gutierrez Alvaro',
      email: 'joahan.alvaro8@gmail.com',
    
      subscriptionType: 'pro'
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload joahan gutierrers alvaro. 
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;