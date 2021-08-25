import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";


function WorkspaceOverall(){
    return(
        <div className = "workspace_overall">
            <div className = "round_square_btn_area">
                <div className = "big_round_square_btn" id = "Workspace_icon">D</div>
            </div>                
            <div className = "workspace_name_area">
                <div className = "workspace_name">DogPaw</div>
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
