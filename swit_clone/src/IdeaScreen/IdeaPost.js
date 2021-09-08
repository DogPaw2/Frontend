import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faStar, faShare, faEllipsisV, faCaretSquareDown, faAt, faPaperPlane, faFileDownload, faDownload } from "@fortawesome/free-solid-svg-icons";
import './IdeaPost.css';
import './IdeaScreen.css';
import './PopupMenu.css';
import axios from 'axios';
import EditCancelModal from './EditCancelModal';

const IdeaPost = (props) => {
    const history = useHistory();
    const { userId, ideaBoardId, ideaId, writer, date, time, content, files } = props;

    /***** File Download *****/
    const fileDownloadHandler = (e) => {
        /*
        axios({
            method: "GET",
            url: `http://localhost:8080/api/idea/download/${e.id}`,
            responseType: "blob"
        })
        .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", e.fileName);
            document.body.appendChild(link);
            link.click();
        })
        .catch((error) => {console.log(error);})
        */
    }
    /*************************/

    /***** Edit Idea *****/
    const [editMode, setEditMode] = useState(false);

    const [editInput, setEditInput] = useState(content);
    const [editValid, setEditValid] = useState(false);

    const [editFileList, setEditFileList] = useState(files);

    const [ECmodalOpen, setECmodalOpen] = useState(false);

    const editIdea = () => {
        setEditMode(true);
    }
    const editChangeHandler = (e) => {
        setEditInput(e.target.value);
        if (e.target.value != content) {
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
        setEditInput(content);
        setEditFileList(files);
        setEditMode(false);
    }

    const editConfirmHandler = () => {
        const formData = new FormData();
        if (commentInput == "") {
            const data = {
                id: ideaId,
                text: editFileList.length + " Files"
            }            
            formData.append(
                "dto",
                new Blob([JSON.stringify(data)], {type: "application/json"})
            );       
        }
        else {
            const data = {
                id: ideaId,
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


    /***** Delete Idea *****/
    const deleteIdea = () => {
        axios.delete("http://localhost:8080/api/idea", {
            params: {
                ideaId: ideaId
            }
        })
        .then(function(response) { console.log(response); })
        .catch((error) => { console.log(error.response); })
        history.go(0);
    }
    /***********************/


    /***** Comment *****/
    
    const [commentFocus, setCommentFocus] = useState(false);
    const [commentValid, setCommentValid] = useState(false);

    const [commentInput, setCommentInput] = useState("");

    const cFocusHandler = () => {
        setCommentFocus(true);
    }

    const cChangeHandler = (e) => {
        setCommentInput(e.target.value);
        if (e.target.value != "") {
            setCommentValid(true);
        }
        else {
            setCommentValid(false);
        }
    }

    const cConfirmHandler = (e) => {
        
        const formData = new FormData();
        if (commentInput == "") {
            const data = {
                ideaId: ideaId,
                userId: userId,
                text: fileList.length + " Files"
            }            
            formData.append(
                "dto",
                new Blob([JSON.stringify(data)], {type: "application/json"})
            );       
        }
        else {
            const data = {
                ideaId: ideaId,
                userId: userId,
                text: commentInput
            }
            formData.append(
                "dto",
                new Blob([JSON.stringify(data)], {type: "application/json"})
            )
        }

        if (fileList.length == 0) {
            formData.append("files", new Blob([]));
        }
        else {
            fileList.forEach((list) => formData.append("files", list));
        }
        axios.post("http://localhost:8080/api/idea/comment", formData,
        )
        .then(function(response) { console.log(response); })
        .catch((error) => { console.log(error.response); })

        setCommentInput("");
        setCommentValid(false);
        setFileExist(false);
        setFileList([]);
        
    }

    const [fileList, setFileList] = useState([]);
    const [fileExist, setFileExist] = useState(false);

    const fileUploadHandler = (e) => {
        const newFile = {
            name: e.target.files[0].name,
            file: e.target.files[0]
        }
        setFileList(fileList.concat(newFile));
        if (fileList.length != -1) {
            setFileExist(true);
            setCommentValid(true);
        }
    }

    const fileDeleteHandler = (e) => {
        setFileList(fileList.filter(target => target.name != e.name))
        if (fileList.length == 1) {
            setFileExist(false);
        }
    }
    
    /*******************/

    return (
        <div>
            { editMode ? 
            <div className="idea-adding-div">
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
                            <div className="file-uploaded-div">
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

            :
            <div className="idea-post">
                <div className="idea-content-div">
                    <div className="idea-content-upper-div">
                        <div className="idea-content-profile-photo"></div>
                        <div className="idea-content-writing-div">
                            <div className="idea-content-writing-name">{writer}</div>
                            <div className="idea-content-writing-time">{date} at {time}</div>
                        </div>
                        <div className="idea-content-icon-div">
                            <FontAwesomeIcon icon={faShare} className="idea-content-icons"/>
                            <FontAwesomeIcon icon={faStar} className="idea-content-icons"/>

                            <ContextMenuTrigger id={ideaId} holdToDisplay={0}>
                                <FontAwesomeIcon icon={faEllipsisV} className="idea-content-icons edit-delete-icon"/>
                            </ContextMenuTrigger>
                            
                            <ContextMenu id={ideaId}>
                                <MenuItem id="menu-item-one" onClick={editIdea}>
                                    <span>Edit</span>
                                </MenuItem>
                                <MenuItem id="menu-item-two" onClick={deleteIdea}>
                                    <span>Delete</span>
                                </MenuItem>
                            </ContextMenu>   
                        </div>
                    </div>
                    <div className="idea-content-contents">
                        {content}
                        {files.length ?
                        <div>
                            { files.map(list => (
                                <div className="file-download-div">
                                    <input type="checkbox" className="file-download-checkbox" id="checkbox-link"/>
                                    <FontAwesomeIcon icon={faFileDownload} className="file-shaped-icon" size="2x"/>
                                    <div className="file-download-name">{list.originName}</div>
                                    <FontAwesomeIcon icon={faDownload} onClick={() => fileDownloadHandler(list)} size="2x" className="file-download-icon"/>
                                </div>
                            ))}
                        </div>
                        : null}
                    </div>
                    <FontAwesomeIcon icon={faSmile} className="idea-content-emoji" />
                </div>
                <hr className="idea-content-hr"/>
                <div className="idea-comment-div">
                    <div className="idea-comment-count">0 comments</div>
                    <div className="idea-comment-writing-div">
                        <input
                            className="idea-comment-input"
                            placeholder=" Enter message"
                            value={commentInput}
                            onFocus={cFocusHandler}
                            onChange={cChangeHandler}
                        />
                        {commentFocus ?
                        <div className="idea-adding-etc-div">
                            <div className="vertical-line-div">
                                <label className="file-upload-label" for="idea-file-upload-input">+</label>
                                <input type="file" onChange={fileUploadHandler} className="file-upload-input" id ="idea-file-upload-input"></input>
                            </div>
                            <div className="white-space-div"></div>
                            <div className="idea-adding-etc-icon-div">
                                <FontAwesomeIcon icon={faCaretSquareDown} className="search idea-adding-etc-icons" />
                                <FontAwesomeIcon icon={faAt} className="search idea-adding-etc-icons" />
                                <FontAwesomeIcon icon={faSmile} className="search idea-adding-etc-icons" />
                                <button className="comment-confirm-icon-div" disabled={!commentValid} onClick={cConfirmHandler}>
                                    <FontAwesomeIcon icon={faPaperPlane} className="comment-confirm-icon"/>
                                </button>
                            </div>                                
                        </div>
                        : null}
                    </div>
                </div>

            </div>
            }
        </div>
    );
}

export default IdeaPost;