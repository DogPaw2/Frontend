import React from 'react';
import './MainScreen.css';

//MainScreenComponents
import NavBar from '../MainScreenComponents/Navigation_bar/NavBar';
import LeftBar from '../MainScreenComponents/Left_bar/LeftBar'
import MainUpperBar from '../MainScreenComponents/MainArea_Upper_bar/MainUpperBar';
import MainExplorer from '../MainScreenComponents/Explorer/MainExplorer';
import RightPanel from '../MainScreenComponents/Right_panel/RightPanel';

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
    const workspaceName = location.state.workspaceName;
    const workspaceUrl = location.state.workspaceUrl;
    
    const history = useHistory();

    const moveToChat = () => {
        history.push({
            pathname: `/${userId}/${workspaceUrl}/general/chat`,
            state: {
                userId: userId,
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
                workspaceName: workspaceName,
                workspaceUrl: workspaceUrl
            }
        })
    }

    return(
        <div className = "entire_webpage">
            <NavBar workspacename = {workspaceName} />
            <div className = "container">
                <LeftBar />
                <MainExplorer /> 
                <div className = "main_area">
                    <MainUpperBar chatRouter={moveToChat} ideaRouter={moveToIdea}/>

                    <div className = "main_chatting">
                        <ChattingInput />
                        <ChatBox />  
                        <DateLine />
                        <InvitationArea />     
                    </div>

                </div>
                <RightPanel />
            </div>
        </div>
    );
}


export default MainScreen;