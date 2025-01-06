import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [inverted, setInverted] = useState(false);

  const toggleBackground = () => {
    setInverted(!inverted);
  };

  return (
    <div> 
        <button onClick={toggleBackground}>ClickMe</button>
      <h1 className={inverted ? 'inverted' : ''}>Good Morning</h1>
      
      <style jsx>{`
        h1 {
          background-color: white;
          color: black;
          transition: background-color 0.5s, color 0.5s;
        }
        .inverted {
          background-color: black;
          color: white;
        }
      `}</style>
    </div>
  );
}


export default App;