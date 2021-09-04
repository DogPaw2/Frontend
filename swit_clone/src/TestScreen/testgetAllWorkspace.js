import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* APIS
//워크스페이스 하나
http://localhost:8080/api/workspace

//워크스페이스 전부
http://localhost:8080/api/workspace/all?userId=1
*/

function GetAllWorkspace(){
    const [WorkspaceLists, setWorkspaceLists] = useState([]);

    const getAllworkspace = () => {
        axios.get("http://localhost:8080/api/workspace/all",{
            params:{
                userId : 1
            }
        }
        ).then(response => {
            console.log(response.data);
            const wp = response.data.workspaceList.map(workspace => workspace);
            setWorkspaceLists(wp);
            
            
        })
    }

    useEffect(()=>{
        getAllworkspace();
    },[]);

    return(
        <div>
            <div>
                WorkSpace_All GET Result
                {WorkspaceLists.map((cur) => (
                    <div key = {cur.workspace.id}>
                        <div>=========================</div>
                        <div>Workspace ID : {cur.workspace.id}</div>
                        <div>Name : {cur.workspace.name}</div>
                    </div>    
                ))}
                =========================
            </div>
        </div>
    );

}

export default GetAllWorkspace;