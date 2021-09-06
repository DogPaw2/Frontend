import React from 'react';

import HomeBtn from './SubComponents/HomeBtn';
import WorkspaceOverall from './SubComponents/WorkspaceOverall';
import MainScreenTopToolbar from './SubComponents/MainScreenToptoolbar';

function NavBar(props){
    
    return(
        <div className = "nav_bar">
            <HomeBtn />
            <WorkspaceOverall wpname = {props.workspacename}/>
            
            <MainScreenTopToolbar />
        </div>

    );
}

export default NavBar;

