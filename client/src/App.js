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
import AdminUpdateTeam from './pages/Admin/AdminUpdateTeam';
import AdminAddNews from './pages/Admin/AdminAddNews';
import AdminNews from './pages/Admin/AdminNews';
import NewDetails from './pages/NewDetails';
import AdminUpdateNews from './pages/Admin/AdminUpdateNews';
import AdminAddGalleryImage from './pages/Admin/AdminAddGalleryImage';
import AdminGallery from './pages/Admin/AdminGallery';
import AdminGalleryImage from './pages/Admin/AdminGalleryImage';
import AdminAddBook from './pages/Admin/AdminAddBook';
import AdminBooks from './pages/Admin/AdminBooks';
import KarmawatiPage from './pages/KarmawatiPage';
import KarmawatiYearPage from './pages/KarmawatiYearPage';
import RegisterKarmawatiPage from './pages/RegisterKarmawatiPage';
import AdminKarmawati from './pages/Admin/AdminKarmawati';
import AdminKarmawatiList from './pages/Admin/AdminKarmawatiList';
import AdminKarma from './pages/Admin/AdminKarma';
import AdminKarmaList from './pages/Admin/AdminKarmaList';
import AdminAddKarmawati from './pages/Admin/AdminAddKarmawati';
import SamanSamarowPage from './pages/SamanSamarowPage';
import RegisterSamanSamarohPage from './pages/RegisterSamanSamarohPage';
import AdminSamanSamaroh from './pages/Admin/AdminSamanSamaroh';
import AdminSamanList from './pages/Admin/AdminSamanList';
import SamanYearPage from './pages/SamanYearPage';
import TermAndConditionPage from './pages/TermAndConditionPage';
import AdminWeddingRegisterPage from './pages/Admin/AdminWeddingRegisterPage';
import AdminWeddingRegisterYearPage from './pages/Admin/AdminWeddingRegisterYearPage';
import AdminAdvertisement from './pages/Admin/AdminAdvertisement';
import AdminAddAdvertisement from './pages/Admin/AdminAddAdvertisement';

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/about' element={<AboutPage />} />
            <Route exact path='/gallery' element={<GalleryPage />} />
            <Route exact path='/gallery/:year' element={<GalleryYear />} />
            <Route exact path='/wedding' element={<InformationPage />} />
            <Route exact path='/wedding/:year' element={<InforMationPerYear />} />
            <Route exact path='/news' element={<NewsPage />} />
            <Route exact path='/news/:id' element={<NewDetails />} />
            <Route exact path='/contact' element={<ContactPage />} />
            <Route exact path='/sutradhar' element={<SutradharPage />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/karmawati' element={<KarmawatiPage />} />
            <Route exact path='/karmawati/:year' element={<KarmawatiYearPage />} />
            <Route exact path='/saman' element={<SamanSamarowPage />} />
            <Route exact path='/saman/:year' element={<SamanYearPage />} />
            <Route exact path='/registersamansamroh' element={<RegisterSamanSamarohPage />} />
            <Route exact path='/registerkarmawati' element={<RegisterKarmawatiPage />} />
            <Route exact path='/dashboard' element={<AdminRoute />}>
                <Route exact path='admin' element={<AdminDashboard />} />
                <Route exact path='admin/add_slider' element={<AdminAddSlider />} />
                <Route exact path='admin/slider' element={<AdminSlider />} />
                <Route exact path='admin/update_slider/:id' element={<AdminUpdateSlider />} />
                <Route exact path='admin/wedding_register' element={<AdminWeddingRegisterPage />} />
                <Route exact path='admin/wedding_register/:year' element={<AdminWeddingRegisterYearPage />} />
                <Route exact path='admin/wedding' element={<AdminWedding />} />
                <Route exact path='admin/add_wedding_member' element={<AdminAddWeddingMember />} />
                <Route exact path='admin/wedding_update/:id' element={<AdminUpdateWeddingMember />} />
                <Route exact path='admin/wedding_year/:year' element={<AdminWeddingList />} />
                <Route exact path='admin/gift' element={<AdminGifts />} />
                <Route exact path='admin/gifts_update/:id' element={<AdminUpdateGifts />} />
                <Route exact path='admin/gifts_year/:year' element={<AdminGiftsList />} />
                <Route exact path='admin/add_gifts/' element={<AdminAddGifts />} />
                <Route exact path='admin/add_team' element={<AdminAddTeam />} />
                <Route exact path='admin/update_team/:id' element={<AdminUpdateTeam />} />
                <Route exact path='admin/team' element={<AdminTeams />} />
                <Route exact path='admin/add_news' element={<AdminAddNews />} />
                <Route exact path='admin/news' element={<AdminNews />} />
                <Route exact path='admin/update_news/:id' element={<AdminUpdateNews />} />
                <Route exact path='admin/add_gallery_image' element={<AdminAddGalleryImage />} />
                <Route exact path='admin/gallery' element={<AdminGallery />} />
                <Route exact path='admin/gallery_image/:year' element={<AdminGalleryImage />} />
                <Route exact path='admin/contact' element={<AdminContact />} />
                <Route exact path='admin/add_book' element={<AdminAddBook />} />
                <Route exact path='admin/karmawati' element={<AdminKarmawati />} />
                <Route exact path='admin/karmawati/:year' element={<AdminKarmawatiList />} />
                <Route exact path='admin/karma' element={<AdminKarma />} />
                <Route exact path='admin/karma/:year' element={<AdminKarmaList />} />
                <Route exact path='admin/add_karma' element={<AdminAddKarmawati />} />
                <Route exact path='admin/saman' element={<AdminSamanSamaroh />} />
                <Route exact path='admin/saman/:year' element={<AdminSamanList />} />
                <Route exact path='admin/book' element={<AdminBooks />} />
                <Route exact path='admin/advertisement' element={<AdminAdvertisement />} />
                <Route exact path='admin/add_advertisement' element={<AdminAddAdvertisement />} />
            </Route>
            <Route exact path='/login' element={<LoginPage /> } />
            <Route exact path='/terms' element={<TermAndConditionPage />} />
            <Route exact path='/*' element={<PageNotFound />} />
        </Routes>
    );
}

export default App;
