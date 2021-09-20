import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown, faAt, faSmile, faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";


function ChattingInput(props){
    
    const history = useHistory();
    
    const [isValid, setIsValid] = useState(false);
    const [ChatInput, setChatInput] = useState("");

    const [fileList, setFileList] = useState([]);
    const [fileExist, setFileExist] = useState(false);

    const changeHandler = (e) => {
        setChatInput(e.target.value);
        if (e.target.value !== "") {
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
        if (fileList.length !== -1) {
            setFileExist(true);
            setIsValid(true);
        }
    }

    const fileDeleteHandler = (e) => {
        setFileList(fileList.filter(target => target.name !== e.name))
        if (fileList.length === 1) {
            setFileExist(false);
        }
    }
    

    const confirmHandler = (e) => {
        
        const formData = new FormData();
        if (ChatInput === "") {
            const data = {
                chattingId: props.currentChattingIndex,
                userId: props.userId,
                text: fileList.length + " Files"
            }            
            formData.append(
                "dto",
                new Blob([JSON.stringify(data)], {type: "application/json"})
            );       
        }
        else {
            const data = {
                chattingId: props.currentChattingIndex,
                userId: props.userId,
                text: ChatInput
            }
            formData.append(
                "dto",
                new Blob([JSON.stringify(data)], {type: "application/json"})
            )
        }

        if (fileList.length === 0) {
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


    return(
        <div className = "chatting_input_area"> 
            <div className = "content_add_btn_area">
                <label className="file-upload-label" for="chat-file-upload-input">+</label>
                <input type="file" onChange={fileUploadHandler} className="file-upload-input" id ="chat-file-upload-input"></input>
            </div>
            <div className = "input_area">
                <div className = "chat_text_input">     
                    <input
                        placeholder="Type your message"
                        value={ChatInput}
                        onChange={changeHandler}/>
                </div>
                
                { fileExist ? 
                    <div>
                        { fileList.map((list,index) => (
                            <div className="file-uploaded-div" key={index}>
                                <div className="file-uploaded-name">{list.name}</div>
                                <button className="file-uploaded-delete" type="button" onClick={() => fileDeleteHandler(list)}>X</button>
                            </div>
                        ))}
                    </div>
                : null}

            </div>
            

            <div className = "chat_buttons" id = "Tbox">
                <div className = "chat_button">
                    <FontAwesomeIcon icon={faCaretSquareDown} className="search" />
                </div>

                <div className = "chat_button" id = "at">
                    <FontAwesomeIcon icon={faAt} className="search" />
                </div>

                <div className = "chat_button" id = "imogi">
                    <FontAwesomeIcon icon={faSmile} className="search" />
                </div>

                <button className="chat_buttons append_chat" disabled={!isValid} onClick={confirmHandler}>
                    <FontAwesomeIcon icon={faCaretSquareRight} size = "3x" className="search" />
                </button>

            </div>
        </div>
    );
}

export default ChattingInput;
