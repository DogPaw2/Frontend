import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";



const ChatNIdeaSwitchIdeaOn = () =>{
    return(
        <div className ="chatNidea">
            <div className = "btn_with_belowtext_area" id ="chat_closed">
                <Link to="/chat">
                    <div className = "btn_with_belowtext_btn">
                        <FontAwesomeIcon icon={faComment} className="search" />
                    </div>
                    <div className = "btn_with_belowtext_text">
                        chat
                    </div>
                </Link>
            </div>
            <div className = "btn_with_belowtext_area" id = "idea_opened">
                <Link to="/idea">
                    <div className = "btn_with_belowtext_btn">
                        <FontAwesomeIcon icon={faWindowMaximize} className="search" />
                    </div>
                    <div className = "btn_with_belowtext_text">
                        idea
                    </div>
                </Link>
            </div>  
        </div>
    );
}

export default ChatNIdeaSwitchIdeaOn;
