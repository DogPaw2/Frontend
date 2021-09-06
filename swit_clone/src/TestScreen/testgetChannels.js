import React, { useState, useEffect } from 'react';
import axios from 'axios';



function GetChannel(){
    const [ChannelList, setChannelList] = useState([]);

    const getChannels = async() => {
        await axios.get("http://localhost:8080/api/channel",{
            params:{
                channelId : 1
            }
        }
        ).then(response => {
            console.log(response.data.channel);
            
        })
    }

    useEffect(()=>{
        getChannels();
    },[]);

    return(
        <div>
            <div>
            </div>
        </div>
    );

}

export default GetChannel;