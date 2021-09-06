import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InvitationArea(){
    const [ChannelList, setChannelList] = useState({});

    const getChannels = async() => {
        await axios.get("http://localhost:8080/api/channel",{
            params:{
                channelId : 1
            }
        }
        ).then(response => {
            console.log(response.data.channel);
            setChannelList(response.data.channel);
            
        })
    }

    useEffect(()=>{
        getChannels();
    },[]);
    return(
        <div className= "invite_area">
            <div className= "chatting_room_member">
                @Lee
            </div>

            <div className = "invite_text">
                has entered
            </div>

            <div className = "chatting_room_name">
                {ChannelList.name}
            </div>                            
        </div>
    );
}

export default InvitationArea;