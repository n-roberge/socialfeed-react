const Post = (props) => {
    return ( 
        
        <Card style={{ width: '20rem' }}>
            {props.parentEntries.map((entry) => {
                return (
                    <Card.Body>
                        <Card.Title>{entry.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Date here</Card.Subtitle>
                        <Card.Text>
                        {entry.post}
                        </Card.Text>
                    </Card.Body>
                )
            })};
        </Card> 
    );
}
 
export default Post;