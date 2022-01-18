import React from 'react';
import "../SharedComponents/Modal.css";

const LinkModal = ( props ) => {
    const { open, cancel, del } = props;

    return (
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <div>
                    <div className="modal-content">
                        <h3>Delete invitation link</h3> 
                        <p className="modal-direction-p">If you delete the invitation link, it will no longer be valid and people won't be able to join the workspace with this link.</p>
                        <div className="modal-btn-div">
                            <button className="modal-cancel-btn" onClick={cancel}>Cancel</button>
                            <button className="modal-delete-btn" onClick={del}>Delete</button>
                        </div>
                    </div>
                </div>
            ) : null }
        </div>
    )
}

export default LinkModal;