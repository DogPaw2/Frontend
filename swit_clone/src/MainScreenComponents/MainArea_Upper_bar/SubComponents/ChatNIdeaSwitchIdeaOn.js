import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";



const ChatNIdeaSwitchIdeaOn = (props) =>{
    const { chatRouter, ideaRouter } = props;
    return(
        <div className ="chatNidea">
            <div className = "btn_with_belowtext_area" id ="chat_closed" onClick={chatRouter}>
                <div className = "btn_with_belowtext_btn">
                    <FontAwesomeIcon icon={faComment} className="search" />
                </div>
                <div className = "btn_with_belowtext_text">
                    chat
                </div>
            </div>
            <div className = "btn_with_belowtext_area" id = "idea_opened" onClick={ideaRouter}>
                <div className = "btn_with_belowtext_btn">
                    <FontAwesomeIcon icon={faWindowMaximize} className="search" />
                </div>
                <div className = "btn_with_belowtext_text">
                    idea
                </div>
            </div>  
        </div>
    );
}

export default ChatNIdeaSwitchIdeaOn;
