import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts.jsx';
import CreatePost from './Components/CreatePost/CreatePost.jsx';
import Post from './Components/Post/Post.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import './Components/App.css'

function App() {


  const [entries, setEntries] = useState([{name : 'Nick Roberge', post: 'This is a test post.', date: 'Sat Dec 02 2017 13:49:00 GMT-0600'}, {name : 'Esma Eroglu', post: 'This is yet another test post.', date: 'Tue Feb 01 2022 13:49:00 GMT-0600'} ]);

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div>
      <NavBar/>
      <div className = "border-box">
        <CreatePost addNewPost = {addNewEntry}/>
      </div>
      <div className='border-box'>
        <Post parentEntries = {entries}/>
      </div>
    </div>
  );
}

export default App;
