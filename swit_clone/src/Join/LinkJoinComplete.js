import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from 'react-router-dom';
import './Join.css';
import 'url-search-params-polyfill';

function LinkJoinComplete() {
    const location = useLocation();
    const history = useHistory();

    const userId = location.state.userId;
    const userName = location.state.userName;
    const userEmail = location.state.userEmail;
    const workspaceId = location.state.workspaceId;
    const workspaceName = location.state.workspaceName;
    const workspaceUrl = location.state.workspaceUrl;

    return (
        <div className="join-content-div">
            <h1>WELCOME!</h1>
            <p className="join-content-text">You've successfully joined the workspace [{workspaceName}] </p>
            <p className="join-content-text emphasis">Click on the button below to access your workspace</p>

            <button className="join-content-btn" onClick={() => {
                console.log(workspaceId, userId);
                var params = new URLSearchParams();
                params.append('workspaceId', workspaceId);
                params.append('userId', userId);
                axios.post('http://localhost:8080/api/mail/user', params)
                .then((response) => {console.log(response);})
                .catch((error) => {console.log(error.response);})
                
                history.push({
                    pathname: `/${userId}/${workspaceUrl}/1/chat/1`,
                    state: {
                        userId: userId,
                        userName: userName,
                        userEmail: userEmail,
                        workspaceId: workspaceId,
                        workspaceName: workspaceName,
                        workspaceUrl: workspaceUrl
                    }
                })
            }}>{workspaceName}</button>
        </div>
        
    );
}

export default LinkJoinComplete;