import React, { useEffect, useState } from 'react';
import axios from 'axios';


function UserInfoCircle(props){
    const [UserInitial, setUserInitial] = useState("");

    const SetUserInitial = () =>
    {
        const UInit = (props.uname)
        setUserInitial(UInit.substring(0,1));
    }

    useEffect(()=>{
        SetUserInitial();
    },[]);

    return(

        <div className = "round_square_btn_area">
            <div className = "round_btn" id="User">
                {UserInitial}
            </div>
        </div>
    );

}

export default UserInfoCircle;

