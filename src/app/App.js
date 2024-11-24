// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuestHomepage from './components/newComponents/GuestHomepage';
import LoginPage from './components/newComponents/LoginPage'
import AuthUserPage from './components/newComponents/AuthUserPage';
import SignUpPage from './components/newComponents/SignUpPage'

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<GuestHomepage />} /> 
                <Route path="/" element={<GuestHomepage />} />
                <Route path="/login" element={<LoginPage />} /> 
                <Route path="/signup" element={<SignUpPage />} /> 
                <Route path="/user" element={<AuthUserPage />} /> 
            </Routes>
        </Router>
    );
}

export default App;
