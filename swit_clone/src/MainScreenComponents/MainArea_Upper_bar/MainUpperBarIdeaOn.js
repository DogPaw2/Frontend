import React from 'react';

import MainChannelInfo from './SubComponents/MainChannelInfo';
import ChatNIdeaSwitchIdeaOn from './SubComponents/ChatNIdeaSwitchIdeaOn';
import ChatInfoBar from './SubComponents/ChatInfoBar';

function MainUpperBarIdeaOn(){
    return(
        <div className = "workspace_info">
            <MainChannelInfo />
            <ChatNIdeaSwitchIdeaOn />
            <ChatInfoBar />
        </div>
    );
}

export default MainUpperBarIdeaOn;
