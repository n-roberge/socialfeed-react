import Post from "../Post/Post";

const DisplayPosts = (props) => {

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



 