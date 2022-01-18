import React, {  useEffect, useState } from 'react';
import useDidMountEffect from '../../TestScreen/useDidMountEffect';
import axios from 'axios';
import "./Modal2.css";

const DMCreateModal = ( props ) => {
    const { open, close, header, workspaceIndex, userId } = props;
    const [ChannelName, setChannelName] = useState("");
    const [ChannelPurpose, setChannelPurpose] = useState("");
    const [activation, setActivation] = useState(1);

    const Activate = () => {
        setActivation(activation+1);
    }

    function refreshPage() {
        window.location.reload(false);
    };

    const getDMavailableUsers = async() =>{
        await axios.get("http://localhost:8080/api/workspace",
        {params : {workspaceId : 2}}
        ).then(response => console.log(response.data))   

    }

    const POST_DM = async() =>{
        await axios.post("http://localhost:8080/api/channel",
            {"name" : ChannelName, "purpose" : ChannelPurpose , "userId":1, "workspaceId":1})
        .then(console.log("Posted Channel in Workspace 1, UserId is 1."));
    };

    useDidMountEffect(()=>{
        POST_DM();
        refreshPage();
    },[activation]);

    useEffect(()=>{
        getDMavailableUsers();
    }, []);
    
    return (
        <div className={ open ? 'openModal2 modal2' : 'modal2' }>
            { open ? (  
                <section>
                    <header>
                        Create New Direct Message
                    </header>
                    <main>
                        <div className= "section1">
                            <div>User List</div>
                            <div>There is no way to get Users in workspace...</div>
                        </div>
                    </main>
                    <footer>
                        <button className="close modal2-cancel-btn" onClick={close}> Cancel </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default DMCreateModal;