import React from 'react';

import MMainChannelInfo from './SubComponents/MMainChannelInfo';
import MChatInfoBar from './SubComponents/MChatInfoBar';

function MMainUpperBar(props){
    return(
        <div className = "workspace_info">
            <MMainChannelInfo currentMsgroom={props.currentMsgroom}/>
            <MChatInfoBar />
        </div>
    );
}

export default MMainUpperBar;
