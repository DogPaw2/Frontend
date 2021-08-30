import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

function LeftBar(){
    return(
        <div className = "left_bar">
            <div className = "left_toolbar">
                <div className = "round_square_btn_area">
                    <div className = "big_round_square_btn" id="channel_box">
                        <FontAwesomeIcon icon={faComment} className="search" />
                    </div>
                </div>
                <div className = "round_square_btn_area">
                    <div className = "big_round_square_btn" id="project_box">
                        <FontAwesomeIcon icon={faCheckSquare} className="search" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftBar;
