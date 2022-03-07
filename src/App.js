import React, {useState, useEffect} from "react";

function App() {

  const [entries, setEntries] = useState([{username: 'Matty P', date: '03/07/2022'}])

  return (
    <div className="App">
      <header>
          <ph>SocialFeed</ph>
          {entries.map((entry)=>{
            return (
              <pd>
                <pc>{entry.name}</pc>
                <pc>{entry.post}</pc>
              </pd>
            )
          })}
        </header>
    </div>
  );
}

export default App;
