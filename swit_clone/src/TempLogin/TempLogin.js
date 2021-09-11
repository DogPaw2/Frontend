import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAccordionButton } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './TempLogin.css';

function TempLogin() {
    const localData = JSON.parse(localStorage.getItem("users"));
    const [userList, setUserList] = useState(localData ? localData : []);
    const [userId, setUserId] = useState(localData ? localData.length : 1);

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    
    const postUser = () => {
        axios.post("http://localhost:8080/api/user", {
            name: userName
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error.response))

        if (localData) {
            const newUser = [...userList, {
                userId: userId,
                userName: userName,
                userEmail: userEmail
            }]
            setUserList(newUser);
            localStorage.setItem("users", JSON.stringify(newUser));    
            setUserId(userId+1);
        }
        else {
            const newUser = [{
                userId: userId,
                userName: userName,
                userEmail: userEmail
            }]
            setUserList(newUser);
            localStorage.setItem("users", JSON.stringify(newUser));
            setUserId(userId+1);
        }
    }

    const history = useHistory();
    const moveSwitHome = (cur) => {

        history.push({
            pathname: `/swit-home/${cur[1].userId}`,
            state: {
                userId: cur[1].userId,
                userName: cur[1].userName,
                userEmail: cur[1].userEmail
            }
        })
    }
    
    useEffect(() => {
    }, [])

    return (
        <div className="temp-login-div">
            
            <h2>***** POST USER *****</h2>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="type user name" />
            <input type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="type user email" />
            <button className="post-confirm-btn" onClick={postUser}>confirm</button>
            <h2>***************************</h2>
            <br/>
            <br/>
            <h3>Click on the buttons below to LOGIN</h3>
            { Object.entries(userList).map((cur) => (
                <div>
                    <button className="login-btn" onClick={() => moveSwitHome(cur)}>{cur[1].userId} {cur[1].userName}</button>
                </div>
            ))}
            
        </div>
    );
}

export default TempLogin;