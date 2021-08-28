import React from 'react';
import './IdeaScreen.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faAt, faStar, faFile, faUserFriends, faComment, faCheckSquare,
    faPlus, faUser, faThumbtack, faClone, faWindowMaximize,  faCaretSquareDown, faCaretSquareRight, faSmile} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import DateLine from './ChatComponents/DateLine';
import InvitationArea from './ChatComponents/InvitationArea';
import ChatBox from './ChatComponents/ChatBox';
import WorkspaceOverall from './MainScreenComponents/WorkspaceOverall';
import SearchArea from './MainScreenComponents/SearchArea';
import UserInfoCircle from './MainScreenComponents/UserInfoCircle';
import MainExplorer from './MainScreenComponents/MainExplorer';
import MainWorkspaceInfo from './MainScreenComponents/MainWorkspaceInfo';
import HomeBtn from './MainScreenComponents/HomeBtn';
import IdeaPost from './IdeaPost';


function IdeaScreen(){
    return(
        <div className = "entire_webpage">
            <div className = "nav_bar">
                
                <HomeBtn />
                <WorkspaceOverall />

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

            </div>
            <div className = "container">
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
                <MainExplorer />
                <div className = "main_area">
                    <div className = "workspace_info">

                        <MainWorkspaceInfo />

                        <div className = "chatNidea">
                            <div className = "btn_with_belowtext_area" id = "chatting-in-idea-page">
                                <Link to="/chat">
                                    <div className = "btn_with_belowtext_btn">
                                        <FontAwesomeIcon icon={faComment} className="search" />
                                    </div>
                                    <div className = "btn_with_belowtext_text">
                                        chat
                                    </div>
                                </Link>
                            </div>
                            <div className = "btn_with_belowtext_area" id = "idea-in-idea-page">
                                <div className = "btn_with_belowtext_btn">
                                    <FontAwesomeIcon icon={faWindowMaximize} className="search" />
                                </div>
                                <div className = "btn_with_belowtext_text">
                                    idea
                                </div>
                            </div>  
                        </div>

                        <div className = "chatting_infos">
                            <div className = "btn_with_sidetext_area" id = "channel_members">
                                <div className = "btn_with_sidetext_btn">
                                    <FontAwesomeIcon icon={faUser} className="search" />
                                </div>
                                <div className = "btn_with_sidetext_text">
                                    1
                                </div>
                            </div>
                            <div className = "btn_with_sidetext_area" id = "fixed_msg">
                                <div className = "btn_with_sidetext_btn">
                                    <FontAwesomeIcon icon={faThumbtack} className="search" />
                                </div>
                                <div className = "btn_with_sidetext_text">
                                    1
                                </div>
                            </div>
                            <div className = "btn_with_sidetext_area" id = "tabs">
                                <div className = "btn_with_sidetext_btn">
                                    <FontAwesomeIcon icon={faClone} className="search" />
                                </div>
                                <div className = "btn_with_sidetext_text">
                                    1
                                </div>
                            </div>  

                        </div>
                    </div>
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
            </div>
        </div>
    );
}


export default IdeaScreen;