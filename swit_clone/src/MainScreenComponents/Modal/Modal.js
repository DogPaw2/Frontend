import React, {  useState } from 'react';
import useDidMountEffect from '../../TestScreen/useDidMountEffect';
import axios from 'axios';
import "./Modal.css";

const ChannelCreateModal = ( props ) => {
    const { open, close, header } = props;
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
            {"name" : ChannelName, "purpose" : ChannelPurpose , "userId":1, "workspaceId":1})
        .then(console.log("Posted Channel in Workspace 1, UserId is 1."));
    };

    useDidMountEffect(()=>{
        POST_Channel()
    },[activation]);
    
    return (
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        채널 생성
                    </header>
                    <main>
                        <div className= "section1">
                            <div>채널 이름</div>
                            <input type= "text" value={ChannelName} onChange={(event) => setChannelName(event.target.value)}></input>
                        </div>
                        <div className = "section1">
                            <div>설명 (선택사항)</div>
                            <input type= "text" value={ChannelPurpose} onChange={(event) => setChannelPurpose(event.target.value)}></input>
                        </div>

                    </main>
                    <footer>
                        <button className="close" onClick={close}> 취소 </button>
                        <button className="close" onClick={(event) => 
                        {   Activate();
                            close();
                            refreshPage();
                        }}> 확인 </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default ChannelCreateModal;