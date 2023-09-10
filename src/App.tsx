import React from 'react';
import logo from './logo.svg';
import './App.css';
import gif from './vibe-rabbit.gif'

import MyComponent, { MyComponentProps } from './MyComponent';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-text">
          Hi! I'm Karen!
        </p>
        <img src={gif} alt="my fav gif"></img>
        {/* <MyComponent myName='karen' /> */}
      </header>
    </div>
  );
}

export default App;
