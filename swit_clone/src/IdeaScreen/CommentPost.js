import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IdeaPost.css';
import './IdeaScreen.css';
import { faCaretSquareDown, faAt, faSmile, faDownload, faFileDownload, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import DeleteModal from './DeleteModal';
import EditCancelModal from './EditCancelModal';

const CommentPost = (props) => {

    const { userId, userName, commentId, commentDate, commentTime, commentText, commentFiles } = props;
    const history = useHistory();

    /***** Edit Comment *****/
    const [editMode, setEditMode] = useState(false);

    const [editInput, setEditInput] = useState(commentText);
    const [editValid, setEditValid] = useState(false);

    const [editFileList, setEditFileList] = useState(commentFiles);

    const [ECmodalOpen, setECmodalOpen] = useState(false);

    const editComment = () => {
        setEditMode(true);
    }
    const editChangeHandler = (e) => {
        setEditInput(e.target.value);
        if (e.target.value != commentText) {
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
        setEditInput(commentText);
        setEditFileList(commentFiles);
        setEditMode(false);
        setECmodalOpen(false);
    }

    const editConfirmHandler = () => {
        const formData = new FormData();
        if (editInput == "") {
            const data = {
                id: commentId,
                text: editFileList.length + " Files"
            }            
            formData.append(
                "dto",
                new Blob([JSON.stringify(data)], {type: "application/json"})
            );       
        }
        else {
            const data = {
                id: commentId,
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
        }

        axios.put("http://localhost:8080/api/idea", formData,
        )
        .then(function(response) { console.log(response); })
        .catch((error) => { console.log(error.response); })

        console.log(editInput);
        console.log(editFileList);
        setEditMode(false);
    }
    /*********************/

    /***** Delete Comment *****/
    const [delModalOpen, setDelModalOpen] = useState(false);

    const deleteComment = () => {
        setDelModalOpen(true);
    }

    const cancelDelete = () => {
        setDelModalOpen(false);
    }

    const confirmDelete = () => {
        axios.delete("http://localhost:8080/api/idea/comment", {
            params: {
                ideaCommentId: commentId
            }
        })
        .then(function(response) { console.log(response); })
        .catch((error) => { console.log(error.response); })
        setDelModalOpen(false);
        history.go(0);
    }
    /***********************/

    return (
        <div>
            { editMode ?
            <div>
                    <div className="idea-comment-edit-adding-div">
                    <div className="idea-adding-text-div">
                        <input
                            className="idea-adding-text-input"
                            placeholder="Share your idea to ask for feedback, collect data, or decide what to eat for lunch."
                            value={editInput}
                            onChange={editChangeHandler}/>
                    </div>
                    <div className="idea-adding-etc-div">
                        <div className="vertical-line-div">
                            <label className="file-upload-label" for="idea-file-upload-edit-input">+</label>
                            <input type="file" onChange={fileUploadEditer} className="file-upload-input" id ="idea-file-upload-edit-input"></input>
                        </div>
                        <div className="white-space-div"></div>
                        <div className="idea-adding-etc-icon-div">
                            <FontAwesomeIcon icon={faCaretSquareDown} className="search idea-adding-etc-icons" />
                            <FontAwesomeIcon icon={faAt} className="search idea-adding-etc-icons" />
                            <FontAwesomeIcon icon={faSmile} className="search idea-adding-etc-icons" />
                        </div>
                    </div>
                    { editFileList.length ? 
                        <div>
                            { editFileList.map(list => (
                                <div className="comment-edit-file-uploaded-div">
                                    <FontAwesomeIcon icon={faFileDownload} size="2x"/>
                                    <div className="file-uploaded-name">{list.originName}</div>
                                    <button className="file-uploaded-delete" type="button" onClick={() => fileDeleteEditer(list)}>X</button>
                                </div>
                            ))}
                        </div>
                    : null}
                    <div className="idea-adding-btn-div">
                        <button className="idea-btn idea-cancel-btn"onClick={editCancelHandler}>Cancel</button>
                        { ECmodalOpen ?
                        <EditCancelModal open={ECmodalOpen} back={backHandler} discard={discardHandler}/>
                        : null}
                        <button className="idea-btn idea-confirm-btn" disabled={!editValid} onClick={editConfirmHandler}>Confirm</button>
                    </div>
                </div>
            </div> 
            :
            <div>
                <div className="idea-comment-uploaded-div">
                    <div className="idea-content-profile-photo"></div>
                    <div className="idea-comment-content-div">
                        <div className="idea-comment-content-name">{userName}</div>
                        <div className="idea-comment-content-time">{commentDate} at {commentTime}</div>
                        <div className="idea-comment-content-contents">{commentText}</div>
                    </div>
                    <ContextMenuTrigger id={commentId+100} holdToDisplay={0}>
                        <FontAwesomeIcon icon={faEllipsisV} className="idea-content-icons edit-delete-icon"/>
                    </ContextMenuTrigger>
                                        
                    <ContextMenu id={commentId+100}>
                        <MenuItem id="comment-menu-item-one" onClick={editComment}>
                                <span>Edit</span>
                        </MenuItem>
                        <MenuItem id="comment-menu-item-two" onClick={deleteComment}>
                                <span>Delete</span>
                        </MenuItem>
                    </ContextMenu>   
                </div>
                { delModalOpen ? 
                    <DeleteModal open={delModalOpen} cancel={cancelDelete} del={confirmDelete}></DeleteModal>
                : null}  
                <div>
                    {commentFiles.length ?
                    <div>
                        { commentFiles.map(list => (
                            <div className="comment-file-download-div">
                                <input type="checkbox" className="file-download-checkbox" id="checkbox-link"/>
                                <FontAwesomeIcon icon={faFileDownload} className="file-shaped-icon" size="2x"/>
                                <div className="file-download-name">{list.originName}</div>
                                <FontAwesomeIcon icon={faDownload} size="2x" className="file-download-icon"/>
                            </div>
                        ))}
                    </div>
                    : null}
                </div>
            </div>
            }
        </div>
    );
}

export default CommentPost;