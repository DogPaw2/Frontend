import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";


function CommentFileBox(props){

    const [currentComment, setcurrentComment] = useState(props.curcomment);
    const [CommentFileList, setCommentFileList] = useState([]);
    const [isThereCommentfiles, setisThereCommentfiles] = useState(false);

    const getCommentfiles = async() => {
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
                    <div className = "comment_files_area">
                        <div className = "comment_file">
                            <FontAwesomeIcon icon={faFile} className = "search"/>
                            <div className = "chat_fileName">{curfile.name}</div>
                        </div>    
                    </div>
                ))
            :null}
        </div>

    )
}

export default CommentFileBox;