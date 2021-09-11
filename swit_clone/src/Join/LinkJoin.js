import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';
import './Join.css';
import 'url-search-params-polyfill';

function LinkJoin() {
    const [input, setInput] = useState("");
    const inputChangeHandler = (e) => {
        if (e.target.value == "") {
            setIncorrect(false);
        }
        setInput(e.target.value);
    }

    const [workspaceId, setWorkspaceId] = useState(0);
    const [workspaceName, setWorkspaceName] = useState("");
    const [workspaceUrl, setWorkspaceUrl] = useState("");
    const [inCorrect, setIncorrect] = useState(false);
    
    const location = useLocation();
    const history = useHistory();

    const linkJoinHandler = () => {
        const userList = JSON.parse(localStorage.getItem("users"));
        Object.entries(userList).map((user) => {
            if (user[1].userEmail == input) {
                const userId = user[1].userId;
                const userName = user[1].userName;
                const userEmail = user[1].userEmail;
                history.push({
                    pathname: `/link/joined/${userId}/${workspaceId}`,
                    state: {
                        userId: userId, 
                        userName: userName,
                        userEmail: userEmail,
                        workspaceId: workspaceId,
                        workspaceName: workspaceName,
                        workspaceUrl: workspaceUrl
                    }
                })
            }
            else {
                setIncorrect(true);
            }
        })        
    }

    useEffect(() => {
        const arr = location.pathname.split('/');
        console.log(arr);

        setWorkspaceId(arr[3]);
        axios.get("http://localhost:8080/api/workspace", {
            params: {
                workspaceId: arr[3]
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
        <div className="join-email-div">
            <h2>Enter your swit email</h2>
            <h2>to join the workspace [{workspaceName}]</h2>
            <div>
                <input className="join-email-input" value={input} onChange={inputChangeHandler}></input>
                <button className="join-submit-btn" onClick={linkJoinHandler}>Submit</button>
            </div>
            { inCorrect ?
                <span>User does not exist. Check your email.</span>
            : null}
        </div>

    );
}

export default LinkJoin;