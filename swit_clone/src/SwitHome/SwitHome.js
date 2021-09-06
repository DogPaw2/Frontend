import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import LeaveModal from './LeaveModal';
import './SwitHome.css';

function SwitHome() {
  const history = useHistory();

  // temporarily designated account
  const [userId, setUserId] = useState(1); 
  const [userName, setUserName] = useState("Daeun Chung");
  const [userEmail, setUserEmail] = useState("dianestar@hanyang.ac.kr")
  const [userSpot, setUserSpot] = useState("Member");

  const [workspaceLists, setWorkspaceLists] = useState([]);
  const [workspaceUpdate, setWorkspaceUpdate] = useState(0);

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
      console.log(workspaceLists);
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
      data: {
        id: workspaceId
      }
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch(error=>{console.log(error.response);})
   setWorkspaceUpdate(workspaceUpdate+1);
  }

  const buildWorkspaceLink = () => {
    history.push({
      pathname: `/build-workspace1/${userId}`,
      state: {
        userId: userId
      }
    })
  }

  const workspaceBoxLink = (cur) => {
    history.push({
      pathname: `/${userId}/${cur.workspace.url}/general/chat`,
      state: {
        userId: userId,
        workspaceName: cur.workspace.name,
        workspaceUrl: cur.workspace.url
      } 
    })
  }

  useEffect(() => {
    getWorkspaceInfo();

    axios.post("http://localhost:8080/api/user", {name: "Daeun Chung"})
    .then(console.log("Posted User named: " + "Daeun Chung"));
    
  }, [workspaceUpdate])


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
              <div className="workspace-box" onClick={() => workspaceBoxLink(cur)}>
              <div className="workspace-photo">{cur.workspace.name.substring(0,1)}</div>
              <div className="workspace-text">
                <span className="workspace-name">{cur.workspace.name}</span>
                <span className="workspace-spot">{userSpot}</span>
                <div className="workspace-url">{cur.workspace.url}</div>
                <hr className="workspace-line"></hr>
              </div>
              <div className="workspace-nav">
                <span className="workspace-setting">Workspace settings</span>
                <button className="leave" onClick={openModal}>Leave</button>
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