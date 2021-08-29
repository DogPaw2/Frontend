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


function MainScreen(){
    return(

        <div className = "entire_webpage">
            <NavBar />
            <div className = "container">
                <LeftBar />
                <MainExplorer /> 
                <div className = "main_area">
                    <MainUpperBar />

                    <div className = "main_chatting">
                        <ChattingInput />
                        <DateLine />
                        <InvitationArea />
                        <ChatBox />       
                    </div>

                </div>
                <RightPanel />
            </div>
        </div>
    );
}


export default MainScreen;