import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { StateContextProvider } from "./context/StateContextProvider";

import "./global.css";


const container = document.getElementById('root');
const root = createRoot(container);


root.render( 
    <StateContextProvider>
        <Router>
            <App /> 
        </Router>
    </StateContextProvider>
);
