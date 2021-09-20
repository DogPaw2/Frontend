import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBell } from "@fortawesome/free-solid-svg-icons";

function Channelblock(props){
    
    const [WorkspaceChannelList, setWorkspaceChannelList] = useState([]);


    const getOneworkspace = () => {
        axios.get("http://localhost:8080/api/workspace/",{
            params:{
                workspaceId : props.workspaceIndex
            }
        }
        ).then(response => {

            const cur_channel = response.data.workspace.channels.map(cur => cur);
            setWorkspaceChannelList(cur_channel)
        })
    }

    useEffect(()=>{
        getOneworkspace();
    },[]);

    return(
        <div>
            {WorkspaceChannelList.map((cur,index)=>(
                <div key={index} className = "explorer_lists" id = "channel" onClick ={(event) => {
                        props.setChannelIndex(cur.id)
                        props.setChattingIndex(cur.chatting.id)
                        }}>
                    <div className = "explorer_list_star">
                        <FontAwesomeIcon icon={faStar} className="search" />
                    </div>
                    <div className = "list_text_btn">{cur.name}</div>
                    <div className = "explorer_list_ring">
                        <FontAwesomeIcon icon={faBell} className="search" />    
                    </div>
                </div>
            )) }
        </div>
    );
}

export default Channelblock;

