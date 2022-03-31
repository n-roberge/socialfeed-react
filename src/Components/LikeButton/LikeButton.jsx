import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './LikeButton.css'

const LikeButton = (props) => {
    
    const [buttonClass, setButtonClass] = useState('inactive');

    function handleClick(){
        if (buttonClass === "inactive"){
            setButtonClass("like");
        }
        else {
            setButtonClass("inactive");
        }
    }
    
    return (  
        <button className = {buttonClass} onClick={handleClick}><FontAwesomeIcon icon = {faThumbsUp} /></button>
    );
}
 
export default LikeButton;