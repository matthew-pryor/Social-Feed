import React, {useState} from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";

function App() {

  const [entries, setEntries] = useState([{name: 'Matt', comment: 'I really hope this works'}])

  function addNewComment(entry){

    let tempEntries = [...entries, entry];

    setEntries(tempEntries)
  }

  return (
    <div>

      <h1>SocialFeed</h1>

      <h4><CreatePost addNewCommentProperty={addNewComment}/></h4>

      <h4><DisplayPosts parentEntries={entries}/></h4>

    </div>
  );
}

export default App;
