import React from "react";
import VideoDesc from "./videoDesc";

function VideoFrame({ video }) {
    console.log(video);
    return (
        <div>
        <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title={video.title}
        />
        <VideoDesc video={video}/>
        </div>
    );
    }

export default VideoFrame;