import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBell } from "@fortawesome/free-solid-svg-icons";

function Channelblock(){

    const [Channels, setChannels] =  useState([]);

    const getChannels = async(uid) => {
        await axios.get('http://localhost:8080/api/workspace',{
            data:{
                "userId": uid
            }
        }).then(({ channelList })=>setChannels(Channels));
    }

    useEffect(()=>{
        getChannels("123")
    },[]);

    return(
        <div>
            {Channels.map((channels, index)=>(
                <div className = "explorer_lists" id = "channel">
                    <div className = "explorer_list_star">
                        <FontAwesomeIcon icon={faStar} className="search" />
                    </div>
                    <div className = "list_text_btn">General</div>
                    <div className = "explorer_list_ring">
                        <FontAwesomeIcon icon={faBell} className="search" />    
                    </div>
                </div>
            ))}
        </div>

    );
/*
    return(
        <div>

            <div className = "explorer_lists" id = "channel">
                <div className = "explorer_list_star">
                    <FontAwesomeIcon icon={faStar} className="search" />
                </div>
                <div className = "list_text_btn">General</div>
                <div className = "explorer_list_ring">
                    <FontAwesomeIcon icon={faBell} className="search" />    
                </div>
            </div>
        
        </div>

);
*/
}

export default Channelblock;

