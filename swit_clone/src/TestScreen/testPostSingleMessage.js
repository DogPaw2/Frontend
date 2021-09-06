import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useDidMountEffect from './useDidMountEffect';

//http://localhost:8080/api/messageroom

function PostSingleMessage(){
    const [query, setquery] = useState("send your text");
    const [search, setSearch] = useState("");

    const POST_singlemsg = async() =>{
        await axios.post("http://localhost:8080/api/message",
            {"messageRoomId" : "1", "sendBy" : "1", "text" : search})
        .then(console.log("send => " + search ));
    };

    useDidMountEffect(()=>{
        POST_singlemsg();
        
    },[search]);
    

    return(
    <div>
        <div>
            <input type="text" value={query} onChange={(event) => setquery(event.target.value)} />
            <button onClick={() => setSearch(query)}>Send DM</button>
        </div>
        
    </div>
        
        
    );
}


export default PostSingleMessage;