import React from 'react';
import './IdeaScreen.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus, faAt, faCaretSquareDown, faSmile} from "@fortawesome/free-solid-svg-icons";

//MainScreenComponents
import NavBar from '../MainScreenComponents/Navigation_bar/NavBar';
import LeftBar from '../MainScreenComponents/Left_bar/LeftBar';
import MainUpperBar from '../MainScreenComponents/MainArea_Upper_bar/MainUpperBar';
import MainExplorer from '../MainScreenComponents/Explorer/MainExplorer';
import RightPanel from '../MainScreenComponents/Right_panel/RightPanel';

import IdeaPost from './IdeaPost';

function IdeaScreen(){
    return(
        <div className = "entire_webpage">
            <NavBar />
            <div className = "container">
                <LeftBar />
                <MainExplorer />    
                <div className = "main_area">
                    <MainUpperBar />

                    <div className = "main-idea">
                        <div className="idea-adding-div">
                            <div className="idea-adding-text-div">
                                <input className="idea-adding-text-input" placeholder="Share your idea to ask for feedback, collect data, or decide what to eat for lunch."/>
                            </div>
                            <div className="idea-adding-etc-div">
                                <FontAwesomeIcon icon={faPlus} className="search" size="1.5x"/>
                                <div className="white-space-div"></div>
                                <FontAwesomeIcon icon={faCaretSquareDown} className="search" />
                                <FontAwesomeIcon icon={faAt} className="search" />
                                <FontAwesomeIcon icon={faSmile} className="search" />
                            </div>
                            <div className="idea-adding-btn-div">
                                <button className="idea-btn idea-cancel-btn">Cancel</button>
                                <button className="idea-btn idea-confirm-btn">Confirm</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <RightPanel />
            </div>
        </div>
    );
}


export default IdeaScreen;