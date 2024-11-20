// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuestHomepage from './components/newComponents/GuestHomepage';
import LoginPage from './components/newComponents/LoginPage'
import AuthUserPage from './components/newComponents/AuthUserPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<GuestHomepage />} /> 
                <Route path="/" element={<GuestHomepage />} />
                <Route path="/login" element={<LoginPage />} /> 
                <Route path="/user" element={<AuthUserPage />} /> 
            </Routes>
        </Router>
    );
}

export default App;
