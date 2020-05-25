import React from 'react';
import './App.css';
import Nabvarr from './components/HeaderBar';
import Formulary from './components/Formulary';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nabvarr />
        <Formulary />
      </div>
    );
  }
}

export default App;
