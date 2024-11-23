import React, { useState } from "react";
import Link from "next/link";

function GuestHeader({ isLoggedIn, onLogin, onLogout, onSignUp, username }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [showModal, setShowModal] = useState(null); // 'login' or 'signup'
    const [loginUsername, setLoginUsername] = useState("");
    const [password, setPassword] = useState("");
    const [signupUsername, setSignupUsername] = useState("");
    const [signupPassword, setSignupPassword] = useState("");

    const openModal = (type) => setShowModal(type);
    const closeModal = () => setShowModal(null);

    const submitLogin = (e) => {
        e.preventDefault();
        if (loginUsername && password) {
            onLogin(loginUsername);
            closeModal();
        } else {
            alert("Please enter both username and password");
        }
    };

    const submitSignUp = (e) => {
        e.preventDefault();
        if (signupUsername && signupPassword) {
            onSignUp(signupUsername, signupPassword);
            closeModal();
        } else {
            alert("Please enter both username and password");
        }
    };

    const logoutHandler = () => {
        onLogout();
    };

    return (
        <div>
            <header className="flex items-center justify-between p-2 bg-white">
                <div className="flex items-center space-x-2">
                    <img src="/logo.svg" alt="Roaming Palette Logo" width="50" />
                    <h1 className="font-extrabold text-black font-sans text-2xl pl-2">Roaming Palette</h1>
                </div>

                <div className="flex items-center justify-center flex-grow">
                    <input
                        type="text"
                        value={searchQuery}
                        placeholder="Search restaurant, cuisines..."
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="p-3 w-80 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 font-sans"
                    />
                </div>

                <div className="flex items-center space-x-4 z-10">
                    {!isLoggedIn ? (
                        <>
                            <button
                                className="p-3 hover:underline cursor-pointer bg-orange-600 rounded-lg text-black font-sans font-semibold"
                                onClick={() => openModal("signup")}
                            >
                                Sign Up
                            </button>
                            <button
                                className="p-3 pr-4 pl-4 hover:underline cursor-pointer bg-orange-300 rounded-lg text-black font-sans font-semibold"
                                onClick={() => openModal("login")}
                            >
                                Login
                            </button>
                        </>
                    ) : (
                        <Link href="/" legacyBehavior>
                            <a>
                                <button
                                    onClick={logoutHandler}
                                    className="p-3 hover:underline cursor-pointer bg-orange-300 rounded-lg text-black font-semibold font-sans"
                                >
                                    Logout
                                </button>
                            </a>
                        </Link>
                    )}
                </div>
            </header>

            <div className="relative w-full h-full">
                <img src="/header-image.svg" alt="header image" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 flex items-center justify-center">
                    <div className="w-2/4" />
                    <h1 className="p-3 pr-6 text-8xl font-serif text-white text-right w-2/4 font-light">
                        Explore <br /> the <br /> palettes of <br /> the world
                    </h1>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-20">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl mb-4">{showModal === "login" ? "Login" : "Sign Up"}</h2>
                        <form onSubmit={showModal === "login" ? submitLogin : submitSignUp}>
                            <div className="mb-4">
                                <label
                                    htmlFor={`${showModal}Username`}
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Username
                                </label>
                                <input
                                    id={`${showModal}Username`}
                                    type="text"
                                    value={showModal === "login" ? loginUsername : signupUsername}
                                    onChange={(e) =>
                                        showModal === "login"
                                            ? setLoginUsername(e.target.value)
                                            : setSignupUsername(e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    placeholder="Enter your username"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor={`${showModal}Password`}
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    id={`${showModal}Password`}
                                    type="password"
                                    value={showModal === "login" ? password : signupPassword}
                                    onChange={(e) =>
                                        showModal === "login"
                                            ? setPassword(e.target.value)
                                            : setSignupPassword(e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-orange-600 text-white py-2 rounded-lg"
                            >
                                {showModal === "login" ? "Login" : "Sign Up"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
export default GuestHeader;