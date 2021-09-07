import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSmile, faStar, faShare, faEllipsisV, faPlus, faCaretSquareDown, faAt, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import './IdeaPost.css';
import './IdeaScreen.css';
import axios from 'axios';

const IdeaPost = (props) => {
    const { userId, ideaId, writer, date, time, content } = props;

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
        /*
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
            fileList.forEach((list) => formData.append("files", list.file));
        }
        axios.post("http://localhost:8080/api/idea/comment", formData,
        )
        .then(function(response) { console.log(response); })
        .catch((error) => { console.log(error.response); })

        setCommentInput("");
        setCommentValid(false);
        setFileExist(false);
        setFileList([]);
        */
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

    return (
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
                        <FontAwesomeIcon icon={faEllipsisV} className="idea-content-icons"/>
                    </div>
                </div>
                <div className="idea-content-contents">
                    {content}
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

    );
}

export default IdeaPost;