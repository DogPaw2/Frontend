import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faAt, faStar, faFile, faUserFriends } from "@fortawesome/free-solid-svg-icons";

import SearchArea from './SearchArea';
import UserInfoCircle from './UserInfoCircle';
 
function MainScreenTopToolbar(){
    return(

        <div className = "top_toolbar">
            <div className = "round_square_btn_area" id="Activity">
                <div className = "round_btn" >
                    <FontAwesomeIcon icon={faBell} className="search" />
                </div>
            </div>

            <div className = "round_square_btn_area" id="Mention">
                <div className = "round_btn" >
                    <FontAwesomeIcon icon={faAt} className="search" />    
                </div>
            </div>

            <div className = "round_square_btn_area" id="Favorite">
                <div className = "round_btn" >
                    <FontAwesomeIcon icon={faStar} className="search" />
                </div>
            </div>

            <div className = "round_square_btn_area" id="File">
                <div className = "round_btn">
                    <FontAwesomeIcon icon={faFile} className="search" />
                    
                </div>
            </div>

            <div className = "round_square_btn_area" id="Member">
                <div className = "round_btn" >
                    <FontAwesomeIcon icon={faUserFriends} className="search" />
                </div>
            </div>

            <SearchArea />
            <UserInfoCircle />

        </div>
    );
}

export default MainScreenTopToolbar;