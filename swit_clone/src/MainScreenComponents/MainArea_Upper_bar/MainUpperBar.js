import React, { useEffect, useState } from 'react';
import axios from 'axios';


import MainChannelInfo from './SubComponents/MainChannelInfo';
import ChatNIdeaSwitch from './SubComponents/ChatNIdeaSwitch';
import ChatInfoBar from './SubComponents/ChatInfoBar';

function MainUpperBar(){
    return(
        <div className = "workspace_info">
            <MainChannelInfo />
            <ChatNIdeaSwitch />
            <ChatInfoBar />
        </div>
    );
}

export default MainUpperBar;
