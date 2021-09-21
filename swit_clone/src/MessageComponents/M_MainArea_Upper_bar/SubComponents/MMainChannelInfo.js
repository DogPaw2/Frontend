import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleDown} from "@fortawesome/free-solid-svg-icons";


function MMainChannelInfo(props){

    useEffect(()=>{
        //console.log(props.currentMsgroom.user.name)
    },[props.currentMsgroom]);

    return(
        <div className = "infos">
            <div className = "toggle_btn_area" id="star">
                <div className = "toggle_btn" >
                    <FontAwesomeIcon icon={faStar} className="search" />
                </div>
            </div>
            <div className ="channel_name_area">
                <div className = "channel_name">{props.currentMsgroom.user.name}</div>
            </div>
            
            <div className = "toggle_btn_area">
                <div className = "toggle_btn">
                    <FontAwesomeIcon icon={faAngleDown} className="search" />
                </div>
            </div>
        </div>
    );

}

export default MMainChannelInfo;

