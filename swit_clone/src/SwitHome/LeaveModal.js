import React from 'react';
import "./LeaveModal.css";

const LeaveModal = ( props ) => {
    const { open, cancel, del, workspaceName } = props;

    return (
        <div className={ open ? 'openModal modalLeave' : 'modalLeave' }>
            { open ? (  
                <div>
                    <div className="modal-content">
                        <h3>Leave Workspace</h3> 
                        <p className="modal-direction-p">Once you leave {workspaceName}, you can no longer access any information in the workspace.</p>
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

export default LeaveModal;