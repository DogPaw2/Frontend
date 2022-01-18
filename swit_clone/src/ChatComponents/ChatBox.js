import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ChatCommentBox from './ChatCommentBox';
import ChatFileBox from './ChatFileBox';
import '../ChatScreen/MainScreen.css'
import ChatCommentPost from './ChatCommentPost';
import DeleteModal from '../SharedComponents/DeleteModal';

function ChatBox(props){
    const history = useHistory();
    
//===========================================================================================
    const [iscommentEditorOpened, setiscommentEditorOpened] = useState(false);
    const [ischatEditorOpened, setischatEditorOpened] = useState(false);

    /***** Delete Chat *****/
    const [delModalOpen, setDelModalOpen] = useState(false);

    const deleteChat = () => {
        setDelModalOpen(true);
    }

    const cancelDelete = () => {
        setDelModalOpen(false);
    }

    const confirmDelete = () => {
        axios.delete("http://localhost:8080/api/chat", {
            params: {
                chatId: props.cur.id
            }
        })
        .then(function(response) { console.log(response); })
        .catch((error) => { console.log(error.response); })
        setDelModalOpen(false);
        history.go(0);
    }
    /***********************/

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
                                {props.cur.user.name}
                        </div>

                        <div className="wrote_time">
                                {props.cur.time}
                        </div>
                    </div>

                    <div className = "chat_content">
                        <div className = "chat_text">
                            {props.cur.text}
                        </div>
                        
                    </div>
                    <ChatFileBox cur = {props.cur} currentChattingIndex={props.currentChattingIndex} /> 
                </div>
                <div className = "chat_editor">
                    <div className = "add_comment" onClick = {(e) => {
                        commenteditorOpen();
                    }}>
                        <FontAwesomeIcon icon={faComment} className = "search"/>
                    </div>
                    <ContextMenuTrigger id={props.cur.id} holdToDisplay={0}>
                        <FontAwesomeIcon icon={faEllipsisV} className="search delete_chat"/>
                    </ContextMenuTrigger>
                            
                    <ContextMenu id={props.cur.id}>
                        <MenuItem id="menu-item-one">
                            <span>Edit</span>
                        </MenuItem>
                        <MenuItem id="menu-item-two" onClick={deleteChat}>
                            <span>Delete</span>
                        </MenuItem>
                    </ContextMenu>
                </div>
            </div>
            { delModalOpen ? 
                <DeleteModal open={delModalOpen} cancel={cancelDelete} del={confirmDelete}></DeleteModal>
            : null}  
            <div>
                <ChatCommentBox cur={props.cur} currentChattingIndex={props.currentChattingIndex} />  
                {iscommentEditorOpened ?
                    <ChatCommentPost cur={props.cur} userId = {props.userId}/>
                :null}
            </div>     
        </div>
    ); 
}

export default ChatBox;