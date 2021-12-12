import React, { useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar';
import Newsfeed from './Components/Newsfeed'
import './App.css';

function App() {

  const [items, updateItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((json) => updateItems(json))
  }, [])

  return (
    <div className="App">
      <Sidebar />
      <Newsfeed />
      {/* <ul>
        {items.map(item => 
          <li key={item.id}>
            {item.title}
            {item.body}
          </li>
        )}
      </ul> */}
    </div>
  );
}

export default App;
