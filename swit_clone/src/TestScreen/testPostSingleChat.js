import React, { useState, useEffect } from 'react';
import useDidMountEffect from './useDidMountEffect';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function PostSingleChat(){
    const history = useHistory();
    
    const [isValid, setIsValid] = useState(false);
    const [ChatInput, setChatInput] = useState("");

    const [fileList, setFileList] = useState([]);
    const [fileExist, setFileExist] = useState(false);

    const changeHandler = (e) => {
        setChatInput(e.target.value);
        if (e.target.value != "") {
            setIsValid(true);
        }
        else {
            setIsValid(false);
        }
    }

    
    const fileUploadHandler = (e) => {
        const newFile = {
            name: e.target.files[0].name,
            file: e.target.files[0]
        }
        setFileList(fileList.concat(newFile));
        if (fileList.length != -1) {
            setFileExist(true);
            setIsValid(true);
        }
    }

    const fileDeleteHandler = (e) => {
        setFileList(fileList.filter(target => target.name != e.name))
        if (fileList.length == 1) {
            setFileExist(false);
        }
    }
    
    const cancelHandler = (e) => {
        setIsValid(false);
        setChatInput("");
    }

    const confirmHandler = (e) => {
        const formData = new FormData();
        if (ChatInput == "") {
            const data = {
                chattingId: 1,
                userId: 1,
                text: fileList.length + " Files"
            }            
            formData.append(
                "dto",
                new Blob([JSON.stringify(data)], {type: "application/json"})
            );       
        }
        else {
            const data = {
                chattingId: 1,
                userId: 1,
                text: ChatInput
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

        axios.post("http://localhost:8080/api/chat", formData, 
        )
        .then(function(response) { console.log(response); })
        .catch((error) => { console.log(error.response); })

        setIsValid(false);
        setChatInput("");
        setFileExist(false);
        setFileList([]);
        history.go(0);
    }
    

    
    useEffect(()=>{
    },[]);
    
    return(
        <div>
            <input
                placeholder="Share your idea to ask for feedback, collect data, or decide what to eat for lunch."
                value={ChatInput}
                //onFocus={focusOn}
                //onBlur={focusOff}
                onChange={changeHandler}/>      

            <div className="vertical-line-div">
                <label className="file-upload-label" for="chat-file-upload-input">+</label>
                <input type="file" onChange={fileUploadHandler} className="file-upload-input" id ="chat-file-upload-input"></input>
            </div>
            { fileExist ? 
                <div>
                    { fileList.map(list => (
                        <div className="file-uploaded-div">
                            <div className="file-uploaded-name">{list.name}</div>
                            <button className="file-uploaded-delete" type="button" onClick={() => fileDeleteHandler(list)}>X</button>
                        </div>
                    ))}
                </div>
            : null}

            <div className="idea-adding-btn-div">
                <button className="idea-btn idea-cancel-btn" disabled={!isValid} onClick={cancelHandler}>Cancel</button>
                <button className="idea-btn idea-confirm-btn" disabled={!isValid} onClick={confirmHandler}>Confirm</button>
            </div>  
        </div>
        
    );
}

export default PostSingleChat;