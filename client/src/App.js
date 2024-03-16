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
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import LoginPage from './pages/LoginPage';
import AdminWedding from './pages/Admin/AdminWedding';
import AdminAddSlider from './pages/Admin/AdminAddSlider';
import AdminSlider from './pages/Admin/AdminSlider';
import './App.css';
import AdminAddWeddingMember from './pages/Admin/AdminAddWeddingMember';
import AdminWeddingList from './pages/Admin/AdminWeddingList';
import AdminUpdateWeddingMember from './pages/Admin/AdminUpdateWeddingMember';
import AdminGifts from './pages/Admin/AdminGifts';
import AdminGiftsList from './pages/Admin/AdminGiftsList';
import AdminUpdateGifts from './pages/Admin/AdminUpdateGifts';
import AdminAddGifts from './pages/Admin/AdminAddGifts';
import AdminUpdateSlider from './pages/Admin/AdminUpdateSlider';
import AdminAddTeam from './pages/Admin/AdminAddTeam';
import AdminTeams from './pages/Admin/AdminTeams';
import AdminContact from './pages/Admin/AdminContact';
import PageNotFound from './pages/PageNotFound';

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/about' element={<AboutPage />} />
            <Route exact path='/gallery' element={<GalleryPage />} />
            <Route exact path='/gallery/:id' element={<GalleryYear />} />
            <Route exact path='/wedding' element={<InformationPage />} />
            <Route exact path='/wedding/:year' element={<InforMationPerYear />} />
            <Route exact path='/news' element={<NewsPage />} />
            <Route exact path='/news/:slug' element={<InforMationPerYear />} />
            <Route exact path='/contact' element={<ContactPage />} />
            <Route exact path='/sutradhar' element={<SutradharPage />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/dashboard' element={<AdminRoute />}>
                <Route exact path='admin' element={<AdminDashboard />} />
                <Route exact path='admin/add_slider' element={<AdminAddSlider />} />
                <Route exact path='admin/slider' element={<AdminSlider />} />
                <Route exact path='admin/update_slider/:id' element={<AdminUpdateSlider />} />
                <Route exact path='admin/wedding' element={<AdminWedding />} />
                <Route exact path='admin/add_wedding_member' element={<AdminAddWeddingMember />} />
                <Route exact path='admin/wedding_update/:id' element={<AdminUpdateWeddingMember />} />
                <Route exact path='admin/wedding_year/:year' element={<AdminWeddingList />} />
                <Route exact path='admin/gift' element={<AdminGifts />} />
                <Route exact path='admin/gifts_update/:id' element={<AdminUpdateGifts />} />
                <Route exact path='admin/gifts_year/:year' element={<AdminGiftsList />} />
                <Route exact path='admin/add_gifts/' element={<AdminAddGifts />} />
                <Route exact path='admin/add_team' element={<AdminAddTeam />} />
                <Route exact path='admin/team' element={<AdminTeams />} />
                <Route exact path='admin/contact' element={<AdminContact />} />
            </Route>
            <Route exact path='/login' element={<LoginPage /> } />
            <Route exact path='/*' element={<PageNotFound />} />
        </Routes>
    );
}

export default App;
