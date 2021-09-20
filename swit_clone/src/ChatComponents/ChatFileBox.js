import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";


import '../ChatScreen/MainScreen.css'

function ChatFileBox(props){

    const [currentChat, setCurrentChat] = useState(props.cur);
    const [ChatFileList, setChatFileList] = useState([]);
    const [isThereChatfiles, setisThereChatfiles] = useState(false);
    
    const fileDownloadHandler = (e) => {
        console.log(e);
        axios({
            method: "GET",

            
            url: "http://localhost:8080/api/chat/download/",
            params: {
                fileId: e.id //fileId 매칭해서 params 넘겨줘야 함
            },
            responseType: "blob"
        })
        .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", e.originName); //fileName으로 하면 제대로 구현되지 않음 originName 쓸 것
            document.body.appendChild(link);
            link.click();
        })
        .catch((error) => {console.log(error);})
    }

    const getChatfiles = async() => {
        if(currentChat.fileList.length !== 0){
            setisThereChatfiles(true);
            //console.log("chatId " + currentChat.id + " has files");
            setChatFileList(currentChat.fileList.map(curfile=>curfile));
        }
        else
        {
            setisThereChatfiles(false);
            //console.log("chatId " + currentChat.id + " has no files");
        }

    }

    useEffect(()=>{
        setisThereChatfiles(false);
        getChatfiles();
    },[props.cur]);

    return(
        <div>
            { isThereChatfiles ? 
                <div className = "chat_files_area">
                    {ChatFileList.map((curfile,index) => (
                        <div className = "chat_file" key={index} onClick={()=>fileDownloadHandler(curfile)}>
                            <FontAwesomeIcon icon={faFile} className = "search"/>
                            <div className = "chat_fileName">{curfile.originName}</div>
                        </div>
                    ))}
                </div>
            :null}
        </div>
    );
}

export default ChatFileBox;