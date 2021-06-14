import React from 'react';

import './App.css';

function App() {


 const Prompt = () => {
  const userName = prompt ("What's yr name ?", "")
    return userName
  }

  return (
    <div className="App">
      <button onClick={Prompt}>Click me</button>
    </div>
  );
}

export default App;
