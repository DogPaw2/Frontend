import './MainScreen.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAngleDown, faBell, faAt, faStar, faFile, faUserFriends, faSearch, faComment, faCheckSquare, faLayerGroup, 
    faPlus, faHockeyPuck, faUser, faThumbtack, faClone, faWindowMaximize,  faCaretSquareDown, faCaretSquareRight, faSmile} from "@fortawesome/free-solid-svg-icons";

function MainScreen(){
    return(
        <div className = "entire_webpage">
            <div className = "nav_bar">
                <div className = "round_square_btn_area" id="Home">
                    <div className = "home_btn">
                        <FontAwesomeIcon icon={faHome} className="search" />
                    </div>
                </div>

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
                    <div className = "search_area">
                        <div className = "search_bar_icon">
                            <FontAwesomeIcon icon={faSearch} className="search" />
                        </div>
    
                        <input type="text" placeholder="DogPaw 내에서 검색"></input>
                    </div>
                   

                    <div className = "round_square_btn_area">
                        <div className = "round_btn" id="User">DP</div>
                    </div>
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

                <div className = "main_area">

                    <div className = "workspace_info">
                        <div className = "infos">
                            <div className = "toggle_btn_area" id="star">
                                <div className = "toggle_btn" >
                                    <FontAwesomeIcon icon={faStar} className="search" />
                                </div>
                            </div>
                            <div className ="channel_name_area">
                                <div className = "channel_name">DogPaw</div>
                            </div>
                            
                            <div className = "toggle_btn_area">
                                <div className = "toggle_btn">
                                    <FontAwesomeIcon icon={faAngleDown} className="search" />
                                </div>
                            </div>
                        </div>

                        <div className = "chatNidea">
                            <div className = "btn_with_belowtext_area" id = "chatting">
                                <div className = "btn_with_belowtext_btn">
                                    <FontAwesomeIcon icon={faComment} className="search" />
                                </div>
                                <div className = "btn_with_belowtext_text">
                                    chat
                                </div>
                            </div>
                            <div className = "btn_with_belowtext_area" id = "idea">
                                <div className = "btn_with_belowtext_btn">
                                    <FontAwesomeIcon icon={faHockeyPuck} className="search" />
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
                            <div className = "right_panel_btn_area">
                                <div className = "right_panel_btn">
                                    <FontAwesomeIcon icon={faWindowMaximize} className="search" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className = "main_chatting">
                        <div className = "chatting_input_area"> 
                            <div className = "content_add_btn_area">
                                <FontAwesomeIcon icon={faPlus} className="search" size="2x"/>
                            </div>

                            <div className = "chat_text_input">
                                <input type = "text" placeholder= "Send your Message"></input>
                            </div>

                            <div className = "chat_buttons" id = "Tbox">
                                <div className = "chat_button">
                                    <FontAwesomeIcon icon={faCaretSquareDown} className="search" />
                                </div>

                                <div className = "chat_button" id = "at">
                                    <FontAwesomeIcon icon={faAt} className="search" />
                                </div>

                                <div className = "chat_button" id = "imogi">
                                    <FontAwesomeIcon icon={faSmile} className="search" />
                                </div>

                                <div className = "chat_button" id = "append_chat">
                                    <FontAwesomeIcon icon={faCaretSquareRight} className="search" size="3x"/>
                                </div>
                            </div>
                        </div>
                        
                        <div className= "date_line_area">
                            <div className = "d_line"></div>
                            <div className = "date">yesterday</div>
                            <div className = "d_line"></div>
                        </div>

                        <div className= "invite_area">
                            <div className= "chatting_room_member">
                                @Leekyeongjun
                            </div>

                            <div className = "invite_text">
                                has entered
                            </div>

                            <div className = "chatting_room_name">
                                Team DogPaw's chatting room
                            </div>                            
                        </div>

                        <div className = "chatbox">
                            <div className = "profile_circle">

                            </div>

                            <div className = "chat_area">
                                <div className = "chatter_info_area">
                                    <div className = "chatter_name">
                                            LeeKyeongJun
                                    </div>

                                    <div className="wrote_time">
                                            08:25 PM
                                    </div>
                                </div>

                                <div className = "chat_content">
                                    abcdefg
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainScreen;