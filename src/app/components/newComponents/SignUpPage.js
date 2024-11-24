import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function SignUpPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [pfp, setProfilePic] = useState('');
    const navigate = useNavigate();
    
    const handleCreateAccount = (e) => {
        e.preventDefault();
        if (username && password) {
            setUsername(username);
            setPassword(password);
            setEmail(email);
            navigate("/user");
            sessionStorage.setItem('userId', username);
        } else {
            alert("Please enter a username and password.");
        }
    };
    
    return (
        <div>
            <header className="flex items-center justify-between p-2 bg-white">
                <div className="flex items-center space-x-2">
                    <img src="/logo.svg" alt="Roaming Palette Logo" width="50" />
                    <h1 className="font-extrabold text-black font-sans text-2xl pl-2">Roaming Palette</h1>
                </div>

                <div className="flex items-center space-x-4 z-20"> 
                    <Link to="/"><button type="submit" className="p-3 pr-4 pl-4 hover:underline cursor-pointer bg-orange-300 rounded-lg text-black font-sans font-semibold">Return to Guest Home</button></Link>
                    <Link to="/login"><button type="submit" className="p-3 pr-4 pl-4 hover:underline cursor-pointer bg-orange-300 rounded-lg text-black font-sans font-semibold">Return to Login</button></Link>
                </div>
            </header>

            <div className="fixed inset-0 flex items-center justify-center z-10">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl mb-4">Create Account</h2>
                    <form onSubmit={handleCreateAccount}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded-lg">Sign Up</button>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default SignUpPage;