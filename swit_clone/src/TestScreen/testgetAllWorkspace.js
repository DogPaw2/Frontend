import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* APIS
//워크스페이스
http://localhost:8080/api/workspace

*/

function GetAllWorkspace(){
    const [WorkspaceLists, setWorkspaceLists] = useState({workspaces : []});

    const getUsername = () => {
        axios.get("http://localhost:8080/api/workspace/all",{
            params:{
                userId : 1
            }
        }
        ).then(response => {
            console.log(response.data.workspaceList);
            console.log("-------useState쓴거---------");

            const wp = response.data.workspaceList.map(workspace => workspace);
            setWorkspaceLists(wp);
            
            console.log(WorkspaceLists)
            
        })
    }

    useEffect(()=>{
        getUsername();
    },[]);

    return(
        <div>

        </div>
    );

}

export default GetAllWorkspace;