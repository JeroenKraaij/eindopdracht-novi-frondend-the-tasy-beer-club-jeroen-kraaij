import { Routes, Route } from 'react-router-dom';

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
import Design from "./pages/Design/Design.jsx"
import OverOns from "./pages/OverOns/OverOns.jsx";
import Account from "./pages/Account/Account.jsx"
import Inloggen from "./pages/Inloggen/Inloggen.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import Winkelmandje from "./pages/Winkelmandje/Winkelmandje.jsx";


function App() {

  return (
    <>
        <header className='main-header'>
            <Header/>
        </header>
        <main className='main-outer-container'>
            <section className='main-inner-container'>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/smaaktest" element={<Smaaktest/>}/>
                    <Route path="/webshop" element={<Webshop/>}/>
                    <Route path="/over-ons" element={<OverOns/>}/>
                    <Route path="/artikelen/" element={<ArticlePage/>}/>
                    <Route path="/artikelen/:id" element={<Blogs />}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/design" element={<Design/>}/>
                    <Route path="/inloggen" element={<Inloggen/>}/>
                    <Route path="/account" element={<Account/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/product/:id" element={<ProductPage/>}/>
                    <Route path="/webshop/winkelmandje" element={<Winkelmandje/>}></Route>
                </Routes>
            </section>
        </main>
        <footer className='main-footer'>
        <Footer/>
        </footer>
    </>
  )
}

export default App
