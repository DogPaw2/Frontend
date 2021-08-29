import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


function HomeBtn(){
    return(
        <div className = "round_square_btn_area" id="Home">
            <div className = "home_btn">
                <Link to = "/swit-home">
                    <FontAwesomeIcon icon={faHome} className="search" />
                </Link>
            </div>
        </div>
    );
}

export default HomeBtn;
