import React, { useState } from 'react';


const CreatePost = (props) => {

    const [name, setName] = useState();
    const [post, setPost] = useState();

    //prevent reload on submit and add inputs into obj
    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        props.addNewPost(newEntry);
    }

    return (  
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input value = {name} onChange = {(event) => setName(event.target.value)}/>
            <label>Post</label>
            <input value = {post} onChange = {(event) => setPost(event.target.value)}/>
            <button type='submit'>Create</button>
        </form>
    );
}
 
export default CreatePost;