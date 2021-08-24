import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faPlus, faStar, faBell } from "@fortawesome/free-solid-svg-icons";
class template extends Component{
    render(){
        return(
            <div className = "explorer_area">
                <div className = "explorer">
                    <div className = "explorer_channels_area" id = "explore_channels">
                        <div className = "explorer_channels_icon">
                            <FontAwesomeIcon icon={faLayerGroup} className="search" />
                            
                        </div>
                        <div className = "explorer_channels">
                            explore_channels
                        </div>
                    </div>
                    <div className = "explorer_text_btn_area">
                        <div className = "explorer_text_btn" id ="channel">Channel</div>
                        <div className = "explorer_add_btn" id = "add_channel">
                            <FontAwesomeIcon icon={faPlus} className="search" />
                        </div>
                    </div>
                    <div className = "explorer_lists" id = "channel">
                        <div className = "explorer_list_star">
                            <FontAwesomeIcon icon={faStar} className="search" />
                        </div>
                        <div className = "list_text_btn">General</div>
                        <div className = "explorer_list_ring">
                            <FontAwesomeIcon icon={faBell} className="search" />    
                        </div>
                    </div>

                    <div className = "explorer_text_btn_area">
                        <div className = "explorer_text_btn" id ="Direct_message">Direct_message</div>
                        <div className = "explorer_add_btn" id = "add_DM">
                            <FontAwesomeIcon icon={faPlus} className="search" />
                        </div>
                    </div>

                    <div className = "explorer_lists" id = "DM">
                        <div className = "explorer_list_star">
                            <FontAwesomeIcon icon={faStar} className="search" />
                        </div>
                        <div className = "list_text_btn">(me)</div>
                        <div className = "explorer_list_ring">
                            <FontAwesomeIcon icon={faBell} className="search" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default template;


