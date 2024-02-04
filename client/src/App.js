import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import GalleryYear from './pages/GalleryYear';
import InformationPage from './pages/InformationPage';
import InforMationPerYear from './pages/InforMationPerYear';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import SutradharPage from './pages/SutradharPage';
import Register from './pages/Register';

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/about' element={<AboutPage />} />
            <Route exact path='/gallery' element={<GalleryPage />} />
            <Route exact path='/gallery/:slug' element={<GalleryYear />} />
            <Route exact path='/wedding' element={<InformationPage />} />
            <Route exact path='/wedding/:slug' element={<InforMationPerYear />} />
            <Route exact path='/news' element={<NewsPage />} />
            <Route exact path='/news/:slug' element={<InforMationPerYear />} />
            <Route exact path='/contact' element={<ContactPage />} />
            <Route exact path='/sutradhar' element={<SutradharPage />} />
            <Route exact path='/register' element={<Register />} />
        </Routes>
    );
}

export default App;
