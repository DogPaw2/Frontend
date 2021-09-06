//수정중

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetMsgRoom(){

    const [MsgRoomList, setMsgRoomList] = useState([]);

    const getMsgroom = () => {
        axios.get("http://localhost:8080/api/messageroom",{
            params:{
                messageRoomId : 1
            }
        }
        ).then(response => {
            console.log(response.data.messages);
            setMsgRoomList(response.data.messages)
        })
    }

    useEffect(()=>{
        getMsgroom();
    },[]);

    return(
        <div>
            <div>
                Msg GET Result : 
                {MsgRoomList.map((cur) => (
                    <div key = {cur.sendBy}>
                        <div>=============</div>
                        <div>By : {cur.sendBy}</div>
                        <div>{cur.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );


}

export default GetMsgRoom;