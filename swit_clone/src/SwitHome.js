import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SwitHome.css';

function SwitHome() {
  const [userName, setUserName] = useState("정다은 서울 교육공학과");
  const [userEmail, setUserEmail] = useState("dianestar@hanyang.ac.kr")
  const [userSpot, setUserSpot] = useState("Member");
  const [workspaceName, setWorkspaceName] = useState("DogPaw");
  const [workspaceUrl, setWorkspaceUrl] = useState("dogpaw");
  
  const getWorkspaceInfo = () => {
    axios.get("http://localhost:8080/api/workspace", {
      userId: "5"
    })
    .then(function(response) { console.log(response.config.data); })
    .catch(error=>{console.log(error.response);})
  }

  useEffect(() => {
    getWorkspaceInfo()
  }, []);

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
             <div className="build-workspace-box">
               <Link to="/build-workspace1">+ Build a Free-plan workspace</Link>
             </div>
             <div className="workspace-box">
               <div className="workspace-photo">{workspaceName.substring(0,1)}</div>
               <div className="workspace-text">
                 <span className="workspace-name">{workspaceName}</span>
                 <span className="workspace-spot">{userSpot}</span>
                 <div className="workspace-url">{workspaceUrl}.swit.io</div>
                 <hr className="workspace-line"></hr>
               </div>
               <div className="workspace-nav">
                 <span className="workspace-setting">Workspace settings</span>
                 <span className="leave">Leave</span>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
}

export default SwitHome;