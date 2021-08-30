import React, {  useEffect } from 'react';
import axios from 'axios';

/* APIS
//유저
http://localhost:8080/api/user

//워크스페이스
http://localhost:8080/api/workspace

//채팅
http://localhost:8080/api/chatting
http://localhost:8080/api/chat
http://localhost:8080/api/comment

//DM
http://localhost:8080/api/messageroom
hhttp://localhost:8080/api/message

//아이디어
http://localhost:8080/api/idea
http://localhost:8080/api/ideaBoard

//채널
http://localhost:8080/api/channel
*/

function Postuser(){

    const POST_USER = () =>{
        axios.post("http://localhost:8080/api/user",
            {"name" : "hi"})
        .then(console.log("Userpost_ok"));
    }

    useEffect(()=>{
        POST_USER()
    },[]);
    
    return(
        <button onClick = {POST_USER}>Post User</button>
    );
}


export default Postuser;