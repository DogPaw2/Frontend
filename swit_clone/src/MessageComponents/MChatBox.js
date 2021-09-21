import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faCaretSquareRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import '../ChatScreen/MainScreen.css'
import MChatCommentPost from './MChatCommentPost';
import MChatCommentBox from './MChatCommentBox';
import MChatFileBox from './MChatFileBox';

function MChatBox(props){
    const history = useHistory();
    
//===========================================================================================
    const [iscommentEditorOpened, setiscommentEditorOpened] = useState(false);

    const [ischatEditorOpened, setischatEditorOpened] = useState(false);

    const delChat = (id) => {
        axios.delete("http://localhost:8080/api/message",{params : {messageId : id}})
    }

    const commenteditorOpen = (e) => {
        setiscommentEditorOpened(!iscommentEditorOpened);
        
    }

    return(
        <div className = "chatbox_commentbox" key={props.index}>
            <div className = "chatbox" >
                <div className = "profile_circle"></div>
                <div className = "chat_area">
                    <div className = "chatter_info_area">
                        <div className = "chatter_name">
                                {props.currentMsgRoom.user.name}
                        </div>

                        <div className="wrote_time">
                                {props.curMsg.time}
                        </div>
                    </div>

                    <div className = "chat_content">
                        <div className = "chat_text">
                            {props.curMsg.text}
                        </div>
                        
                    </div>
                    <MChatFileBox cur = {props.curMsg} /> 
                </div>
                <div className = "chat_editor">
                    <div className = "delete_chat" onClick = {(event) => {
                        delChat(props.curMsg.id);
                        history.go(0);
                    }}>
                        <FontAwesomeIcon icon={faTrash} className = "search"/>
                    </div>

                    <div className = "add_comment" onClick = {(e) => {
                        commenteditorOpen();
                    }}>
                        <FontAwesomeIcon icon={faComment} className = "search"/>
                    </div>
                </div>
            </div>
            <div>
                <MChatCommentBox cur={props.curMsg}/>  
                {iscommentEditorOpened ?
                    <MChatCommentPost cur={props.curMsg} userId = {props.userId}/>
                :null}
            </div>     
        </div>
    ); 
}

export default MChatBox;