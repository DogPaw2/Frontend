import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSmile, faStar } from "@fortawesome/free-solid-svg-icons";
import './IdeaPost.css';

function IdeaPost() {
    return (
        <div className="idea-post">
            <div className="idea-content-div">
                <div className="idea-content-profile-photo"></div>
                <div className="idea-content-writing-info">
                    <div className="idea-content-writing-name">Daeun Chung</div>
                    <div className="idea-content-writing-time">Aug 29 at 6:02 AM</div>
                </div>
                <div className="idea-content-icon">
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                <div className="idea-content-content">

                </div>
                <FontAwesomeIcon icon={faSmile} className="search" />
            </div>
            <hr></hr>
            <div className="idea-comment-div">
                <div className="idea-comment-count">0 comments</div>
                <div className="idea-comment-input">Enter message</div>
            </div>

        </div>

    );
}

export default IdeaPost;