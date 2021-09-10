
import React, {useEffect, useState} from 'react';
import axios from "axios";

function ChatBox(props){
    const [ChatList, setChatList] = useState([]);

    const getChat = async() => {
        await axios.get("http://localhost:8080/api/chatting",{
            params:{
                chattingId : props.currentChattingIndex
            }
        }
        ).then(response => {
            console.log(response.data.chats);
            setChatList(response.data.chats.map(cur => cur));
        })
    }

    useEffect(()=>{
        getChat();
    },[props.currentChattingIndex]);

    return(
        <div>
            {ChatList.map((cur,index)=>(
                <div className = "chatbox" key={index}>
                    <div className = "profile_circle"></div>

                    <div className = "chat_area">
                        <div className = "chatter_info_area">
                            <div className = "chatter_name">
                                    {cur.user.name}
                            </div>

                            <div className="wrote_time">
                                    {cur.time}
                            </div>
                        </div>

                        <div className = "chat_content">
                            {cur.text}
                        </div>
                    </div>
                </div>
            ))}
        </div>

    ); 
}

export default ChatBox;