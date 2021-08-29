import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faThumbtack, faClone } from "@fortawesome/free-solid-svg-icons";

function ChatInfoBar(){
    return(
        <div className = "chatting_infos">
            <div className = "btn_with_sidetext_area" id = "channel_members">
                <div className = "btn_with_sidetext_btn">
                    <FontAwesomeIcon icon={faUser} className="search" />
                </div>
                <div className = "btn_with_sidetext_text">
                    1
                </div>
            </div>
            <div className = "btn_with_sidetext_area" id = "fixed_msg">
                <div className = "btn_with_sidetext_btn">
                    <FontAwesomeIcon icon={faThumbtack} className="search" />
                </div>
                <div className = "btn_with_sidetext_text">
                    1
                </div>
            </div>
            <div className = "btn_with_sidetext_area" id = "tabs">
                <div className = "btn_with_sidetext_btn">
                    <FontAwesomeIcon icon={faClone} className="search" />
                </div>
                <div className = "btn_with_sidetext_text">
                    1
                </div>
            </div>  
        </div>
    );
}

export default ChatInfoBar;
