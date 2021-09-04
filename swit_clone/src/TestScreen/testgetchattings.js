//! chatting != message / 채팅은 채널 채팅, 메시지는 DM

import React, { useState, useEffect } from 'react';
import axios from 'axios';


function GetChat(){
    const [ChatList, setChatList] = useState([]);

    const getChat = async() => {
        await axios.get("http://localhost:8080/api/chatting",{
            params:{
                chattingId : 1 
            }
        }
        ).then(response => {
            console.log(response.data.chats);
            setChatList(response.data.chats.map(cur => cur));
        })
    }

    useEffect(()=>{
        getChat();
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