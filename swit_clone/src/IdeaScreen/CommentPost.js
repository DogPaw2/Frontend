import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IdeaPost.css';
import './IdeaScreen.css';
import { faCaretSquareDown, faAt, faSmile, faDownload, faFileDownload, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import DeleteModal from '../SharedComponents/DeleteModal';
import EditCancelModal from '../SharedComponents/EditCancelModal';

const CommentPost = (props) => {

    const { userId, userName, commentId, commentDate, commentTime, commentText, commentFiles } = props;
    const history = useHistory();

    /***** File Download *****/
    const cFileDownloadHandler = (e) => {
        console.log(e);
        axios({
            method: "GET",
            url: "http://localhost:8080/api/idea/comment/download/",
            params: {
                fileId: e.id
            },
            responseType: "blob"
        })
        .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", e.originName); 
            document.body.appendChild(link);
            link.click();
        })
        .catch((error) => {console.log(error);})
    }
    /*************************/

    /***** Edit Comment *****/
    const [cEditMode, setCEditMode] = useState(false);

    const [cEditInput, setCEditInput] = useState(commentText);
    const [cEditValid, setCEditValid] = useState(false);

    const [cEditFileList, setCEditFileList] = useState(commentFiles);

    const [cECmodalOpen, setCECmodalOpen] = useState(false);

    const editComment = () => {
        setCEditMode(true);
    }
    const cEditChangeHandler = (e) => {
        setCEditInput(e.target.value);
        if (e.target.value != commentText) {
            setCEditValid(true);
        }
        else {
            setCEditValid(false);
        }
    }

    const cFileUploadEditer = (e) => {
        const newFile = e.target.files[0];
        setCEditFileList(cEditFileList.concat(newFile));
        if (cEditFileList[cEditFileList.length] != e.target.files[0]) {
            setCEditValid(true);
        }
        else {
            setCEditValid(false);
        }
    }

    const cFileDeleteEditer = (e) => {
        
        axios.delete("http://localhost:8080/api/idea/comment/file", {
            params: {
                fileId: e.id
            }
        })
        .then(response => { console.log(response); })
        .catch(error => { console.log(error.response); })
        setCEditFileList(cEditFileList.filter(target => target.id != e.id))
        setCEditValid(true);
    }

    const cEditCancelHandler = () => {
        setCECmodalOpen(true);
    }

    const cBackHandler = () => {
        setCECmodalOpen(false);
    }

    const cDiscardHandler = () => {
        setCEditInput(commentText);
        setCEditFileList(commentFiles);
        setCEditMode(false);
        setCECmodalOpen(false);
    }

    const cEditConfirmHandler = () => {
        const formData = new FormData();
        if (cEditInput == "") {
            const data = {
                id: commentId,
                text: cEditFileList.length + " Files"
            }            
            formData.append(
                "dto",
                new Blob([JSON.stringify(data)], {type: "application/json"})
            );       
        }
        else {
            const data = {
                id: commentId,
                text: cEditInput
            }
            formData.append(
                "dto",
                new Blob([JSON.stringify(data)], {type: "application/json"})
            )
        }

        if (cEditFileList.length == 0) {
            formData.append("files", new Blob([]));
        }
        else {
            cEditFileList.forEach((list) => { formData.append("files", list); });
            if (cEditFileList == commentFiles) {
                formData.append("files", new Blob([]));
            }
        }

        axios.put("http://localhost:8080/api/idea/comment", formData,
        )
        .then(function(response) { console.log(response); })
        .catch((error) => { console.log(error.response); })

        console.log(cEditInput);
        console.log(cEditFileList);
        setCEditMode(false);
        history.go(0);
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
            { cEditMode ?
            <div>
                    <div className="idea-comment-edit-adding-div">
                    <div className="idea-adding-text-div">
                        <input
                            className="idea-adding-text-input"
                            placeholder="Share your idea to ask for feedback, collect data, or decide what to eat for lunch."
                            value={cEditInput}
                            onChange={cEditChangeHandler}/>
                    </div>
                    <div className="idea-adding-etc-div">
                        <div className="vertical-line-div">
                            <label className="file-upload-label" for="idea-file-upload-edit-input">+</label>
                            <input type="file" onChange={cFileUploadEditer} className="file-upload-input" id ="idea-file-upload-edit-input"></input>
                        </div>
                        <div className="white-space-div"></div>
                        <div className="idea-adding-etc-icon-div">
                            <FontAwesomeIcon icon={faCaretSquareDown} className="search idea-adding-etc-icons" />
                            <FontAwesomeIcon icon={faAt} className="search idea-adding-etc-icons" />
                            <FontAwesomeIcon icon={faSmile} className="search idea-adding-etc-icons" />
                        </div>
                    </div>
                    { cEditFileList.length ? 
                        <div>
                            { cEditFileList.map(list => (
                                <div className="comment-edit-file-uploaded-div">
                                    <FontAwesomeIcon icon={faFileDownload} size="2x"/>
                                    <div className="file-uploaded-name">{list.originName || list.name}</div>
                                    <button className="file-uploaded-delete" type="button" onClick={() => cFileDeleteEditer(list)}>X</button>
                                </div>
                            ))}
                        </div>
                    : null}
                    <div className="idea-adding-btn-div">
                        <button className="idea-btn idea-cancel-btn"onClick={cEditCancelHandler}>Cancel</button>
                        { cECmodalOpen ?
                        <EditCancelModal open={cECmodalOpen} back={cBackHandler} discard={cDiscardHandler}/>
                        : null}
                        <button className="idea-btn idea-confirm-btn" disabled={!cEditValid} onClick={cEditConfirmHandler}>Confirm</button>
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
                                <FontAwesomeIcon icon={faFileDownload} className="file-shaped-icon" size="2x"/>
                                <div className="file-download-name">{list.originName}</div>
                                <FontAwesomeIcon icon={faDownload} onClick={() => cFileDownloadHandler(list)} size="2x" className="file-download-icon"/>
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