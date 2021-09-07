import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom'; // import { useLocation }
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Switch from 'react-switch';
import LinkModal from './LinkModal';
import EmailModal from './EmailModal';
import '../SwitHome/SwitHome.css';
import './BuildWorkspace.css';

function BuildWorkspace2() {
    /* 이동한 페이지에서 props 불러오기 */
    const location = useLocation();

    const userId = location.state.userId;
    const userName = location.state.userName;
    const userEmail = location.state.userEmail;
    const workspaceId = location.state.workspaceId;
    const workspaceName = location.state.workspaceName;
    const workspaceUrl = location.state.workspaceUrl;
    /* ****************************** */

    const history = useHistory();
    const goChat = () => {
        history.push({
            pathname: `/${userId}/${workspaceUrl}/general/chat`,
            state: {
                userId: userId,
                userName: userName,
                userEmail: userEmail,
                workspaceId: workspaceId,
                workspaceName: workspaceName,
                workspaceUrl: workspaceUrl
            }
        })
    }

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

    const [emailInput, setEmailInput] = useState("");
    const [emailList, setEmailList] = useState([]);
    const [yesExist, setYesExist] = useState(false);
    const [emailTypeError, setEmailTypeError] = useState(false);

    const inputChangeHandler = (e) => {
        e.preventDefault();
        if (e.target.value == "") {
            setEmailTypeError(false);
        }
        if (e.target.value != ",") {
            setEmailInput(e.target.value);
        }
    }

    const inputSubmitHandler = () => {
        setEmailList(emailList.concat(emailInput));
        setEmailInput("");
        if (emailList.length != -1) {
            setYesExist(true);
        }
    }

    const keyPressHandler = (e) => {
        if (e.key == "Enter" || e.key == " " || e.charCode == 44) {
            var emailRegExp = /^[A-Za-z0-9]([-_\.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_\.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
            if (!emailRegExp.test(e.target.value)) {
                setEmailTypeError(true);
            }
            else {
                setEmailTypeError(false);
                inputSubmitHandler();
            }
        }
    }

    const emailDeleteHandler = (e) => {
        setEmailList(emailList.filter(target => target != e))
        if (emailList.length == 1) {
            setYesExist(false);
        }
    }

    const [emailModalOpen, setEmailModalOpen] = useState(false);

    const sendInvitation = () => {
        emailList.map(email => {
            axios.post("http://localhost:8080/api/mail", {
                address: email,
                title: `${userName} invited you to join the Swit workspace ${workspaceName}`, 
                message: `You are invited to join the Swit team for ${workspaceName}\n${userName} ${userEmail} sent you this invitation\nClick onthis link: LINK` 
                //본문에 link 생성해서 추가할 것
            })
            .then(function(response) {console.log(response);})
            .catch(error=>{console.log(error.response);})            
        })

        setEmailModalOpen(true);
    }

    const closeEmailModal = () => {
        setEmailModalOpen(false);
        goChat();
    }

    const goHome = () => {
        history.push({
            pathname: `/swit-home`
        })
    }
    
    
    return (
        <div className="BuildWorkspace">
            <div className="swit-header">
                <div className="swit-logo" onClick={goHome}>
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
                    <h2 className="step-title">Invite your teammates to the {workspaceName} Workspace that you have built!</h2>
                    <div className="email-invitation-div">
                        <FontAwesomeIcon className="invitation-icon" icon={faEnvelope}/>
                        <h4 className="invitation-title">Invite people via email</h4>
                        <span className="invitation-direction">To invite multiple people, add the spacebar, enter or a comma(,) after an email address.</span>
                        {emailTypeError ?
                        <input className="email-invitation-input-error" value={emailInput} onChange={inputChangeHandler} onKeyPress={keyPressHandler} />
                        : <input className="email-invitation-input" value={emailInput} onChange={inputChangeHandler} onKeyPress={keyPressHandler}/>
                        }
                        {emailTypeError && <p className="validation-error-message">Proper email adress formats required.</p>}
                        {yesExist ?
                            <div>
                                {emailList.map(list => (
                                    <div className="email-invitation-output-div">
                                        <div className="email-invitation-output">{list}</div>
                                        <button className="email-invitation-output-delete" type="button" onClick={() => emailDeleteHandler(list)}>X</button>
                                    </div>
                                ))}
                            </div>
                        : null}
                        <button className="send-invitation-btn" disabled={!yesExist} onClick={sendInvitation}>Send invitation</button>
                        {emailModalOpen ? 
                            <EmailModal open={emailModalOpen} close={closeEmailModal} number={emailList.length}></EmailModal>
                        : null}
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
                    <span className="invite-later-span" onClick={goChat}>Invite later</span>
                    {copied ? <div className="copy-confirmed-div">Link copied to clipboard.</div> : null}
                </div>
            </div>
        </div>
    );
}

export default BuildWorkspace2;