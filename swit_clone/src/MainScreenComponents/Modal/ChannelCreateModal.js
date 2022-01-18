import React, {  useState } from 'react';
import useDidMountEffect from '../../TestScreen/useDidMountEffect';
import axios from 'axios';
import "./Modal2.css";

const ChannelCreateModal = ( props ) => {
    const { open, close, header, workspaceIndex, userId } = props;
    const [ChannelName, setChannelName] = useState("");
    const [ChannelPurpose, setChannelPurpose] = useState("");
    const [activation, setActivation] = useState(1);

    const closeModal = () => {
        close();
        setChannelName("");
        setChannelPurpose("")
    }

    const POST_Channel = async() =>{
        axios.post("http://localhost:8080/api/channel",
        {"name" : ChannelName, "purpose" : ChannelPurpose , "userId":userId, "workspaceId": workspaceIndex})
        .then(response => { console.log(response); })
        .catch(error => { console.log(error.response); })
        window.location.reload(false);
    };

    return (
        <div className={ open ? 'openModal2 modal2' : 'modal2' }>
            { open ? (  
                <section>
                    <header>
                        Create new Channel
                    </header>
                    <main>
                        <div className= "section1">
                            <div>Channel Name</div>
                            <input type= "text" value={ChannelName} onChange={(event) => setChannelName(event.target.value)}
                                className = {ChannelName === "" ? "modal2-invalid-input modal2-input" : "modal2-input"}></input>
                        </div>
                        <div className = "section1">
                            <div>Channel Purpose</div>
                            <input type= "text" value={ChannelPurpose} onChange={(event) => setChannelPurpose(event.target.value)}
                                className = {ChannelPurpose === "" ? "modal2-invalid-input modal2-input" : "modal2-input"}></input>
                        </div>

                    </main>
                    <footer>
                        <button className="close modal2-cancel-btn" onClick={closeModal}> Cancel </button>
                        <button className="close modal2-confirm-btn" onClick={POST_Channel} disabled={ChannelName === "" || ChannelPurpose === ""}> Confirm </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default ChannelCreateModal;