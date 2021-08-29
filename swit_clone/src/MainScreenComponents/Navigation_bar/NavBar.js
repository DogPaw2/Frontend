import React from 'react';

import HomeBtn from './SubComponents/HomeBtn';
import WorkspaceOverall from './SubComponents/WorkspaceOverall';
import MainScreenTopToolbar from './SubComponents/MainScreenToptoolbar';

function NavBar(){
    
    return(
        <div className = "nav_bar">
            <HomeBtn />
            <WorkspaceOverall />
            <MainScreenTopToolbar />
        </div>

    );
}

export default NavBar;

