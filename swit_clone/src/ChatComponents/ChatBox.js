import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEllipsisV, faAt, faSmile, faFileDownload, faCaretSquareDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ChatCommentBox from './ChatCommentBox';
import ChatFileBox from './ChatFileBox';
import '../ChatScreen/MainScreen.css'
import ChatCommentPost from './ChatCommentPost';
import DeleteModal from '../SharedComponents/DeleteModal';
import EditCancelModal from '../SharedComponents/EditCancelModal';
import './ChatBoxEditMode.css';
import '../IdeaScreen/IdeaScreen.css';

function ChatBox(props){
    const history = useHistory();
    
//===========================================================================================
    const [iscommentEditorOpened, setiscommentEditorOpened] = useState(false);

    /***** Edit Chat *****/
    const [editMode, setEditMode] = useState(false);

    const [editInput, setEditInput] = useState(props.cur.text);
    const [editValid, setEditValid] = useState(false);

    const [editFileList, setEditFileList] = useState(props.cur.fileList);

    const [ECmodalOpen, setECmodalOpen] = useState(false);

    const editChat = () => {
        setEditMode(true);
    }
    const editChangeHandler = (e) => {
        setEditInput(e.target.value);
        if (e.target.value != props.cur.text) {
            setEditValid(true);
        }
        else {
            setEditValid(false);
        }
    }

    const fileUploadEditer = (e) => {
        const newFile = e.target.files[0];
        setEditFileList(editFileList.concat(newFile));
        if (editFileList[editFileList.length] != e.target.files[0]) {
            setEditValid(true);
        }
        else {
            setEditValid(false);
        }
    }

    const fileDeleteEditer = (e) => {
        axios.delete("http://localhost:8080/api/chat/file", {
            params: {
                fileId: e.id
            }
        })
        .then(response => { console.log(response); })
        .catch(error => { console.log(error.response); })
        setEditFileList(editFileList.filter(target => target.id != e.id))
        setEditValid(true);
    }

    const editCancelHandler = () => {
        setECmodalOpen(true);
    }

    const backHandler = () => {
        setECmodalOpen(false);
    }

    const discardHandler = () => {
        setEditInput(props.cur.text);
        setEditFileList(props.cur.fileList);
        setEditMode(false);
        setECmodalOpen(false);
    }

    const editConfirmHandler = () => {
        const formData = new FormData();
        if (editInput == "") {
            const data = {
                id: props.cur.id,
                text: editFileList.length + " Files"
            }            
            formData.append(
                "dto",
                new Blob([JSON.stringify(data)], {type: "application/json"})
            );       
        }
        else { 
            const data = {
                id: props.cur.id,
                text: editInput
            }
            formData.append(
                "dto",
                new Blob([JSON.stringify(data)], {type: "application/json"})
            )
        }

        if (editFileList.length == 0) {
            formData.append("files", new Blob([]));
        }
        else {
            editFileList.forEach((list) => { formData.append("files", list); });
            if (editFileList == props.cur.fileList) {
                formData.append("files", new Blob([]));
            }
        }

        axios.put("http://localhost:8080/api/chat", formData,
        )
        .then(function(response) { console.log(response); })
        .catch((error) => { console.log(error.response); })

        console.log(editInput);
        console.log(editFileList);
        setEditMode(false);
        history.go(0);
    }
    /*********************/


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

                <div className = "chat_area">
                    <div className = "chatter_info_area">
                        <div className = "profile_circle"></div>
                        <div className = "chatter_name">
                                {props.cur.user.name}
                        </div>
                        <div className="wrote_time">
                                {props.cur.time}
                        </div>
                    </div>

                    { editMode ?
                    <div className="chat-edit-mode-div">
                        <div className="chat-edit-text-div">
                            <input
                                className="chat-edit-mode-input"
                                placeholder="Share your idea to ask for feedback, collect data, or decide what to eat for lunch."
                                value={editInput}
                                onChange={editChangeHandler}
                            />
                        </div>
                        <div className="chat-edit-etc-div">
                            <div className="vertical-line-div">
                                <label className="file-upload-label" for="idea-file-upload-edit-input">+</label>
                                <input type="file" onChange={fileUploadEditer} className="file-upload-input" id ="idea-file-upload-edit-input"></input>
                            </div>
                            <div className="white-space-div"></div>
                            <div className="chat-edit-etc-icon-div">
                                <FontAwesomeIcon icon={faCaretSquareDown} className="search idea-adding-etc-icons" />
                                <FontAwesomeIcon icon={faAt} className="search idea-adding-etc-icons" />
                                <FontAwesomeIcon icon={faSmile} className="search idea-adding-etc-icons" />
                            </div>
                        </div>
                        { editFileList.length ? 
                        <div className="chat-edit-file-div">
                            { editFileList.map(list => (
                                <div className="chat-edit-file-uploaded">
                                    <FontAwesomeIcon icon={faFileDownload} size="2x"/>
                                    <div className="file-uploaded-name">{list.originName || list.name}</div>
                                    <button className="chat-edit-file-uploaded-delete" type="button" onClick={() => fileDeleteEditer(list)}>X</button>
                                </div>
                            ))}
                        </div>
                        : null}
                        <div className="chat-edit-btn-div">
                            <button className="idea-btn idea-cancel-btn"onClick={editCancelHandler}>Cancel</button>
                            { ECmodalOpen ?
                            <EditCancelModal open={ECmodalOpen} back={backHandler} discard={discardHandler}/>
                            : null}
                            <button className="idea-btn idea-confirm-btn" disabled={!editValid} onClick={editConfirmHandler}>Confirm</button>
                        </div>
                    </div>

                    :

                    <div>
                        <div className = "chat_content">
                            <div className = "chat_text">
                                {props.cur.text}
                            </div>
                        </div>
                        <ChatFileBox cur = {props.cur} currentChattingIndex={props.currentChattingIndex} /> 
                    </div>
                    }
                </div>

                { editMode ? null

                :

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
                        <MenuItem id="menu-item-one" onClick={editChat}>
                            <span>Edit</span>
                        </MenuItem>
                        <MenuItem id="menu-item-two" onClick={deleteChat}>
                            <span>Delete</span>
                        </MenuItem>
                    </ContextMenu>
                </div>
                }
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