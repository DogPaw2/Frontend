import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import LeaveModal from './LeaveModal';
import './SwitHome.css';

function SwitHome() {
  const history = useHistory();

  // temporarily designated account
  const userId = 1;
  const userName = "DogPaw Developers";
  const userEmail = "dogpaw@hanyang.ac.kr";
  const [currentChannelIndex, setChannelIndex] = useState(1);
  const [currentChattingIndex, setChattingIndex] = useState(1);

  const [workspaceLists, setWorkspaceLists] = useState([]);

  const getWorkspaceInfo = () => {
    axios.get("http://localhost:8080/api/workspace/all", {
      params: {
        userId: 1
      }
    })
    .then((response) => { 
      console.log(response.data);

      const wp = response.data.workspaceList.map(workspace => workspace);
      setWorkspaceLists(wp);
    })
    .catch(error=>{console.log(error.response);})
  }

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  }

  const cancelModal = () => {
    setModalOpen(false);
  }

  const deleteModal = (workspaceId) => {
    setModalOpen(false);
    axios.delete("http://localhost:8080/api/workspace", {
      params: {
        id: workspaceId
      }
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch(error=>{console.log(error.response);})
    setModalOpen(false);
    window.location.replace("/swit-home");
  }

  const buildWorkspaceLink = () => {
    history.push({
      pathname: `/build-workspace1/${userId}`,
      state: {
        userId: userId,
        userName: userName,
        userEmail: userEmail,
        workspaceId: workspaceLists.length+1
      }
    })
  }

  const workspaceBoxLink = (cur) => {
    history.push({
      pathname: `/${userId}/${cur.workspace.url}/${currentChannelIndex}/chat/${currentChattingIndex}`,
      state: {
        userId: userId,
        userName: userName,
        userEmail: userEmail,
        workspaceId: cur.workspace.id,
        workspaceName: cur.workspace.name,
        workspaceUrl: cur.workspace.url
      } 
    })
  }

  useEffect(() => {
    getWorkspaceInfo();
    axios.post("http://localhost:8080/api/user", {name: userName})
  }, [])


   return (
     <div className="SwitHome">
       <div className="swit-header">
         <div className="swit-logo">
           <img className="swit-symbol" src="https://swit.io/assets/images/home/brand/img_logo_symbol.png"></img>
           <span className="swit-title">Swit</span>
         </div>
         <div className="question-icon">?</div>
       </div>
       <div className="swit-main">
         <div className="main-div">
           <div className="profile-div">
             <div className="profile-photo"></div>
             <div className="profile-text">
               <div className="profile-online">
                 <div className="online-icon"></div>
                 <h2 className="online-name">{userName}</h2>
               </div>
               <span className="profile-email">{userEmail}</span>
               <span className="user-setting">User setting</span>
             </div>
           </div>
           <div className="workspace-div">
             <div className="build-workspace-box" onClick={() => buildWorkspaceLink()}>
               <div>+ Build a Free-plan workspace</div>
             </div>
             {workspaceLists.map((cur) => (
              <div className="workspace-box">
              <div className="workspace-photo" onClick={() => workspaceBoxLink(cur)}>{cur.workspace.name.substring(0,1)}</div>
              <div className="workspace-text" onClick={() => workspaceBoxLink(cur)}>
                <span className="workspace-name">{cur.workspace.name}</span>
                <div className="workspace-url">{cur.workspace.url}</div>
                <hr className="workspace-line"></hr>
              </div>
              <div className="workspace-nav">
                <span className="workspace-setting">Workspace settings</span>
                <button className="leave" onClick={openModal}>Delete</button>
              </div>
              {modalOpen ? 
              <div>
                <LeaveModal open={modalOpen} cancel={cancelModal} del={()=>{deleteModal(cur.workspace.id);}} workspaceName={cur.workspace.name}></LeaveModal>
              </div>
              : null
              }
            </div>
             ))}
           </div>
         </div>
       </div>
     </div>
   );
}

export default SwitHome;