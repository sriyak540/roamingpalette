"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter(); // Replace useNavigate with useRouter

    const handleLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            sessionStorage.setItem("userId", username); // Save username to sessionStorage
            router.push("/user"); // Navigate to user page
        } else {
            alert("Please enter a username and password.");
        }
    };

    return (
        <div>
            <header className="flex items-center justify-between p-2 bg-white">
                <div className="flex items-center space-x-2">
                    <img src="/logo.svg" alt="Roaming Palette Logo" width="50" />
                    <h1 className="font-extrabold text-black font-sans text-2xl pl-2">
                        Roaming Palette
                    </h1>
                </div>

                <div className="flex items-center space-x-4 z-20">
                    <Link href="/">
                        <button
                            type="button"
                            className="p-3 pr-4 pl-4 hover:underline cursor-pointer bg-orange-300 rounded-lg text-black font-sans font-semibold"
                        >
                            Return to Guest Home
                        </button>
                    </Link>
                    <Link href="/signup">
                        <button
                            type="button"
                            className="p-3 pr-4 pl-4 hover:underline cursor-pointer bg-orange-600 rounded-lg text-black font-sans font-semibold"
                        >
                            Sign Up
                        </button>
                    </Link>
                </div>
            </header>

            <div className="fixed inset-0 flex items-center justify-center z-10">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Username
                            </label>
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
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
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
                        <button
                            type="submit"
                            className="w-full bg-orange-600 text-white py-2 rounded-lg"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
