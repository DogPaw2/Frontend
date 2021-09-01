import React, {  useEffect, useState } from 'react';
import axios from 'axios';

/* APIS
//유저
http://localhost:8080/api/user
*/

function Postuser(){
    const [postnow, setpostnow] = useState(1);

    const PostNow = () => {setpostnow(postnow+1)}

    const POST_USER = () =>{
        axios.post("http://localhost:8080/api/user",
            {"name" : "hi"})
        .then(console.log("Userpost_ok"));
    }

    useEffect(()=>{
        POST_USER()
    },[postnow]);
    
    return(
        <button onClick = {PostNow} >Post User</button>
    );
}


export default Postuser;