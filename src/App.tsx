import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MangaDetailsPage from './pages/MangaDetailsPage/MangaDetailsPage';
import ChapterReadingPage from './pages/ChapterReadingPage/ChapterReadingPage';

function App() {
    return (
        <Router>
            <div className='w-screen mx-auto px-4 h-screen'>
                <NavBar />
                <div className="pt-16">
                <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/manga/:id" element={<MangaDetailsPage />} />
                        <Route path="/manga/:id/chapter/:chapterId" element={<ChapterReadingPage />} />                
                </Routes>
               </div>
            </div>
        </Router>
    );
}

export default App;
