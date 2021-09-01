import React, {  useEffect } from 'react';
import axios from 'axios';

/* APIS
//워크스페이스
http://localhost:8080/api/workspace

*/

function Postworkspace(){

    const POST_WORKSPACE = () =>{
        axios.post("http://localhost:8080/api/workspace",
            {"name" : "workspacename", "url": "http://naver.com", "userId":"1"})
        .then(console.log("WorkspacePost_ok"));
    }

    useEffect(()=>{
        POST_WORKSPACE()
    },[]);
    
    return(
        <button onClick = {POST_WORKSPACE}>Post Workspace</button>
    );
}


export default Postworkspace;