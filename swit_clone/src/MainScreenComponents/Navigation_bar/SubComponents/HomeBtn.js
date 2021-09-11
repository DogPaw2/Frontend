import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


function HomeBtn(props){
    const {userId, userName, userEmail} = props;
    const history = useHistory();

    const goHome = () => {
        history.push({
            pathname: `/swit-home/${userId}`,
            state: {
                userId: userId,
                userName: userName,
                userEmail: userEmail
            }
        })
    }

    return(
        <div className = "round_square_btn_area" id="Home">
            <div className = "home_btn">
                <FontAwesomeIcon icon={faHome} className="search" onClick={() => { goHome(); }} />
            </div>
        </div>
    );
}

export default HomeBtn;
