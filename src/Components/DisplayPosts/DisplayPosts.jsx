import React, { useState } from 'react';

const DisplayPosts = (props) => {

//create array for the name/post
 const [entries, setEntries] = useState([{name : 'Nick Roberge', post: 'This is a test post.'}]);
    return (  
        <div>
            {props.parentEntries.map((entry) => {
                return (
                <div>
                    <p>{entry.name}</p>
                    <p>{entry.post}</p>
                </div>
                );
            })}
        </div>
    );
}
 
export default DisplayPosts;



 