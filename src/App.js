import React, {useState} from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 178, date: '11-22-2021'}])

  return (
    <div>

      <h3>SocialFeed</h3>
      
      <CreatePost parentEntries={entries}/>

    </div>
  );
}

export default App;
