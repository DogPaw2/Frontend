import './Mainscreen.css';

function MainScreen(){
    return(
        <div className = "entire_webpage">
            <div className = "nav_bar">
                <div className = "round_square_btn_area" id="Home">
                    <div className = "home_btn">
                        <FontAwesomeIcon icon={["far", "coffee"]} />
                        <i className="fas fa-home"></i>
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
                            <i className="fas fa-angle-down"></i>
                        </div>    
                    </div>
                </div>
                
                <div className = "top_toolbar">
                    <div className = "round_square_btn_area" id="Activity">
                        <div className = "round_btn" >
                            <i className="fas fa-bell"></i>
                        </div>
                    </div>
                    <div className = "round_square_btn_area" id="Mention">
                        <div className = "round_btn" >
                            <i className="fas fa-at"></i>
                        </div>
                    </div>
                    <div className = "round_square_btn_area" id="Favorite">
                        <div className = "round_btn" >
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                    <div className = "round_square_btn_area" id="File">
                        <div className = "round_btn">
                            <i className="fas fa-file"></i>
                        </div>
                    </div>
                    <div className = "round_square_btn_area" id="Member">
                        <div className = "round_btn" >
                            <i className="fas fa-user-friends"></i>
                        </div>
                    </div>
                    <div className = "search_area">
                        <div className = "search_bar_icon">
                            <i className="fas fa-search"></i>
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
                                <i className="fas fa-comment"></i>
                            </div>
                        </div>
                        <div className = "round_square_btn_area">
                            <div className = "big_round_square_btn" id="project_box">
                                <i className="fas fa-check-square"></i>
                            </div>
                        </div>
                    </div>

                </div>

                <div className = "explorer_area">
                    <div className = "explorer">

                        <div className = "explorer_channels_area" id = "explore_channels">
                            <div className = "explorer_channels_icon">
                                <i className="fas fa-layer-group"></i>
                            </div>
                            <div className = "explorer_channels">
                                explore_channels
                            </div>
                        </div>
                        <div className = "explorer_text_btn_area">
                            <div className = "explorer_text_btn" id ="channel">Channel</div>
                            <div className = "explorer_add_btn" id = "add_channel">
                                <i className="fas fa-plus fa-xs"></i>
                            </div>
                        </div>
                        <div className = "explorer_lists" id = "channel">
                            <div className = "explorer_list_star">
                                <i className="fas fa-star fa-xs"></i>
                            </div>
                            <div className = "list_text_btn">General</div>
                            <div className = "explorer_list_ring">
                                <i className="fas fa-bell fa-xs"></i>
                            </div>
                        </div>

                        <div className = "explorer_text_btn_area">
                            <div className = "explorer_text_btn" id ="Direct_message">Direct_message</div>
                            <div className = "explorer_add_btn" id = "add_DM">
                                <i className="fas fa-plus fa-xs"></i>
                            </div>
                        </div>

                        <div className = "explorer_lists" id = "DM">
                            <div className = "explorer_list_star">
                                <i className="fas fa-star fa-xs"></i>
                            </div>
                            <div className = "list_text_btn">(me)</div>
                            <div className = "explorer_list_ring">
                                <i className="fas fa-bell fa-xs"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "main_area">

                    <div className = "workspace_info">
                        <div className = "infos">
                            <div className = "toggle_btn_area" id="star">
                                <div className = "toggle_btn" >
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <div className ="channel_name_area">
                                <div className = "channel_name">DogPaw</div>
                            </div>
                            
                            <div className = "toggle_btn_area">
                                <div className = "toggle_btn">
                                    <i className="fas fa-angle-down"></i>
                                </div>
                            </div>
                        </div>

                        <div className = "chatNidea">
                            <div className = "btn_with_belowtext_area" id = "chatting">
                                <div className = "btn_with_belowtext_btn">
                                    <i className="fas fa-comment fa-lg"></i>
                                </div>
                                <div className = "btn_with_belowtext_text">
                                    chat
                                </div>
                            </div>
                            <div className = "btn_with_belowtext_area" id = "idea">
                                <div className = "btn_with_belowtext_btn">
                                    <i className="fas fa-hockey-puck fa-lg"></i>
                                </div>
                                <div className = "btn_with_belowtext_text">
                                    idea
                                </div>
                            </div>
                            
                        </div>

                        <div className = "chatting_infos">
                            <div className = "btn_with_sidetext_area" id = "channel_members">
                                <div className = "btn_with_sidetext_btn">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className = "btn_with_sidetext_text">
                                    1
                                </div>
                            </div>
                            <div className = "btn_with_sidetext_area" id = "fixed_msg">
                                <div className = "btn_with_sidetext_btn">
                                    <i className="fas fa-thumbtack"></i>
                                </div>
                                <div className = "btn_with_sidetext_text">
                                    1
                                </div>
                            </div>
                            <div className = "btn_with_sidetext_area" id = "tabs">
                                <div className = "btn_with_sidetext_btn">
                                    <i className="fas fa-clone"></i>
                                </div>
                                <div className = "btn_with_sidetext_text">
                                    1
                                </div>
                            </div>  
                            <div className = "right_panel_btn_area">
                                <div className = "right_panel_btn">
                                    <i className="fas fa-window-maximize"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div className = "main_chatting">

                    </div>
                </div>
            </div>
        </div>

    );
}

export default MainScreen;