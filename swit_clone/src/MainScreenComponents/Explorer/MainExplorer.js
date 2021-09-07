import React , {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faPlus, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import Channelblock from './Channelblock';
import DMblock from './DMblock';
import ChannelCreateModal from '../Modal/Modal';

function MainExplorer(props){
    //explorer itself
    const [isOpen, setExplorer] = useState(false);

    const toggle = () => {
        setExplorer(isOpen => !isOpen);
    }

    //modal
    const [ modalOpen, setModalOpen ] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
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
                        <div className = "explorer_add_btn" onClick={openModal} id = "add_channel">
                            <FontAwesomeIcon icon={faPlus} className="search" />
                        </div>
                        <React.Fragment>
                            <ChannelCreateModal open={ modalOpen } close={ closeModal } header="Modal heading">
                            </ChannelCreateModal>
                        </React.Fragment>
                        
                    </div>
                    <Channelblock workspaceIndex = {props.workspaceIndex}/>

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


