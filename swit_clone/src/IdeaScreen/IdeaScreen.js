import React, { useEffect, useState } from 'react';
import axios from "axios";
import './IdeaScreen.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus, faAt, faCaretSquareDown, faSmile} from "@fortawesome/free-solid-svg-icons";

//MainScreenComponents
import NavBar from '../MainScreenComponents/Navigation_bar/NavBar';
import LeftBar from '../MainScreenComponents/Left_bar/LeftBar';
import MainUpperBarIdeaOn from '../MainScreenComponents/MainArea_Upper_bar/MainUpperBarIdeaOn';
import MainExplorer from '../MainScreenComponents/Explorer/MainExplorer';
import RightPanel from '../MainScreenComponents/Right_panel/RightPanel';

import IdeaPost from './IdeaPost';

//React-Router
import { useHistory, useLocation } from 'react-router-dom';

function IdeaScreen(){

    const location = useLocation();
    
    const userId = location.state.userId;
    const userName = location.state.userName;
    const userEmail = location.state.userEmail;
    const workspaceId = location.state.workspaceId;
    const workspaceName = location.state.workspaceName;
    const workspaceUrl = location.state.workspaceUrl;
    
    const history = useHistory();

    const moveToChat = () => {
        history.push({
            pathname: `/${userId}/${workspaceUrl}/general/chat`,
            state: {
                userId: userId,
                userName: userName,
                userEmail: userEmail,
                workspaceId: workspaceId,
                workspaceName: workspaceName,
                workspaceUrl: workspaceUrl
            }
        })
    }

    const moveToIdea = () => {
        history.push({
            pathname: `/${userId}/${workspaceUrl}/general/idea`,
            state: {
                userId: userId,
                userName: userName,
                userEmail: userEmail,
                workspaceId: workspaceId,
                workspaceName: workspaceName,
                workspaceUrl: workspaceUrl
            }
        })
    }

    //const [isFocus, setIsFocus] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [ideaInput, setIdeaInput] = useState("");

    const [fileList, setFileList] = useState([]);
    const [fileExist, setFileExist] = useState(false);

    const [post, setPost] = useState(0);


    /*
    const focusOn = () => {
        setIsFocus(true);
    }

    const focusOff = () => {
        setIsFocus(false);
    }
    */

    const changeHandler = (e) => {
        setIdeaInput(e.target.value);
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
        setIdeaInput("");
    }

    const confirmHandler = (e) => {
        const formData = new FormData();
        if (ideaInput == "") {
            const data = {
                ideaBoardId: 1,
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
                ideaBoardId: 1,
                userId: userId,
                text: ideaInput
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

        axios.post("http://localhost:8080/api/idea", formData, 
        )
        .then(function(response) { console.log(response); })
        .catch((error) => { console.log(error.response); })

        setIsValid(false);
        setIdeaInput("");
        setFileExist(false);
        setFileList([]);
        setPost(post+1);
    }

    const [ideaLists, setIdeaLists] = useState([]);

    const getIdeaBoardInfo = () => {
        axios.get("http://localhost:8080/api/ideaBoard", {
            params: {
                ideaBoardId: 1
            }
        })
        .then(function(response) { 
            console.log(response);
            const ideas = response.data.ideas.map(idea => idea);
            setIdeaLists(ideas);

        })
        .catch((error) => { console.log(error.response); })
    }

    useEffect(() => {
        getIdeaBoardInfo();
    }, [post])


    return(
        <div className = "entire_webpage">
            <NavBar workspacename = {workspaceName} username = {userName}/>
            
            <div className = "container">
                <LeftBar />
                <MainExplorer workspaceIndex = {workspaceId}/> 
                <div className = "main_area">
                    <MainUpperBarIdeaOn chatRouter={moveToChat} ideaRouter={moveToIdea}/>

                    <div className = "main-idea">
                        <div className="idea-adding-div">
                            <div className="idea-adding-text-div">
                                <input
                                    className="idea-adding-text-input"
                                    placeholder="Share your idea to ask for feedback, collect data, or decide what to eat for lunch."
                                    value={ideaInput}
                                    //onFocus={focusOn}
                                    //onBlur={focusOff}
                                    onChange={changeHandler}/>
                            </div>
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
                                </div>
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
                    </div>
                    
                    {ideaLists.slice(0).reverse().map((cur, index) => (
                        <IdeaPost userId={userId} ideaId={index} writer={cur.user.name} date={cur.date} time={cur.time} content={cur.text}/>
                    ))}
                    <IdeaPost writer="Daeun Chung" date="2021-08-31" time="05:08:00" content="test! hehe"/>
                </div>
            </div>
        </div>
    );
}


export default IdeaScreen;