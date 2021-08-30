import React, { useState } from 'react';
import axios from "axios";
import './IdeaScreen.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus, faAt, faCaretSquareDown, faSmile} from "@fortawesome/free-solid-svg-icons";

//MainScreenComponents
import NavBar from '../MainScreenComponents/Navigation_bar/NavBar';
import LeftBar from '../MainScreenComponents/Left_bar/LeftBar';
import MainUpperBarIdeaOn from '../MainScreenComponents/MainArea_Upper_bar/MainUpperBarIdeaOn';
import MainExplorer from '../MainScreenComponents/Explorer/MainExplorer';
import RightPanel from '../MainScreenComponents/Right_panel/RightPanel';

import IdeaPost from './IdeaPost';

function IdeaScreen(){
    //const [isFocus, setIsFocus] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [ideaInput, setIdeaInput] = useState("");

    /*
    const focusOn = () => {
        setIsFocus(true);
    }

    const focusOff = () => {
        setIsFocus(false);
    }
    */

    const changeHandler = (e) => {
        setIdeaInput(e.target.value);
        if (e.target.value != "") {
            setIsValid(true);
        }
        else {
            setIsValid(false);
        }
    }

    const cancelHandler = (e) => {
        setIsValid(false);
        setIdeaInput("");
    }

    const confirmHandler = (e) => {
        axios.post("http://localhost:8080/api/idea", {
            data: {
                ideaBoardId: "1",
                userId: "1",
                text: "개발", //ideaInput
                date: "2021-08-31",
                time: "05:10:02"
            }
        })
        .then(function(response) { console.log(response); })
        .catch((error) => { console.log(error.response); })
        

        setIsValid(false);
        setIdeaInput("");
    }


    return(
        <div className = "entire_webpage">
            <NavBar />
            <div className = "container">
                <LeftBar />
                <MainExplorer />    
                <div className = "main_area">
                    <MainUpperBarIdeaOn />

                    <div className = "main-idea">
                        <div className="idea-adding-div">
                            <div className="idea-adding-text-div">
                                <input
                                    className="idea-adding-text-input"
                                    placeholder="Share your idea to ask for feedback, collect data, or decide what to eat for lunch."
                                    value={ideaInput}
                                    //onFocus={focusOn}
                                    //onBlur={focusOff}
                                    onChange={changeHandler}/>
                            </div>
                            <div className="idea-adding-etc-div">
                                <div className="vertical-line-div">
                                    <FontAwesomeIcon icon={faPlus} className="search idea-adding-etc-plus" size="1x"/>
                                </div>
                                <div className="white-space-div"></div>
                                <div className="idea-adding-etc-icon-div">
                                    <FontAwesomeIcon icon={faCaretSquareDown} className="search idea-adding-etc-icons" />
                                    <FontAwesomeIcon icon={faAt} className="search idea-adding-etc-icons" />
                                    <FontAwesomeIcon icon={faSmile} className="search idea-adding-etc-icons" />
                                </div>                                
                            </div>
                            <div className="idea-adding-btn-div">
                                <button className="idea-btn idea-cancel-btn" disabled={!isValid} onClick={cancelHandler}>Cancel</button>
                                <button className="idea-btn idea-confirm-btn" disabled={!isValid} onClick={confirmHandler}>Confirm</button>
                            </div>
                        </div>
                    </div>
                    
                    <IdeaPost writer="Daeun Chung" date="2021-08-31" time="05:08:00" content="test! hehe"/>
                </div>
                <RightPanel />
            </div>
        </div>
    );
}


export default IdeaScreen;