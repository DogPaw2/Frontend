import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

function MCommentFileBox(props){

    const [currentComment, setcurrentComment] = useState(props.curcomment);
    const [CommentFileList, setCommentFileList] = useState([]);
    const [isThereCommentfiles, setisThereCommentfiles] = useState(false);
    
    const fileDownloadHandler = (e) => {
        console.log(e);
        axios({
            method: "GET",

            
            url: "http://localhost:8080/api/message/comment/download/",
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
    const getCommentfiles = () => {
        if(currentComment.fileList.length !== 0){
            setisThereCommentfiles(true);
            console.log("CommentId " + currentComment.id + " has files");
            setCommentFileList(currentComment.fileList.map(curfile=>curfile));
            
        }
        else
        {
            setisThereCommentfiles(false);
            console.log("Comment " + currentComment.id + " has no files");
        }

    }

    useEffect(()=>{
        setisThereCommentfiles(false);
        getCommentfiles();
    },[props.cur]);

    return(
        <div>
            {isThereCommentfiles ?
                CommentFileList.map((curfile,index) => (
                    <div className = "comment_files_area" onClick = {(event) => fileDownloadHandler(curfile)}>
                        <div className = "comment_file">
                            <FontAwesomeIcon icon={faFile} className = "search"/>
                            <div className = "comment_fileName">{curfile.originName}</div>
                        </div>    
                    </div>
                ))
            :null}
        </div>

    )
}

export default MCommentFileBox;