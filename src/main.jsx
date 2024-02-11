import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import { SelectedBeerProvider } from './context/SelectedBeerContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(


        <Router>
            <SelectedBeerProvider>
            <App/>
            </SelectedBeerProvider>
        </Router>

)
