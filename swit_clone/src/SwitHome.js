import React from 'react';
import { Link } from 'react-router-dom';
import './SwitHome.css';

function SwitHome() {
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
            <div className="profile-photo">정</div>
            <div className="profile-text">
              <div className="profile-online">
                <div className="online-icon"></div>
                <h2 className="online-name">정다은</h2>
              </div>
              <span className="profile-email">daeun0731@gmail.com</span>
              <span className="user-setting">User setting</span>
            </div>
          </div>
          <div className="workspace-div">
            <div className="build-workspace-box">
              <Link to="/build-workspace1">+ Build a Free-plan workspace</Link>
            </div>
            <div className="workspace-box">
              <div className="workspace-photo">T</div>
              <div className="workspace-text">
                <span className="workspace-name">temp-test</span>
                <span className="workspace-spot">Master</span>
                <span className="workspace-url">temp-test.swit.io</span>
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