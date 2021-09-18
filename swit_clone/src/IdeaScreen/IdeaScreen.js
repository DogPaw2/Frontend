import React, { useEffect, useState } from 'react';
import axios from "axios";
import './IdeaScreen.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAt, faCaretSquareDown, faSmile, faFileDownload} from "@fortawesome/free-solid-svg-icons";

//MainScreenComponents
import NavBar from '../MainScreenComponents/Navigation_bar/NavBar';
import LeftBar from '../MainScreenComponents/Left_bar/LeftBar';
import MainUpperBarIdeaOn from '../MainScreenComponents/MainArea_Upper_bar/MainUpperBarIdeaOn';
import MainExplorer from '../MainScreenComponents/Explorer/MainExplorer';
import RightPanel from '../MainScreenComponents/Right_panel/RightPanel';

import IdeaPost from './IdeaPost';

//React-Router
import { useHistory, useLocation } from 'react-router-dom';
import useDidMountEffect from '../TestScreen/useDidMountEffect';

function IdeaScreen(){

    const location = useLocation();
    
    const userId = location.state.userId;
    const userName = location.state.userName;
    const userEmail = location.state.userEmail;
    const workspaceId = location.state.workspaceId;
    const workspaceName = location.state.workspaceName;
    const workspaceUrl = location.state.workspaceUrl;
    const [currentChannelIndex, setChannelIndex] = useState(1);
    const [currentChattingIndex, setChattingIndex] = useState(1);
    
    const history = useHistory();

    const getcurrentWorkspace = () =>
    {
        axios.get("http://localhost:8080/api/workspace/",{
            params:{
                workspaceId : workspaceId
            }
        }
        ).then(response => {
            const cur_channel_id = response.data.workspace.channels[0].id;
            const cur_chatting_id = response.data.workspace.channels[0].chatting.id;
            console.log("cur_channel_id  = " + cur_channel_id);
            console.log("cur_channel_id  = " + cur_chatting_id);

            setChannelIndex(cur_channel_id);
            setChattingIndex(cur_chatting_id);
        })
    }

    const moveToChat = () => {
        history.push({
            pathname: `/${userId}/${workspaceUrl}/${currentChannelIndex}/chat/${currentChattingIndex}`,
            state: {
                userId: userId,
                userName: userName,
                userEmail: userEmail,
                workspaceId: workspaceId,
                workspaceName: workspaceName,
                workspaceUrl: workspaceUrl,
                currentChattingIndex : currentChattingIndex,
                currentChannelIndex: currentChannelIndex
            }
        })
    }

    const moveToIdea = () => {
        history.push({
            pathname: `/${userId}/${workspaceUrl}/${currentChannelIndex}/idea/${currentChattingIndex}`,
            state: {
                userId: userId,
                userName: userName,
                userEmail: userEmail,
                workspaceId: workspaceId,
                workspaceName: workspaceName,
                workspaceUrl: workspaceUrl,
                currentChattingIndex : currentChattingIndex,
                currentChannelIndex: currentChannelIndex
            }
        })
    }



    const [isValid, setIsValid] = useState(false);
    const [ideaInput, setIdeaInput] = useState("");

    const [fileList, setFileList] = useState([]);
    const [fileExist, setFileExist] = useState(false);

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

    /*
    const chatPostHandler = (e) => {
        
        const formData = new FormData();
        const data = {
            chattingId: currentChattingIndex,
            userId: userId,
            text: "Posted a new idea"
        }
        formData.append("dto", new Blob([JSON.stringify(data)], {type: "application/json"}))
        formData.append("files", new Blob([]));

        axios.post("http://localhost:8080/api/chat", formData, 
        )
        .then(function(response) { console.log(response); })
        .catch((error) => { console.log(error.response); })
        */

    const confirmHandler = (e) => {
        const formData = new FormData();
        if (ideaInput == "") {
            const data = {
                ideaBoardId: currentChattingIndex,
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
                ideaBoardId: currentChattingIndex,
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
        //chatPostHandler();
        
        setIsValid(false);
        setIdeaInput("");
        setFileExist(false);
        setFileList([]);


        history.go(0);
    }

    const [ideaLists, setIdeaLists] = useState([]);

    const getIdeaBoardInfo = () => {
        axios.get("http://localhost:8080/api/ideaBoard", {
            params: {
                ideaBoardId: currentChattingIndex
            }
        })
        .then(function(response) { 
            console.log(response);
            const ideas = response.data.ideas.map(idea => idea);
            setIdeaLists(ideas);

        })
        .catch((error) => { console.log(error.response); })
    }

    useDidMountEffect(() => {
        getcurrentWorkspace();
    }, []);

    useEffect(() => {
        getIdeaBoardInfo();
        history.push({
            pathname: `/${userId}/${workspaceUrl}/${currentChannelIndex}/idea/${currentChattingIndex}`,
            state: {
                userId: userId,
                userName: userName,
                userEmail: userEmail,
                workspaceId: workspaceId,
                workspaceName: workspaceName,
                workspaceUrl: workspaceUrl,
                currentChattingIndex : currentChattingIndex,
                currentChannelIndex: currentChannelIndex
            }
        })        
    }, [currentChattingIndex])


    return(
        <div className = "entire_webpage">
            <NavBar workspacename = {workspaceName} username = {userName} userId={userId} userEmail={userEmail}/>
            
            <div className = "container">
                <LeftBar />
                <MainExplorer workspaceIndex = {workspaceId} setChannelIndex = {setChannelIndex} setChattingIndex = {setChattingIndex}/> 
                <div className = "main_area">
                    <MainUpperBarIdeaOn chatRouter={moveToChat} ideaRouter={moveToIdea} currentChannelIndex={currentChannelIndex}/>

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
                                            <FontAwesomeIcon icon={faFileDownload} size="2x"/>
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
                    
                    {ideaLists.slice(0).reverse().map((cur) => (
                        <IdeaPost userId={userId} channelId={currentChannelIndex} ideaBoardId={currentChannelIndex} ideaId={cur.id} writer={cur.user.name} date={cur.date} time={cur.time} content={cur.text} files={cur.fileList} comments={cur.comments}/>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default IdeaScreen;