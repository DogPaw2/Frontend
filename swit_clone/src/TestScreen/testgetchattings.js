//! chatting != message / 채팅은 채널 채팅, 메시지는 DM
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function GetChat(){
    const [ChatList, setChatList] = useState([]);

    const getChats = () => {
        axios.get("http://localhost:8080/api/chatting", {
            params: {
                chattingId: 1
            }
        })
        .then(function(response) { 
            console.log(response);
            const chats = response.data.chats.map(cur => cur);
            setChatList(chats);

        })
        .catch((error) => { console.log(error.response); })
    }

    useEffect(()=>{
        getChats();
    },[]);

    return(
        <div>
            <div>
                Chat GET Result : 
                {ChatList.map((cur) => (
                    <div key = {cur.time}>
                        <div>=============</div>
                        <div>NAME : {cur.user.name}</div>
                        <div>TIME : {cur.time}</div>
                        <div>{cur.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default GetChat;