import React from 'react';
import AddItem from '../components/add-item';
import Chatlist from '../components/Chatlist';

function App() {
  return (
    <div className="wrapper">
      <h1 className="h1">Чат на <span>React</span> + <span className="redux">Redux</span></h1>

      <ul>
        <Chatlist posts={[
          { username: 'Nick', text: 'Привет!', date: new Date().toLocaleString() },
          { username: 'Anna', text: 'Пока!', date: new Date().toLocaleString() },
          { username: 'Mixon', text: 'Проверка!', date: new Date().toLocaleString() },
        ]} />
      </ul>
      <AddItem />
    </div>
  );
}

export default App;
