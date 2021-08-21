import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import SwitHome from './SwitHome';
import MainScreen from './MainScreen';

function App() {
    return (
        <BrowserRouter>
            <Route path="/home" component={SwitHome}/>
            <Route path="/chat" component={MainScreen}/>
        </BrowserRouter>
    );
}

export default App;