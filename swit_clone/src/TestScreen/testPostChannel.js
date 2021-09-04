import React, {  useEffect, useState } from 'react';
import axios from 'axios';

/* APIS
//유저
http://localhost:8080/api/channel
*/

function PostChannel(){
    const [query, setquery] = useState("default Channelname");
    const [search, setSearch] = useState("");


    useEffect(()=>{
        const POST_Channel = async() =>{
            await axios.post("http://localhost:8080/api/channel",
                {"name" : search, "purpose" : "nothing" , "userId":2, "workspaceId":1})
            .then(console.log("Posted Channel named :" + search +", in Workspace 1, UserId is 2."));
        };
        POST_Channel()
    },[search]);
    
    return(
        <div>
            <input type="text" value={query} onChange={(event) => setquery(event.target.value)} />
            <button onClick={() => setSearch(query)}>POST CHANNEL</button>
        </div>
        
    );
}


export default PostChannel;