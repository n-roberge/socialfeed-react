import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts.jsx';
import CreatePost from './Components/CreatePost/CreatePost.jsx';
import Post from './Components/Post/Post.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';

// Form to create post with name and post
// Feed with name, post, and like and dislike

function App() {

  const [entries, setEntries] = useState([{name : 'Nick Roberge', post: 'This is a test post.'}, {name : 'Esma Eroglu', post: 'This is yet another test post.'} ]);

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div>
      <NavBar/>
      <CreatePost addNewPost = {addNewEntry}/>
      {/* <DisplayPosts parentEntries = {entries} /> */}
      <Post parentEntries = {entries}/>
    </div>
  );
}

export default App;
