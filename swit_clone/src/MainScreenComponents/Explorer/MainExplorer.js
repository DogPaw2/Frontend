import React , {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faPlus, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import Channelblock from './Channelblock';
import DMblock from './DMblock';
import ChannelCreateModal from '../Modal/ChannelCreateModal';
import DMCreateModal from '../Modal/DMCreateModal';
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

    //DMmodal
    const [ DMmodalOpen, setDMModalOpen ] = useState(false);

    const openDMModal = () => {
        setDMModalOpen(true);
    }
    const closeDMModal = () => {
        setDMModalOpen(false);
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
                            <ChannelCreateModal open={ modalOpen } close={ closeModal } workspaceIndex={props.workspaceIndex} userId={props.userId} header="Modal heading">
                            </ChannelCreateModal>
                        </React.Fragment>
                        
                    </div>
                    <Channelblock workspaceIndex = {props.workspaceIndex} setChannelIndex = {props.setChannelIndex} setChattingIndex={props.setChattingIndex} setischatareaOn={props.setischatareaOn}/>

                    <div className = "explorer_text_btn_area">
                        <div className = "explorer_text_btn" id ="Direct_message">Direct_message</div>
                        <div className = "explorer_add_btn"onClick={openDMModal} id = "add_DM">
                            <FontAwesomeIcon icon={faPlus} className="search" />
                        </div>
                        <React.Fragment>
                            <DMCreateModal open={ DMmodalOpen } close={ closeDMModal } workspaceIndex={props.workspaceIndex} userId={props.userId} header="Modal heading">
                            </DMCreateModal>
                        </React.Fragment>
                    </div>
                    <DMblock  userIndex = {props.userId} setcurrentMsgroom = {props.setcurrentMsgroom} setischatareaOn={props.setischatareaOn}/>
                    
                </div>
            </div>

            <div className = "explorer_shrink_btn" onClick={toggle}>
                    <FontAwesomeIcon icon={isOpen ? faAngleRight : faAngleLeft} className="search" size="sm"/>
            </div>

        </div>
    );
}

export default MainExplorer;


