import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SwitchButton from './SwitchButton';
import './SwitHome.css';
import './BuildWorkspace.css';
import { propTypes } from 'react-bootstrap/esm/Image';


function BuildWorkspace() {
    const [inviteUrl, setInviteUrl] = useState("https://invite.swit.io/blahblah");
    const onUrlChange = (e) => {
        setInviteUrl(e.target.value);
    }
    
    const [copied, setCopied] = useState(false);
    const confirmCopied = () => {
        setCopied(!copied);
    }

    const [checked, setChecked] = useState(false);
    const onCheckedChange = (checked) => {
        setChecked(checked);
    }

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
                        <div className="step-icon gray-icon"></div>
                        <div className="step-icon blue-icon"></div>
                        <div className="step-icon gray-icon"></div>
                    </div>
                    <h2 className="step-title">Invite your teammates to the ? Workspace that you have built!</h2>
                    <div className="email-invitation-div">
                        <FontAwesomeIcon className="invitation-icon" icon={faEnvelope}/>
                        <h4 className="invitation-title">Invite people via email</h4>
                        <span className="invitation-direction">To invite multiple people, add the space bar, enter or a comma(,) after an email address.</span>
                        <input className="email-invitation-input"></input>
                        <button className="send-invitation-btn">Send invitation</button>
                    </div>
                    <div className="link-invitation-div">
                        <FontAwesomeIcon className="invitation-icon" icon={faLink}/>
                        <h4 className="invitation-title">Invite people via link</h4>
                        <div className="link-creation-div">
                            <SwitchButton ischecked={checked} onChange={onCheckedChange}/>
                            <label className="link-invitation-direction">Activate invitation link</label>
                        </div>
                        <input className="new-invitation-link" value="https://invite.swit.io/blahblah" onChange={onUrlChange}></input>
                        <CopyToClipboard text={inviteUrl}>
                            <button className="link-copy-button" onClick={confirmCopied}>Copy</button>
                        </CopyToClipboard>
                    </div>
                    <span className="invite-later-span">Invite later</span>
                    {copied ? <div className="copy-confirmed-div">Link copied to clipboard.</div> : <div></div>}

                </div>
            </div>
        </div>
    );
}

export default BuildWorkspace;