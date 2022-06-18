import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import ToursPage from './components/ToursPage';
import TourItemPage from './components/TourItemPage';
import { mainURL } from './constants/constants';

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <div className="page-links">
                    <div className="container page-links__container">
                        <NavLink to={mainURL} className="page-links__link">
                            Home
                        </NavLink>
                        <NavLink to={mainURL + 'tours'} className="page-links__link">
                            Tours
                        </NavLink>
                        <NavLink to={mainURL + 'guides'} className="page-links__link">
                            Our Guides
                        </NavLink>
                        <NavLink to={mainURL + 'book'} className="page-links__link">
                            Book A Trip
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route path={mainURL} element={<MainPage />} />
                    <Route path={mainURL + 'tours'} element={<ToursPage />} />
                    <Route path={mainURL + 'tours/:id'} element={<TourItemPage />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
