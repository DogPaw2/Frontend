import React from 'react';
import "../BuildWorkspace/LinkModal.css";

const EditCancelModal = ( props ) => {
    const { open, back, discard } = props;

    return (
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <div>
                    <div className="modal-content">
                        <h3>Discard changes</h3> 
                        <p className="modal-direction-p">Will you discard your changes?</p>
                        <div className="modal-btn-div">
                            <button className="modal-cancel-btn back-discard-btn" onClick={back}>Back to editing</button>
                            <button className="modal-delete-btn back-discard-btn" onClick={discard}>Discard changes</button>
                        </div>
                    </div>
                </div>
            ) : null }
        </div>
    )
}

export default EditCancelModal;