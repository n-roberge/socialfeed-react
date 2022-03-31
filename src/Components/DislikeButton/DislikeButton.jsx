import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import "./DislikeButton.css"

const DislikeButton = (props) => {
    
    const [buttonClass, setButtonClass] = useState('inactive');

    function handleClick(){
        if (buttonClass === "inactive"){
            setButtonClass("active");
        }
        else {
            setButtonClass("inactive");
        }
    }
    
    return (  
        <button className = {buttonClass} onClick={handleClick}><FontAwesomeIcon icon = {faThumbsDown} /></button>
    );
}
 
export default DislikeButton;