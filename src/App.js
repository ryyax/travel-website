import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import ToursPage from './components/ToursPage';
import TourItemPage from './components/TourItemPage';
import { mainURL } from './constants/constants';
import GuidesPage from './components/GuidesPage';
import AboutUsPage from './components/AboutUsPage';

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <div className="page-links">
                    <div className="container page-links__container">
                        <NavLink to={mainURL} className="page-links__link">
                            Головна
                        </NavLink>
                        <NavLink to={mainURL + 'tours'} className="page-links__link">
                            Тури
                        </NavLink>
                        <NavLink to={mainURL + 'guides'} className="page-links__link">
                            Гіди
                        </NavLink>
                        <NavLink to={mainURL + 'about'} className="page-links__link">
                            Про нас
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route path={mainURL} element={<MainPage />} />
                    <Route path={mainURL + 'tours'} element={<ToursPage />} />
                    <Route path={mainURL + 'tours/:id'} element={<TourItemPage />} />
                    <Route path={mainURL + 'guides'} element={<GuidesPage />} />
                    <Route path={mainURL + 'about'} element={<AboutUsPage />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
