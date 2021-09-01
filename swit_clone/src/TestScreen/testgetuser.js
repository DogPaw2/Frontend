import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* APIS
//유저
http://localhost:8080/api/user
*/

function GetUser(){
    const [Username, setUser] = useState('default');

    const getUsername = async() => {
        const username= await axios.get("http://localhost:8080/api/user",{
            params:{
                name : 1 
            }
        }
        ).then(response => {
            console.log(response.data);
            setUser(username);
        })
    }

    useEffect(()=>{
        getUsername();
    },[]);

    return(
        <div>
            <div>
                User GET Result : {Username}
            </div>
        </div>
    );

}

export default GetUser;