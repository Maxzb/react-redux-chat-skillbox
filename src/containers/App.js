import React from 'react';
import AddItem from '../components/add-item';
import Chatlist from '../components/Chatlist';

function App() {
  return (
    <div className="wrapper">
      <h1 className="h1">Чат на <span>React</span> + <span className="redux">Redux</span></h1>

      <ul>
        <Chatlist />
      </ul>
      <AddItem />
    </div>
  );
}

export default App;
