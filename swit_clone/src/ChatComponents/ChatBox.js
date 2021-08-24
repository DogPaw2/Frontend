import React, { Component } from 'react';

class ChatBox extends Component{
    render(){
        return(
            <div className = "chatbox">
                <div className = "profile_circle"></div>

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
        );
    }
}

export default ChatBox;