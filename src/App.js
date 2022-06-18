import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import ToursPage from './components/ToursPage';
import TourItemPage from './components/TourItemPage';

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <div className="page-links">
                    <div className="container page-links__container">
                        <NavLink to={''} className="page-links__link">
                            Home
                        </NavLink>
                        <NavLink to={'/tours'} className="page-links__link">
                            Tours
                        </NavLink>
                        <NavLink to={'/guides'} className="page-links__link">
                            Our Guides
                        </NavLink>
                        <NavLink to={'/book'} className="page-links__link">
                            Book A Trip
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route path="/travel-website/" element={<MainPage />} />
                    <Route path="/travel-website/tours" element={<ToursPage />} />
                    <Route path="/travel-website/tours/:id" element={<TourItemPage />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
