import React from 'react';

import Postuser from './testpostUser';
import Postworkspace from './testpostWorkspace';

function TestScreen()
{
    return(
        <div>
            <h1>Welcome To TestPage!</h1>
            <Postuser/>
            <Postworkspace />
        </div>
    );
    

}

export default TestScreen;