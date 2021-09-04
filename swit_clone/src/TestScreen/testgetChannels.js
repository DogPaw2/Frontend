import React, { useState, useEffect } from 'react';
import axios from 'axios';



function GetChannels(){
    const [ChatList, setChatList] = useState([]);

    const getChannels = async() => {
        await axios.get("http://localhost:8080/api/channel",{
            params:{
                channelId : 2
            }
        }
        ).then(response => {
            console.log(response.data);
            
        })
    }

    useEffect(()=>{
        getChannels();
    },[]);

    return(
        <div>
        </div>
    );

}

export default GetChannels;