import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from 'react-router-dom';
import './Join.css';
import 'url-search-params-polyfill';

function Join() {
    const location = useLocation();
    const history = useHistory();

    const [userId, setUserId] = useState(0);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [workspaceId, setWorkspaceId] = useState(0);
    const [workspaceName, setWorkspaceName] = useState("");
    const [workspaceUrl, setWorkspaceUrl] = useState("");

    useEffect(() => {
        const arr = location.pathname.split('/');
        console.log(arr);

        setUserId(arr[2]);
        const userList = JSON.parse(localStorage.getItem("users"));
        Object.entries(userList).map((user) => {
            if (user[1].userId == arr[2]) {
                setUserName(user[1].userName);
                setUserEmail(user[1].userEmail);
            }
        })

        setWorkspaceId(arr[3]);
        axios.get("http://localhost:8080/api/workspace",{
            params:{
                workspaceId : arr[3]
            }
        })
        .then((response) => {
            console.log(response);
            setWorkspaceName(response.data.workspace.name);
            setWorkspaceUrl(response.data.workspace.url);
        })
        .catch((error) => {console.log(error.response);})

    }, [])

    return (
        <div className="join-content-div">
            <p className="join-content-text">WELCOME!</p>
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
            }}>[{workspaceName}]</button>
        </div>
        
    );
}

export default Join;