import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";


function WorkspaceOverall(){
    /*
    const[Workspacename, setWorkspacename] = useState("");
    
    const getWorkspacename = async(uid) => {
        //async 이렇게 하는거 맞나..?

        //https://darrengwon.tistory.com/275 참고

        const workspacename = await axios.get('http://localhost:8080/api/workspace',{
            data:{
                "userId": uid
            }
        }).then(response => {setWorkspacename(workspacename)})
    }

    useEffect(()=>{
        getWorkspacename("123")
        //should be variable

    },[]);
    */
    return(
        <div className = "workspace_overall">
            <div className = "round_square_btn_area">
                <div className = "big_round_square_btn" id = "Workspace_icon">D</div>
            </div>                
            <div className = "workspace_name_area">
                <div className = "workspace_name">Workspacename</div>
            </div>

            <div className = "toggle_btn_area">
                <div className = "toggle_btn">
                    <FontAwesomeIcon icon={faAngleDown} className="search" />
                </div>
            </div>
        </div>
    );
}


export default WorkspaceOverall;
