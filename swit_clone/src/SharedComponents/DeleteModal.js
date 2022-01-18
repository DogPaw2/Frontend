import React from 'react';
import "./Modal.css"


const DeleteModal = ( props ) => {
    const { open, cancel, del } = props;

    return (
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <div>
                    <div className="modal-content">
                        <h3>Delete</h3> 
                        <p className="modal-direction-p">Will you delete this data? This cannot be undone.</p>
                        <div className="modal-btn-div">
                            <button className="modal-cancel-btn" onClick={cancel}>Cancel</button>
                            <button className="modal-delete-btn" onClick={del}>Confirm</button>
                        </div>
                    </div>
                </div>
            ) : null }
        </div>
    )
}

export default DeleteModal;