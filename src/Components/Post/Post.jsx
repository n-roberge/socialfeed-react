import LikeButton from '../LikeButton/LikeButton';
import DislikeButton from '../DislikeButton/DislikeButton';
import "./Post.css"

const Post = (props) => {

    return (  
        <div>
            {props.parentEntries.map((entry) => {
                return (
                    <div className="card-body">
                        <h5 className="card-title">{entry.name}</h5>
                        <p className="card-date">{entry.date}</p>
                        <p className="card-text">{entry.post}</p>
                        <LikeButton />
                        <DislikeButton />
                    </div>
                );
            })}
        </div>
    );
}
 
export default Post;