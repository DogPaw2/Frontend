import React, { useState } from 'react';
import axios from 'axios';
import useDidMountEffect from './useDidMountEffect';

//http://localhost:8080/api/messageroom

function PostMsgRoom(){
    const [query, setquery] = useState("default MsgRoom_name");
    const [search, setSearch] = useState("");

    const POST_MsgRoom = async() =>{
        await axios.post("http://localhost:8080/api/messageroom",
            {"userId":1 })
        .then(console.log("Posted MessageRoom named :" + search +", UserId is 1."));
    };

    useDidMountEffect(()=>{
        POST_MsgRoom();
    },[search]);
    
    return(
        <div>
            <input type="text" value={query} onChange={(event) => setquery(event.target.value)} />
            <button onClick={() => setSearch(query)}>POST MessageRoom</button>
        </div>
        
    );
}


export default PostMsgRoom;