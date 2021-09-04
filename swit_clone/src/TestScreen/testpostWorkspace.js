import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* APIS
//워크스페이스
http://localhost:8080/api/workspace

*/

function Postworkspace(){
<<<<<<< HEAD
    const [postwpnow, setpostnow] = useState(1);
    const PostNow = () => {setpostnow(postwpnow+1)}
=======

    const POST_WORKSPACE = () =>{
        axios.post("http://localhost:8080/api/workspace",
            {"name" : "workspacename", "url": "workspaceurl", "userId":"1"})
        .then(console.log("WorkspacePost_ok"));
    }
>>>>>>> 3c1e824870095ac9fce3fdb2e5a4a02312ad4eb0

    useEffect(()=>{
        const POST_WORKSPACE = async() =>{
            await axios.post("http://localhost:8080/api/workspace",
                {"name" : "workspacename", "url": "http://naver.com", "userId":"1"})
            .then(console.log("WorkspacePost_ok"));
        }
        POST_WORKSPACE()
    },[postwpnow]);
    
    return(
        <button onClick = {PostNow}>Post Workspace</button>
    );
}


export default Postworkspace;