
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from "axios";

function ChatBox(props){
    const history = useHistory();
    
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
        
        history.push({
            pathname: `/${props.userId}/${props.workspaceUrl}/${props.currentChannelIndex}/chat/${props.currentChattingIndex}`,
            state: {
                userId: props.userId,
                userName: props.userName,
                userEmail: props.userEmail,
                workspaceId: props.workspaceId,
                workspaceName: props.workspaceName,
                workspaceUrl: props.workspaceUrl,
                currentChattingIndex : props.currentChattingIndex,
                currentChannelIndex: props.currentChannelIndex
            }
        })

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