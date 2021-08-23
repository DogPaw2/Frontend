import React from 'react';
import { useForm } from 'react-hook-form';
import './SwitHome.css';
import './BuildWorkspace.css';

function BuildWorkspace( {history} ) {
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm( {mode: "onChange"});
    const onSubmit = (data) => console.log(data);

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <span className="question-span">What do you want to call your team workspace?</span>
                        <input
                            className="answer-input workspace-name-input"
                            type="text"
                            placeholder=" Workspace name"
                            autoComplete="off"
                            required
                            {...register("singleErrorInput", {
                                required: true
                            })}>
                        </input>
                        <span className="question-span">Enter your workspace's Swit URL</span>
                        <div className="url-sub-div">
                            <input
                                className="answer-input workspace-url-input"
                                type="text"
                                placeholder=" your-workspace-url"
                                autoComplete="off"
                                required
                                pattern="^[A-Za-z0-9][A-Za-z0-9-]{2,18}[A-Za-z0-9]$"
                                {...register("urlErrorInput", {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Za-z0-9][A-Za-z0-9-]{2,18}[A-Za-z0-9]$/,
                                        message: "Must be 4-20 characters and only contain alphabet letters and numbers, along with hyphens (-) not in the first or last position."
                                    }
                                })}>
                            </input>
                            <span className="direction-span">.swit.io</span><br/>
                        </div>
                        {errors.urlErrorInput && <p className="validation-error-message">{errors.urlErrorInput.message}</p>}
                        <span className="default-direction-span">You can rename workspace or set a new URL in the setting at any time.</span>
                        <div className="btn-sub-div">
                            <button className="cancel-btn" onClick={()=>{history.push("/swit-home")}}>Cancel</button>
                            <button className="next-btn" onClick={()=>{history.push("/build-workspace2")}} disabled={!isDirty || !isValid}>Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BuildWorkspace;