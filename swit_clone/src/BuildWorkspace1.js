import React from 'react';
import { Link } from 'react-router-dom';
import './SwitHome.css';
import './BuildWorkspace.css';

function BuildWorkspace() {
    return (
        <div className="BuildWorkspace">
            <div className="swit-header">
                <div className="swit-logo">
                    <img className="swit-symbol" src="https://swit.io/assets/images/home/brand/img_logo_symbol.png"></img>
                    <span className="swit-title">Swit</span>
                </div>
                <div className="question-icon">?</div>
            </div>
            <div className="swit-main">
                <div className="build-div">
                    <div className="step-div">
                        <div className="step-icon blue-icon"></div>
                        <div className="step-icon gray-icon"></div>
                        <div className="step-icon gray-icon"></div>
                    </div>
                    <h2 className="step-title">Build a workspace your team will love.</h2>
                    <span className="question-span">What do you want to call your team workspace?</span>
                    <input className="answer-input workspace-name-input" type="text" placeholder=" Workspace name"></input>
                    <span className="question-span">Enter your workspace's Swit URL</span>
                    <div className="url-sub-div">
                        <input className="answer-input workspace-url-input" type="text" placeholder=" your-workspace-url"></input>
                        <span className="direction-span">.swit.io</span>
                    </div>
                    <div className="warning-direction-div">Must be 4-20 characters and only contain alphabet letters and numbers, along with hyphens (-) not in the first or last position.</div>
                    <div className="warning-direction-div">Sorry, that is already in use.</div>
                    <span className="default-direction-span">You can rename workspace or set a new URL in the setting at any time.</span>
                    <div className="btn-sub-div">
                        <button className="cancel-btn">
                            <Link to="/swit-home">Cancel</Link>
                        </button>
                        <button className="next-btn">
                            <Link to="/build-workspace2">Next</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuildWorkspace;