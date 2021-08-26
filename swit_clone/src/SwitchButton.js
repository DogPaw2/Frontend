import React, { useState } from 'react';
import './SwitchButton.css';

const SwitchButton = ({isChecked, onChange}) => {
    return (
        <div className="SwitchButton">
            <input
                className="switch-input"
                id="switch-button-link"
                type="checkbox"
                checked={isChecked}
                onChange={e=>onChange(e.target.checked)}
            />
            <label
                className="switch-label"
                htmlFor="switch-button-link"
            >
                <div className="ball"/>
            </label>
        </div>
    );
}

export default SwitchButton;