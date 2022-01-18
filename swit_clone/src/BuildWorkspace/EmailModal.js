import React from 'react';
import "../SharedComponents/Modal.css";

const EmailModal = ( props ) => {
    const { open, close, number } = props;

    return (
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <div>
                    <div className="modal-content">
                        <h3>Your invitation has been sent!</h3> 
                        <p className="modal-direction-p">Invitation was successfully sent to {number} email addresses.</p>
                        <div className="modal-btn-div">
                            <button className="modal-confirm-btn" onClick={close}>Confirm</button>
                        </div>
                    </div>
                </div>
            ) : null }
        </div>
    )
}

export default EmailModal;