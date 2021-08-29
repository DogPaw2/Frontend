import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserInfoCircle(){
    const [Username, setUser] = useState('');

    const getUsername = async(uid) => {
        const username = await axios.get('http://localhost:8080/api/workspace',{
            data:{
                "userId": uid
            }
        }).then(response => {setUser(username)})
    }

    useEffect(()=>{
        getUsername("123")
        //should be variable
    },[]);

    return(
        <div className = "round_square_btn_area">
            <div className = "round_btn" id="User">
                {Username}
            </div>
        </div>
    );

}

export default UserInfoCircle;

