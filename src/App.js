import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  // test communication
  useEffect( ()=>{
    async function testAPI(){
      let queryString = "?test=hello&topK=10"
      let url = "/api" + queryString
      let request = await fetch(url);
      let data = await request.json();
      console.log(data);
    }

    testAPI();
  }, []);

  return (
    <div className="App">
      <div className="container">
        Hello
      </div>
    </div>
  );
}

export default App;
