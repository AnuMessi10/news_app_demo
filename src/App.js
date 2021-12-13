import React from 'react';
import Sidebar from './Components/Sidebar';
import Newsfeed from './Components/Newsfeed'
import './App.css';

function App() {

  return (
    <div className="App">
      <Sidebar />
      <Newsfeed />
    </div>
  );
}

export default App;
