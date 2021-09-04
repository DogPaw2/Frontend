import React, { useState } from 'react';
import axios from 'axios';
import useDidMountEffect from './useDidMountEffect';

/* APIS
//유저
http://localhost:8080/api/user
*/

function Postuser(){
    const [query, setquery] = useState("default");
    const [search, setSearch] = useState("");

    const POST_USER = async() =>{
        await axios.post("http://localhost:8080/api/user",
            {"name" : search})
        .then(console.log("Posted User named :" + search));
    };

    useDidMountEffect(()=>{
    POST_USER()
    },[search]);
    
    return(
        <div>
            <input type="text" value={query} onChange={(event) => setquery(event.target.value)} />
            <button onClick={() => setSearch(query)}>POST USER</button>
        </div>
        
    );
}


export default Postuser;