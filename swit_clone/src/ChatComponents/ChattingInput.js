import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCaretSquareDown, faAt, faSmile, faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";

function ChattingInput(){
    return(
        <div className = "chatting_input_area"> 
                            
            <div className = "content_add_btn_area">
                <FontAwesomeIcon icon={faPlus} className="search" size="2x"/>
            </div>

            <div className = "chat_text_input">
                <input type = "text" placeholder= "Send your Message"></input>
            </div>

            <div className = "chat_buttons" id = "Tbox">
                <div className = "chat_button">
                    <FontAwesomeIcon icon={faCaretSquareDown} className="search" />
                </div>

                <div className = "chat_button" id = "at">
                    <FontAwesomeIcon icon={faAt} className="search" />
                </div>

                <div className = "chat_button" id = "imogi">
                    <FontAwesomeIcon icon={faSmile} className="search" />
                </div>

                <div className = "chat_button" id = "append_chat">
                    <FontAwesomeIcon icon={faCaretSquareRight} className="search" size="3x"/>
                </div>
            </div>
        </div>
    );
}

export default ChattingInput;
