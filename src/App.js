import React, {useState} from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";

function App() {

  const [entries] = useState([{name: '', comment: ''}])

  return (
    <div>

      <h3>SocialFeed</h3>

      <CreatePost/>
      
      <DisplayPosts parentEntries={entries}/>

    </div>
  );
}

export default App;
