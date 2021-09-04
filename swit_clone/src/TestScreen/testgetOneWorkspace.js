import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* APIS
//워크스페이스 하나
http://localhost:8080/api/workspace

//워크스페이스 전부
http://localhost:8080/api/workspace/all?userId=1
*/

function GetOneWorkspace(){
    const [Workspaceindex, setWorkspaceindex] = useState("");
    const [Workspacename, setWorkspacename] = useState("");
    const [WorkspaceChannelList, setWorkspaceChannelList] = useState([]);

    const getOneworkspace = () => {
        axios.get("http://localhost:8080/api/workspace/",{
            params:{
                workspaceId : 1
            }
        }
        ).then(response => {
            setWorkspaceindex(response.data.workspace.id);
            setWorkspacename(response.data.workspace.name);
            const cur_channel = response.data.workspace.channels.map(cur => cur);
            setWorkspaceChannelList(cur_channel)

        })
    }

    useEffect(()=>{
        getOneworkspace();
    },[]);

    return(
        <div>
            <div>
                Get one Workspace : index number is {Workspaceindex} , name is {Workspacename};
            </div>

            <div>
                Showing Workspace [{Workspaceindex}]
                {WorkspaceChannelList.map((cur) => (
                    <div key={cur.id}>
                        <div>=========================</div>
                        <div>Channel Name : {cur.name}</div>
                        <div>Channel purpose : {cur.purpose}</div>
                    </div>

                ))}

            </div>
        </div>
    );

}

export default GetOneWorkspace;