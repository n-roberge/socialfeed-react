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
            <div className='form-group'>
                <label>Name</label>
                <input value = {name} className = 'form-control' onChange = {(event) => setName(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Post</label>
                <textarea value = {post} rows = "4" className = 'form-control' onChange = {(event) => setPost(event.target.value)}/>
            </div>
            
            <button type='submit'className='btn btn-primary' style={{'margin-top':'1em'}}>Create</button>
        </form>
    );
}
 
export default CreatePost;