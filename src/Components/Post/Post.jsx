import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {

    const timestamp = new Date().getTime();
    const date = Date(timestamp);

    return (  
        <div>
            {props.parentEntries.map((entry) => {
                return (
                    <div class="card-body">
                        <h5 class="card-title">{entry.name}</h5>
                        <p class="card-text">{date}</p>
                        <p class="card-text">{entry.post}</p>
                        <FontAwesomeIcon icon = {faThumbsUp} />
                        <FontAwesomeIcon icon = {faThumbsDown} />
                        
                    </div>
                );
            })}
        </div>
    );
}
 
export default Post;