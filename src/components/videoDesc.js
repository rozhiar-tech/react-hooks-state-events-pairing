import React from "react";

function VideoDesc({ video }) {
    const [upvotes, setUpvotes] = React.useState(video.upvotes);
    const [downvotes, setDownvotes] = React.useState(video.downvotes);
    const [isHidden, setIsHidden] = React.useState(false);
    const [buttenText, setButtenText] = React.useState("Hide Comments");

    function handleHidden() {
        setIsHidden(!isHidden);
        if (isHidden === false){
            setButtenText("Hide Comments");
        } else {
            setButtenText("Show Comments");
        }
    }
    

    function handleUpvotes() {
        setUpvotes(upvotes + 1);
        setDownvotes(downvotes - 1);
    }
    function handleDownvotes() {
        setDownvotes(downvotes + 1);
        setUpvotes(upvotes - 1);

    }
    const showComments = isHidden?  <>
    {video.comments.map((comment) => (
    <div key={comment.id}>
        <p>{comment.user}</p>
        <p>{comment.comment}</p>
    </div>
    ))}
</>: null;
    return (
        <div>
        <h1>{video.title}</h1>
        <p>{video.views} Views | Uploaded {video.createdAt}</p>
        <button onClick={handleUpvotes}>{upvotes} </button>
        <button onClick={handleDownvotes}>{downvotes}</button>
        <p>{video.description}</p>
        <button onClick={handleHidden}>{buttenText}</button>
      {showComments}
        
        </div>
    );
    }

export default VideoDesc;