import React, {  useState } from 'react';
import useDidMountEffect from './useDidMountEffect';
import axios from 'axios';

/* APIS
//유저
http://localhost:8080/api/channel
*/

function PostChannel(){
    const [query, setquery] = useState("default Channelname");
    const [search, setSearch] = useState("");
    
    const POST_Channel = async() =>{
        await axios.post("http://localhost:8080/api/channel",
            {"name" : search, "purpose" : "nothing" , "userId":1, "workspaceId":1})
        .then(console.log("Posted Channel named :" + search +", in Workspace 1, UserId is 1."));
    };

    useDidMountEffect(()=>{

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