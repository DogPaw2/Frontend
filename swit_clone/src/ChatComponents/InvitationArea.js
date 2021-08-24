import React, { Component } from 'react';

class InvitationArea extends Component{
    render(){
        return(
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
        );
    }
}

export default InvitationArea;