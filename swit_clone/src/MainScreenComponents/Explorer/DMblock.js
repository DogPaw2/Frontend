import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBell } from "@fortawesome/free-solid-svg-icons";

function DMblock(props){

    const [DMList, setDMList] = useState([]);
    const [currentUserIndex, setcurrentUserIndex] = useState(props.userIndex);

    const getDMs = () => {

        axios.get("http://localhost:8080/api/messageroomall",{
            params:{
                userId : 1
            }
        }
        ).then(response => {
            console.log(response.data);
            setDMList(response.data.userMessageRoomList.map(curmsgroom => curmsgroom));
            console.log(DMList);
        })
    }

    useEffect(()=>{
        getDMs();
    },[]);


    return(
        <div>
            {DMList.map((curmsgroom,index)=>(
                <div className = "explorer_lists" id = "DM" key = {index} onClick = {(event)=>{
                    props.setischatareaOn(false);
                    props.setcurrentMsgroom(curmsgroom);
                    }}>
                    <div className = "explorer_list_star">
                        <FontAwesomeIcon icon={faStar} className="search" />
                    </div>
                    <div className = "list_text_btn">{curmsgroom.user.name}</div>
                    <div className = "explorer_list_ring">
                        <FontAwesomeIcon icon={faBell} className="search" />
                    </div>
                </div>  
            ))}
        </div>    

    );
}

export default DMblock;
