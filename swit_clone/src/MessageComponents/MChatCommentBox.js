import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import MCommentFileBox from './MCommentFileBox';

import '../ChatScreen/MainScreen.css'

function ChatCommentBox(props){
    const history = useHistory();
    const [currentDM, setcurrentDM] = useState(props.cur);
    const [currentDMsComments, setcurrentDMsComments] = useState([]);
    const [isThereChatComments, setisThereChatComments] = useState(false);
    const [isThereChatCommentfiles, setisThereChatCommentfiles] = useState(false);
    const [iscommentAreaOpened, setCommentAreaOpened] = useState(false);

    const openCommentArea = () => {
        setCommentAreaOpened(!iscommentAreaOpened);
    }
    const getComments = () => {   
            if(currentDM.comments.length !== 0){
                setisThereChatComments(true);
                setcurrentDMsComments(currentDM.comments.map(curcomment => curcomment));
                //console.log("chatId " + currentDM.id + " has comments");
                //console.log(currentDMsComments);
                
            }
            else
            {
                setisThereChatComments(false);
                //console.log("chatId " + currentDM.id + " has no comments");
            }
    }

    const delComment = (curcommentId) =>
    {
        axios.delete("http://localhost:8080/api/message/comment",{params : {messageCommentId : curcommentId}})
    }

    useEffect(()=>{
        setisThereChatComments(false);
        setCommentAreaOpened(false);
        getComments();
    },[props.cur]);

    return(
        <div>
            { isThereChatComments ? 
                <div>
                    <div className = {iscommentAreaOpened ? "comment_btn_opened" : "comment_btn"} onClick = {() => openCommentArea()} >
                    comment
                    </div>
                    { iscommentAreaOpened ?
                        <div className = "comment_area">
                            {currentDMsComments.map(curcomment=>(
                            <div className = "comment_things">
                                <div>
                                    <div className = "comment_info">
                                        <div className = "comment_user">{curcomment.user.name}</div>
                                        <div className = "comment_time"> {curcomment.time}</div>
                                    </div>
                                    <div className = "comment_content">
                                        <div className = "comment_text">{curcomment.text}</div>
                                        <MCommentFileBox curcomment={curcomment}/>
                                    </div>
                                </div>
                                <div className="comment_editing_btns">
                                    <div className="comment_delete" onClick = {(event) => {
                                        delComment(curcomment.id)
                                        history.go(0);
                                    }}>
                                        <FontAwesomeIcon icon={faTrash} className = "search"/>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    :null}
                </div>
            :null}
        </div>

    );
}

export default ChatCommentBox;