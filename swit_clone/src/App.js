import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import SwitHome from './SwitHome';
import BuildWorkspace1 from './BuildWorkspace1';
import BuildWorkspace2 from './BuildWorkspace2';
import MainScreen from './MainScreen';
import IdeaScreen from './IdeaScreen';

function App() {
    return (
        <BrowserRouter>
            <Route path="/swit-home" component={SwitHome}/>
            <Route path="/build-workspace1" component={BuildWorkspace1}/>
            <Route path="/build-workspace2" component={BuildWorkspace2}/>
            <Route path="/chat" component={MainScreen}/>
            <Route path="/idea" component={IdeaScreen}/>
        </BrowserRouter>
    );
}

export default App;