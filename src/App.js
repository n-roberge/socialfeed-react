import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts.jsx';


// Form to create post with name and post
// Feed with name, post, and like and dislike

function App() {
  
  const [entries, setEntries] = useState([{name : 'Nick Roberge', post: 'This is a test post.'}, {name : 'Esma Eroglu', post: 'This is yet another test post.'} ]);

  return (
    <div>
      <DisplayPosts parentEntries={entries} />
    </div>
  );
}

export default App;
