import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Switch from 'react-switch';
import LinkModal from './LinkModal';
import './SwitHome.css';
import './BuildWorkspace.css';

function BuildWorkspace() {
    const [inviteUrl, setInviteUrl] = useState("https://invite.swit.io/blahblah");
    const onUrlChange = (e) => {
        setInviteUrl(e.target.value);
    }
    
    const [copied, setCopied] = useState(false);
    const hiddenCopied = () => {
        setCopied(false);
    }
    const confirmCopied = () => {
        setCopied(true);
        setTimeout(hiddenCopied, 2000);
    }

    const [checked, setChecked] = useState(false);
    const onCheckedChange = () => {
        setChecked(!checked);
        if (checked == true) {
            openModal();
        }
    }
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    const cancelModal = () => {
        setModalOpen(false);
        setChecked(true);
    }
    const deleteModal = () => {
        setModalOpen(false);
        setChecked(false);
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
                            <Switch
                                className="switch-button"
                                checked={checked}
                                onChange={onCheckedChange}
                                offColor="#D8D8D8"
                                onColor="#1D5ECC"
                                uncheckedIcon={false}
                                checkedIcon={false}
                                activeBoxShadow=""
                                height={18}
                                width={32}
                                handleDiameter={16} />
                            <label className="link-invitation-direction">Activate invitation link</label>
                        </div>
                        {checked ?
                        <div>
                            <input className="new-invitation-link" value="https://invite.swit.io/blahblah" onChange={onUrlChange}></input>
                            <CopyToClipboard text={inviteUrl}>
                                <button className="link-copy-button" onClick={confirmCopied}>Copy</button>
                            </CopyToClipboard>
                        </div>
                        : 
                        <div>
                            { modalOpen ? 
                            <div>
                                <input className="new-invitation-link" value="https://invite.swit.io/blahblah" onChange={onUrlChange}></input>
                                <CopyToClipboard text={inviteUrl}>
                                    <button className="link-copy-button" onClick={confirmCopied}>Copy</button>
                                </CopyToClipboard>
                                <LinkModal open={modalOpen} cancel={cancelModal} del={deleteModal}></LinkModal>
                            </div>
                            : null
                            }
                        </div>
                        }

                    </div>
                    <span className="invite-later-span">Invite later</span>
                    {copied ? <div className="copy-confirmed-div">Link copied to clipboard.</div> : null}
                </div>
            </div>
        </div>
    );
}

export default BuildWorkspace;