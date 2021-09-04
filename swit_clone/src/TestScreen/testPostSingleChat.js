import React, { useState } from 'react';
import useDidMountEffect from './useDidMountEffect';
import axios from 'axios';

function PostSingleChat(){
    const [query, setquery] = useState("type your message");
    const [search, setSearch] = useState("");

    const POST_Single_chat = async() =>{
        await axios.post("http://localhost:8080/api/chat",
            {    "chattingId": "1", "userId" : "1", "text" : search })
        .then(console.log("Send ->" + search));
    };

    useDidMountEffect(()=>{
    POST_Single_chat()
    },[search]);
    
    return(
        <div>
            <input type="text" value={query} onChange={(event) => setquery(event.target.value)} />
            <button onClick={() => setSearch(query)}>SendChat</button>
        </div>
        
    );
}

export default PostSingleChat;