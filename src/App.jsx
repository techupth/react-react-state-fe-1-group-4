import { useState } from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState('Greeting Message');

  const thaiGreetingClick = () => {
    setGreeting('สวัสดี!');
  };

  const englishGreetingClick = () => {
    setGreeting('Hi!');
  };

  const chineseGreetingClick = () => {
    setGreeting('你好!');
  };


  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={thaiGreetingClick}>สวัสดี!</button>
        <button onClick={englishGreetingClick}> Hi!</button>
        <button onClick={chineseGreetingClick}>你好!</button>
      </div>
    </div>
  );
}

export default App;
