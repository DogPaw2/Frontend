import React, { useState} from 'react';
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


const ChatCommentPost = (props) =>
{
    const history = useHistory();

    const [currentChatId, setCurrentChatId]= useState(props.cur.id);
    const [isValid, setIsValid] = useState(false);
    const [CommentInput, setCommentInput] = useState("");

    const [CfileList, setCfileList] = useState([]);
    const [CfileExist, setCFileExist] = useState(false);

    

    const CchangeHandler = (e) => {
        setCommentInput(e.target.value);
        if (e.target.value !== "") {
            setIsValid(true);
        }
        else {
            setIsValid(false);
        }
    }

    const CfileUploadHandler = (e) => {
        const newFile = {
            name: e.target.files[0].name,
            file: e.target.files[0]
        }
        setCfileList(CfileList.concat(newFile));
        if (CfileList.length !== -1) {
            setCFileExist(true);
            setIsValid(true);
        }
    }

    const CfileDeleteHandler = (e) => {
        setCfileList(CfileList.filter(target => target.name !== e.name))
        if (CfileList.length === 1) {
            setCFileExist(false);
        }
    }
    

    const CconfirmHandler = () => {
        
        const formData = new FormData();
        if (CommentInput === "") {
            const data = {
                chatId: currentChatId,
                userId: props.userId,
                text: CfileList.length + " Files"
            }            
            formData.append(
                "dto",
                new Blob([JSON.stringify(data)], {type: "application/json"})
            );       
        }
        else {
            const data = {
                chatId: currentChatId,
                userId: props.userId,
                text: CommentInput
            }
            formData.append(
                "dto",
                new Blob([JSON.stringify(data)], {type: "application/json"})
            )
        }

        if (CfileList.length === 0) {
            formData.append("files", new Blob([]));
        }
        else {
            CfileList.forEach((list) => formData.append("files", list.file));
        }

        axios.post("http://localhost:8080/api/chat/comment", formData, 
        )
        .then(function(response) { console.log(response); })
        .catch((error) => { console.log(error.response); })

        setIsValid(false);
        setCommentInput("");
        setCFileExist(false);
        setCfileList([]);
        history.go(0);
    }

    return(
        <div>
            <div className = "comment_input_area"> 
                <div className = "content_add_btn_area">
                    <label className="file-upload-label" for="comment-file-upload-input">+</label>
                    <input type="file" onChange={CfileUploadHandler} className="file-upload-input" id ="comment-file-upload-input"></input>
                </div>

                <div className = "input_area">
                    <div className = "chat_text_input">     
                        <input
                            placeholder="Type your Comment"
                            value={CommentInput}
                            onChange={CchangeHandler}/>
                    </div>
                
                    { CfileExist ? 
                        <div>
                            { CfileList.map((list,index) => (
                                <div className="file-uploaded-div" key={index}>
                                    <div className="file-uploaded-name">{list.name}</div>
                                    <button className="file-uploaded-delete" type="button" onClick={() => CfileDeleteHandler(list)}>X</button>
                                </div>
                            ))}
                        </div>
                    : null}
                </div>

                <div className = "chat_buttons" id = "Tbox">
                    <div className = "chat_button">
                        <button className="chat_buttons append_chat" disabled={!isValid} onClick={(event) => {CconfirmHandler()}}>
                            <FontAwesomeIcon icon={faCaretSquareRight} size = "3x" className="search" />
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default ChatCommentPost;