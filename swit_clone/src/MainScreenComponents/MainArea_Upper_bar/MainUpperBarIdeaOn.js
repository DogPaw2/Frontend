import React from 'react';

import MainChannelInfo from './SubComponents/MainChannelInfo';
import ChatNIdeaSwitchIdeaOn from './SubComponents/ChatNIdeaSwitchIdeaOn';
import ChatInfoBar from './SubComponents/ChatInfoBar';

function MainUpperBarIdeaOn(props){
    const { chatRouter, ideaRouter } = props;

    return(
        <div className = "workspace_info">
            <MainChannelInfo />
            <ChatNIdeaSwitchIdeaOn chatRouter={chatRouter} ideaRouter={ideaRouter} />
            <ChatInfoBar />
        </div>
    );
}

export default MainUpperBarIdeaOn;
