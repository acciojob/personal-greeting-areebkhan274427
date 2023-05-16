
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [name,setName] = useState('');
  return (
    <div>
        <h1>Enter your name:</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)}></input>
        {
          name ?
          <h1>Hello {name}!</h1>:""
        }
=======
        {/* Do not remove the main div */
        
        }
    </div>
  )
}

export default App
