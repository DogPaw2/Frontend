import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSmile, faStar, faShare, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import './IdeaPost.css';

function IdeaPost() {
    return (
        <div className="idea-post">
            <div className="idea-content-div">
                <div className="idea-content-upper-div">
                    <div className="idea-content-profile-photo"></div>
                    <div className="idea-content-writing-div">
                        <div className="idea-content-writing-name">Daeun Chung</div>
                        <div className="idea-content-writing-time">Aug 29 at 6:02 AM</div>
                    </div>
                    <div className="idea-content-icon-div">
                        <FontAwesomeIcon icon={faShare} className="idea-content-icons"/>
                        <FontAwesomeIcon icon={faStar} className="idea-content-icons"/>
                        <FontAwesomeIcon icon={faEllipsisV} className="idea-content-icons"/>
                    </div>
                </div>
                <div className="idea-content-contents">
                    asdfasdf
                </div>
                <FontAwesomeIcon icon={faSmile} className="idea-content-emoji" />
            </div>
            <hr className="idea-content-hr"/>
            <div className="idea-comment-div">
                <div className="idea-comment-count">0 comments</div>
                <input className="idea-comment-input" placeholder=" Enter message"></input>
            </div>

        </div>

    );
}

export default IdeaPost;