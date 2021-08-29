import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

function RightPanel(){
    return(
        <div className = "right_panel">
            <div className = "right_panel_btn_div">
                <div className = "right_panel_btn_area">
                    <div className = "right_panel_btn">
                        <FontAwesomeIcon icon={faWindowMaximize} className="search" />
                    </div>
                </div>
            </div>
            <div className = "right_panel_else_div">
            </div>
        </div>
    );
}

export default RightPanel;

