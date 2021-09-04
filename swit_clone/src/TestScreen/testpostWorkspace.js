import React, { useState, useEffect } from 'react';
import useDidMountEffect from './useDidMountEffect';
import axios from 'axios';

/* APIS
//워크스페이스
http://localhost:8080/api/workspace

*/

function Postworkspace(){
<<<<<<< HEAD

    const [PostwpNow, setPostwpNow] = useState(1);

    const PostWpNow = () => {
        setPostwpNow(PostwpNow+1);
    }

    const POST_WORKSPACE = async() =>{
        await axios.post("http://localhost:8080/api/workspace",
            {"name" : "workspacename", "url": "http://naver.com", "userId":"1"})
        .then(console.log("WorkspacePost_ok"));
    }
    
    useDidMountEffect(()=>{
        POST_WORKSPACE();
    },[PostwpNow]);
=======
    const [postwpnow, setpostnow] = useState(1);
    const PostNow = () => {setpostnow(postwpnow+1)}


    useEffect(()=>{
        const POST_WORKSPACE = async() =>{
            await axios.post("http://localhost:8080/api/workspace",
                {"name" : "workspacename", "url": "http://naver.com", "userId":"1"})
            .then(console.log("WorkspacePost_ok"));
        }
        POST_WORKSPACE()
    },[postwpnow]);
>>>>>>> 50695de7f689ee5fe6ebe9ba70351b1ba52eeb62
    
    return(
        <button onClick = {PostWpNow}>Post Workspace</button>
    );
}


export default Postworkspace;