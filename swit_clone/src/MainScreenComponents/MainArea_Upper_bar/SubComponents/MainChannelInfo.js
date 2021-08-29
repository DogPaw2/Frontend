import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleDown} from "@fortawesome/free-solid-svg-icons";
//http://localhost:8080/api/channel

function MainChannelInfo(){
    const [Channelname, setChannelname] = useState('');

    const getUsername = async(uid) => {
        const channelname = await axios.get('http://localhost:8080/api/channel',{
            data:{
                "userId": uid
            }
        }).then(response => {setChannelname(channelname)})
    }

    useEffect(()=>{
        getUsername("123")
        //should be variable
    },[]);

    return(
        <div className = "infos">
            <div className = "toggle_btn_area" id="star">
                <div className = "toggle_btn" >
                    <FontAwesomeIcon icon={faStar} className="search" />
                </div>
            </div>
            <div className ="channel_name_area">
                <div className = "channel_name">{Channelname}</div>
            </div>
            
            <div className = "toggle_btn_area">
                <div className = "toggle_btn">
                    <FontAwesomeIcon icon={faAngleDown} className="search" />
                </div>
            </div>
        </div>
    );

}

export default MainChannelInfo;

