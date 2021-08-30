import React , {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faPlus, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import Channelblock from './Channelblock';
import DMblock from './DMblock';

function MainExplorer(){
    const [isOpen, setExplorer] = useState(false);
    const toggle = () => {
        setExplorer(isOpen => !isOpen);
    }
    return(
        <div className = "explorer_toggle_area">
            <div className = {isOpen ? "explorer_area_hide" : "explorer_area_show"}>
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
                    <Channelblock />

                    <div className = "explorer_text_btn_area">
                        <div className = "explorer_text_btn" id ="Direct_message">Direct_message</div>
                        <div className = "explorer_add_btn" id = "add_DM">
                            <FontAwesomeIcon icon={faPlus} className="search" />
                        </div>
                    </div>
                    <DMblock />
                    
                </div>
            </div>

            <div className = "explorer_shrink_btn" onClick={toggle}>
                    <FontAwesomeIcon icon={isOpen ? faAngleRight : faAngleLeft} className="search" size="sm"/>
            </div>

        </div>
    );
}

export default MainExplorer;


