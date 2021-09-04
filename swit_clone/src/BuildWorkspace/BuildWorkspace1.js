import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../SwitHome/SwitHome.css';
import './BuildWorkspace.css';

function BuildWorkspace( {history} ) {
    const [workspaceName, setName] = useState("");
    const [workspaceUrl, setUrl] = useState("");
    const [isValidName, setIsValidName] = useState(false);
    const [isTypeError, setIsTypeError] = useState(false);
    const [isDuplicateError, setIsDuplicateError] = useState(false);

    const nameSetter = (e) => {
        e.preventDefault();
        if (e.target.value != "") {
            setIsValidName(true);
        }
        setName(e.target.value);
    };

    const urlSetter = (e) => {
        e.preventDefault();
        setUrl(e.target.value);
        var regExp = /^[A-Za-z0-9][A-Za-z0-9-]{2,18}[A-Za-z0-9]$/;
        if (!regExp.test(e.target.value)) {
            setIsTypeError(true);
        }
        else {
            setIsTypeError(false);
            axios.get("http://localhost:8080/api/workspace/url-check", { 
                params: {
                    url: e.target.value
                }
            }).then(() => {
                setIsDuplicateError(false);
            }).catch(() => {
                setIsDuplicateError(true);
            })
        }
    };
    
    const submitHandler = (e) => {
        e.preventDefault();
        
        console.log(workspaceName);
        console.log(workspaceUrl);
        axios.post("http://localhost:8080/api/workspace", {
            name: workspaceName,
            url: workspaceUrl,
            userId: "1"
        })
        .then(function(response) {console.log(response);})
        .catch(error=>{console.log(error.response);})
        history.push("/build-workspace2");
    };

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
                    <div>
                        <span className="question-span">What do you want to call your team workspace?</span>
                        <input
                            className="answer-input workspace-name-input"
                            type="text"
                            value={workspaceName || ""}
                            onChange={nameSetter}
                            placeholder=" Workspace name"
                            autoComplete="off"
                            required
                        />
                        <span className="question-span">Enter your workspace's Swit URL</span>
                        <input
                            className="answer-input workspace-url-input"
                            type="text"
                            value={workspaceUrl || ""}
                            onChange={urlSetter}
                            placeholder=" your-workspace-url"
                            autoComplete="off"
                            required
                        />
                        <span className="direction-span">.swit.io</span><br/>
                        {isTypeError && <p className="validation-error-message">Must be 4-20 characters and only contain alphabet letters and numbers, along with hyphens (-) not in the first or last position.</p>}
                        {isDuplicateError && <p className="validation-error-message">Sorry, that is already in use.</p>}
                        <span className="default-direction-span">You can rename workspace or set a new URL in the setting at any time.</span>
                        <button className="cancel-btn" type="button" onClick={()=>{history.push("/swit-home")}}>Cancel</button>
                        <button className="next-btn" type="button" onClick={submitHandler} disabled={!isValidName || isTypeError || isDuplicateError}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuildWorkspace;