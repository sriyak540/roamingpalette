// src/App.js
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuestHomepage from './components/newComponents/guesthomepage/page';
import LoginPage from './components/newComponents/login/page'
import AuthUserPage from './components/newComponents/authuser/page';
import SignUpPage from './components/newComponents/signup/page'

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
