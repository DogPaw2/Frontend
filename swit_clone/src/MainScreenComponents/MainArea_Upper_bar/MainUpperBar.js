import React from 'react';

import MainChannelInfo from './SubComponents/MainChannelInfo';
import ChatNIdeaSwitch from './SubComponents/ChatNIdeaSwitch';
import ChatInfoBar from './SubComponents/ChatInfoBar';

function MainUpperBar(props){
    const { chatRouter, ideaRouter } = props;

    return(
        <div className = "workspace_info">
            <MainChannelInfo />
            <ChatNIdeaSwitch chatRouter={chatRouter} ideaRouter={ideaRouter}/>
            <ChatInfoBar />
        </div>
    );
}

export default MainUpperBar;
