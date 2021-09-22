import React, {  useState } from 'react';
import useDidMountEffect from '../../TestScreen/useDidMountEffect';
import axios from 'axios';
import "./Modal.css";

const ChannelCreateModal = ( props ) => {
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

    const POST_Channel = async() =>{
        await axios.post("http://localhost:8080/api/channel",
            {"name" : ChannelName, "purpose" : ChannelPurpose , "userId":userId, "workspaceId": workspaceIndex});
    };

    useDidMountEffect(()=>{
        console.log(workspaceIndex + ", " + userId)
        POST_Channel();
        refreshPage();
    },[activation]);
    
    return (
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        Create new Channel
                    </header>
                    <main>
                        <div className= "section1">
                            <div>Channel Name</div>
                            <input type= "text" value={ChannelName} onChange={(event) => setChannelName(event.target.value)} className = "ChannelInfoinput"></input>
                        </div>
                        <div className = "section1">
                            <div>Channel Purpose</div>
                            <input type= "text" value={ChannelPurpose} onChange={(event) => setChannelPurpose(event.target.value)} className = "ChannelInfoinput"></input>
                        </div>

                    </main>
                    <footer>
                        <button className="close" onClick={close}> Cancle </button>
                        <button className="close" onClick={(event) => {Activate(); close();}}> Confirm </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default ChannelCreateModal;