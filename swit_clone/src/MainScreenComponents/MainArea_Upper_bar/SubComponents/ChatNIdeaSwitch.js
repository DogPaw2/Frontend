import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";



function ChatNIdeaSwitch(){
    return(
        <div className = "chatNidea">
            <div className = "btn_with_belowtext_area" id = "chatting">
                <Link to="/chat">
                    <div className = "btn_with_belowtext_btn">
                        <FontAwesomeIcon icon={faComment} className="search" />
                    </div>
                    <div className = "btn_with_belowtext_text">
                        chat
                    </div>
                </Link>
            </div>
            <div className = "btn_with_belowtext_area" id = "idea">
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

export default ChatNIdeaSwitch;
