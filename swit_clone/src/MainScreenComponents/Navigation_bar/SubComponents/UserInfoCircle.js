import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserInfoCircle(){

    const [Username, setUser] = useState('');

    const getUsername = () => {
        const username = axios.get('http://localhost:8080/api/workspace',{
            params:{
                "userId": 1
            }
        }).then(response => {
            console.log(response.data);
            setUser(username);
            console.log(username);
        })
    }

    useEffect(()=>{
        getUsername();
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

