import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MainHeader from './components/MainHeader/MainHeader';
import './App.css';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainHeader/>}>
                    <Route index element={<Home/>}/>
                    {/*index sets a component as homepage for the site */}
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='*' element={<PageNotFound />} />
                </Route>
                {/* Home now acts as a parent to other Routes inside it, so whenever we click on other pages we will only see Home page content until we add and Outlet inside the home. Even after adding home, we will see the navebar again since we addded it in each component. To avoid this, we will just render it in home and leaver the others without it. */}
            </Routes>

        </>
    )
}

export default App;