import React, { useState } from 'react';
import useDidMountEffect from '../TestScreen/useDidMountEffect';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCaretSquareDown, faAt, faSmile, faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";

function ChattingInput(){
    const [query, setquery] = useState("");
    const [search, setSearch] = useState("");

    const POST_Single_chat = async() =>{
        await axios.post("http://localhost:8080/api/chat",
            {    "chattingId": 1, "userId" : 1, "text" : search })
        .then(console.log("Send ->" + search));
    };
    function refreshPage() {
        window.location.reload(false);
    };

    useDidMountEffect(()=>{
    POST_Single_chat();
    refreshPage();
 
    },[search]);
    
    return(
        <div className = "chatting_input_area"> 
                            
            <div className = "content_add_btn_area">
                <FontAwesomeIcon icon={faPlus} className="search" size="2x"/>
            </div>

            <div className = "chat_text_input">
                <input type = "text" value={query} placeholder= "Send your Message" onChange={(event) => setquery(event.target.value)}></input>
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

                <div className = "chat_button" id = "append_chat" onClick={() => setSearch(query)}>
                    <FontAwesomeIcon icon={faCaretSquareRight} className="search" size="3x"/>
                </div>
            </div>
        </div>
    );
}

export default ChattingInput;
