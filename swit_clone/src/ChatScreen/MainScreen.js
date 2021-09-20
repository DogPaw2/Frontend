import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './MainScreen.css';

//MainScreenComponents
import NavBar from '../MainScreenComponents/Navigation_bar/NavBar';
import LeftBar from '../MainScreenComponents/Left_bar/LeftBar'
import MainUpperBar from '../MainScreenComponents/MainArea_Upper_bar/MainUpperBar';
import MainExplorer from '../MainScreenComponents/Explorer/MainExplorer';

//ChatComponents
import DateLine from '../ChatComponents/DateLine';
import InvitationArea from '../ChatComponents/InvitationArea';
import ChattingInput from '../ChatComponents/ChattingInput';
import ChatBox from '../ChatComponents/ChatBox';

//React-Router
import { useHistory, useLocation } from 'react-router-dom';

function MainScreen(){

    const location = useLocation();
    
    const userId = location.state.userId;
    const userName = location.state.userName; //props 추가
    const userEmail = location.state.userEmail; //props 추가
    const workspaceId = location.state.workspaceId; //props 추가
    const workspaceName = location.state.workspaceName;
    //const workspaceUrl = location.state.workspaceUrl;
    const [workspaceUrl, setWorkspaceUrl] = useState(location.state.workspaceUrl);
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

    
    const [ChatList, setChatList] = useState([]);

    const getChat = async() => {
        await axios.get("http://localhost:8080/api/chatting",{
            params:{
                chattingId : currentChattingIndex
            }
        }
        ).then(response => {
            console.log(response.data.chats);
            setChatList(response.data.chats.map(cur => cur));
        })
    }

    useEffect(()=>{
        getChat();
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
    },[currentChattingIndex]);
    return(
        <div className = "entire_webpage">
            {console.log(currentChannelIndex, currentChattingIndex)}
            <NavBar workspacename = {workspaceName} username = {userName} userId={userId} userEmail={userEmail}/>
            <div className = "container">
                <LeftBar />
                <MainExplorer workspaceIndex = {workspaceId} setChannelIndex = {setChannelIndex} setChattingIndex = {setChattingIndex}/> 
                <div className = "main_area">
                    <MainUpperBar chatRouter={moveToChat} ideaRouter={moveToIdea} currentChannelIndex={currentChannelIndex}/>

                    <div className = "main_chatting">
                        <ChattingInput userId = {userId} currentChattingIndex = {currentChattingIndex}/>
                        {ChatList.slice(0).reverse().map((cur,index)=>(
                            <ChatBox  cur={cur} index = {index} userId={userId} userName={userName} useremail={userEmail} workspaceId={workspaceId} workspaceName={workspaceName} workspaceUrl={workspaceUrl} currentChannelIndex={currentChannelIndex} currentChattingIndex = {currentChattingIndex} />  
                        ))}
                        <DateLine />
                        <InvitationArea username = {userName} currentChannelIndex = {currentChannelIndex}/>     
                    </div>

                </div>
            </div>
        </div>
    );
}


export default MainScreen;