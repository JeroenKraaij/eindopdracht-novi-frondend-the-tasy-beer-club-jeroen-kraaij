import { Routes, Route, Navigate} from 'react-router-dom';
import { useAuthContext } from "./hooks/UseAuthContext.js";

// Styles
import './App.css';

// Pages & Components
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Smaaktest from './pages/Smaaktest/Smaaktest.jsx';
import Webshop from "./pages/Webshop/Webshop.jsx";
import ArticlePage from "./pages/ArticlePage/ArticlePage.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import OverOns from "./pages/OverOns/OverOns.jsx";
import Account from "./pages/Account/Account.jsx"
import Inloggen from "./pages/Inloggen/Inloggen.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import Winkelmandje from "./pages/Winkelmandje/Winkelmandje.jsx";
import CheckOut from "./pages/CheckOut/CheckOut.jsx";

function App() {
    const { user, authIsReady } = useAuthContext();

    return (
        <>
            <header className='main-header'>
                <Header/>
            </header>
            <main className='main-outer-container'>
                <section className='main-inner-container'>
                    {authIsReady && (
                        <Routes>
                            <Route index element={<Home/>}/>
                            <Route path="/smaaktest" element={<Smaaktest/>}/>
                            <Route path="/webshop" element={<Webshop/>}/>
                            <Route path="/over-ons" element={<OverOns/>}/>
                            <Route path="/artikelen/" element={<ArticlePage/>}/>
                            <Route path="/artikelen/:id" element={<Blogs />}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route path="*" element={<NotFound/>}/>
                            <Route path="/product/:id" element={<ProductPage/>}/>
                            <Route path="/webshop/winkelmandje" element={<Winkelmandje/>}/>
                            <Route path="/inloggen" element={user ? <Navigate to="/account"/> : <Inloggen/>}/>
                            <Route path="/account" element={user ? <Account/> : <Navigate to='/inloggen' />} />
                            <Route path="/webshop/checkout" element={<CheckOut/>} />
                        </Routes>
                    )}
                </section>
            </main>
            <footer className='main-footer'>
                <Footer/>
            </footer>
        </>
    )
}

export default App;
