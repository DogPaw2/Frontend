import React from 'react';

import Postuser from './testpostUser';
import Postworkspace from './testpostWorkspace';
import PostChannel from './testPostChannel';
import PostMsgRoom from './testPostMessageRoom';

import GetAllWorkspace from './testgetAllWorkspace';
import GetOneWorkspace from './testgetOneWorkspace';
import PostSingleChat from './testPostSingleChat';
import GetChat from './testgetchattings';
import GetChannel from './testgetChannels';

import GetMsgRoom from './testgetMessageRoom';
import PostSingleMessage from './testPostSingleMessage';


//import GetUser from './testgetuser';
//uncreated;




function TestScreen()
{
    return(
        <div>
            <h1>Welcome To TestPage!</h1>

            <h2>Here is a place to test POST single Chat for UserId-1</h2>
            <PostSingleChat />

            <h2>Here is a place to test GET CHATTING</h2>
            <GetChat />
        </div>
    );
    

}


export default TestScreen;

/*_______________________________________TRASHCAN_______________________________________________


            <h2>Here is a place to test POST DM</h2>
            <PostSingleMessage />

            <h2>Here is a place to test GET Messages of MessageRoom 1</h2>
            <GetMsgRoom />

            <h2>Here is a place to test POST single Chat for UserId-1</h2>
            <PostSingleChat />

            <h2>Here is a place to test POST USER</h2>
            <Postuser />

            <h2>Here is a place to test POST DM Room for UserId-1</h2>
            <PostMsgRoom />

            <h2>Here is a place to test POST CHANNEL of UserId-1, WorkspaceId-1</h2>
            <PostChannel />

            <h2>Here is a place to test POST WORKSPACE</h2>
            <Postworkspace />

            <h2>Here is a place to test GET CHATTING</h2>
            <GetChat />

            <h2>Here is a place to test GET CHANNEL</h2>
            <GetChannel />

            <h2>Here is a place to test GET ALL WORKSPACE</h2>
            <GetAllWorkspace />

            <h2>Here is a place to test GET ONE WORKSPACE</h2>
            <GetOneWorkspace />

*/