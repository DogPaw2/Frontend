import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";


function WorkspaceOverall(props){
    
    return(
        <div className = "workspace_overall">
            <div className = "round_square_btn_area">
                <div className = "big_round_square_btn" id = "Workspace_icon">{props.wpname.substring(0,1)}</div>
            </div>                
            <div className = "workspace_name_area">
                <div className = "workspace_name">{props.wpname}</div>
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
