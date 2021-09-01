import React from 'react';


import GetAllWorkspace from './testgetAllWorkspace';
import Postuser from './testpostUser';
import Postworkspace from './testpostWorkspace';

//import GetUser from './testgetuser';
//uncreated;




function TestScreen()
{
    return(
        <div>
            <h1>Welcome To TestPage!</h1>
            <h2>Here is a place to test POST</h2>
            <Postuser/>
            <Postworkspace />

            <h2>Here is a place to test GET</h2>
            <GetAllWorkspace />
        </div>
    );
    

}

export default TestScreen;