import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import SwitHome from './SwitHome/SwitHome';
import BuildWorkspace1 from './BuildWorkspace/BuildWorkspace1';
import BuildWorkspace2 from './BuildWorkspace/BuildWorkspace2';
import MainScreen from './ChatScreen/MainScreen';
import IdeaScreen from './IdeaScreen/IdeaScreen';
import TestScreen from './TestScreen/testscreen';

function App() {
    return (
        <BrowserRouter>
            <Route path="/swit-home" component={SwitHome}/>
            <Route path="/build-workspace1" component={BuildWorkspace1}/>
            <Route path="/build-workspace2" component={BuildWorkspace2}/>
            <Route exact path="/chat" component={MainScreen}/>
            <Route exact path="/idea" component={IdeaScreen}/>
            <Route path = "/test" component={TestScreen}/>
        </BrowserRouter>
    );
}

export default App;