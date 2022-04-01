import React, { useState } from 'react';

const CreatePost = (props) => {

    const [name, setName] = useState();
    const [post, setPost] = useState();
    
    const timestamp = new Date().getTime();
    const tempTimestamp = Date(timestamp)
    const [date, setDate] = useState(tempTimestamp);
    
    //prevent reload on submit and add inputs into obj
    function handleSubmit(event){
        event.preventDefault();

        let newEntry = {
            name: name,
            post: post,
            date: date
        };
        setDate(Date(timestamp))
        props.addNewPost(newEntry);

        //clear form after submit
        setName("");
        setPost("");
    }

    return (  
        <form onSubmit={handleSubmit} style={{"width":"40em"}}>
            <div className='form-group'>
                <label style={{"font-weight":"bold"}}>Name</label>
                <input value = {name} className = 'form-control' onChange = {(event) => setName(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label style={{"font-weight":"bold"}}>Post</label>
                <textarea value = {post} rows = "4" className = 'form-control' onChange = {(event) => setPost(event.target.value)}/>
            </div>
            
            <button type='submit'className='btn btn-light' style={{'margin-top':'1em'}}>Create</button>
        </form>
    )
}
 
export default CreatePost;