import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import  SelectedBeerProvider  from './context/SelectedBeerContext.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx'
import ScrollToTop from "./components/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
        <Router>
            <AuthContextProvider>
                <SelectedBeerProvider>
                    <ScrollToTop>
                    <App/>
                    </ScrollToTop>
                </SelectedBeerProvider>
            </AuthContextProvider>
        </Router>

)
